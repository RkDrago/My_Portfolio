"use client";

import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {

    const pathname = usePathname()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error);
            }

            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        }
    };
    return (
        <div className="rounded-[20px] bg-white/40 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] text-black sm:p-8">
            <h3 className="text-2xl font-bold text-black/80">
                Send Me a Message
            </h3>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4 space-y-4"
            >
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold uppercase text-black/90"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                            },
                        })}
                        className={`w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-3 outline-none transition ${pathname === "/blackhole" ? "focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20" : "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"}`}
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-800 font-semibold">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase text-black/90"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        className={`w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-3 outline-none transition ${pathname === "/blackhole" ? "focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20" : "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"}`}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-800 font-semibold">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-bold uppercase text-black/90"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        rows="2"
                        placeholder="Tell me about your project..."
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters",
                            },
                        })}
                        className={`w-full min-h-20 max-h-50 rounded-lg border border-gray-200 bg-white/50 px-4 py-3 outline-none transition ${pathname === "/blackhole" ? "focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20" : "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"}`}
                    />

                    {errors.message && (
                        <p className="mt-1 text-sm text-red-800 font-semibold">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-black/50 px-6 py-3 font-medium text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}

                    {!isSubmitting && (
                        <i className="ri-send-plane-fill" />
                    )}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
