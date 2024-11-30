"use client";
import React from "react";
// import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Heading from "../component/Heading";
import toast, { Toaster } from "react-hot-toast";
export default function page() {
    /*  making contact form dynamic using web3 forms -----------------*/
    async function handleSubmit(event) {
        /* toast */
        toast(` Message Sending...`);
        /* -- */
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "63d92490-b288-426c-b811-46175ad3574a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });
            const result = await response.json();
            if (result.success) {
                // toast.success("Message sent successfully!");
                Swal.fire({
                    title: "Success",
                    text: "Thanks for contact us",
                    icon: "success",
                });
            } else {
                // toast.error("Something went wrong. Please try again.");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            // toast.error("An error occurred. Please try again later.");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again later.",
            });
        }
    }

    return (
        <section className="mx-auto max-w-screen-md ">
            {/* React hot tast------------ */}
            <Toaster position="top-center" reverseOrder={false} />
            <Heading title={"Contact Me"} />
            <div className="lg:mt-32">
                <form onSubmit={handleSubmit} className="space-y-3 ">
                    <input type="hidden" name="subject" value={"A new message from Your Portfolio"} />
                    <div className="grid grid-cols-2 gap-3 ">
                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5 bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-light"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5 bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-light"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <textarea
                            id="message"
                            required
                            name="message"
                            rows="6"
                            className="block p-2.5 w-full text-lg rounded-lg shadow-sm focus:ring-primary-500 outline-none bg-[#18181B] border-none text-white focus:ring-primary-500 focus:border-none"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#b0873b] hover:bg-[#795b25] p-3 rounded-lg">
                        Send message
                    </button>
                </form>
                {/*   <div className="bg-black">
          <TestimonialSlider />
        </div> */}
            </div>
        </section>
    );
}
