"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/userInView";
import SubmitBtn from "./submit-btn";
import { Fade } from "react-awesome-reveal";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://formspree.io/f/xdkozowk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!", { id: toastId });
        setFormData({
          senderName: "",
          senderEmail: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again later.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Error sending email:", error); // Log the error
      toast.error("An error occurred. Please try again.", { id: toastId });
    }
  };

  return (
    <motion.section id="contact" ref={ref}>
      <Toaster position="top-right" richColors={true} /> {/* Add Toaster */}
      <Fade
        triggerOnce={true}
        direction="up"
        cascade
        damping={1e-1}
        delay={400}
      >
        <SectionHeading>{"Contact Me"}</SectionHeading>
      </Fade>
      <Fade
        triggerOnce={true}
        direction="up"
        cascade
        damping={1e-1}
        delay={600}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {"Feel free to contact me directly through this form"}
        </p>
      </Fade>
      <Fade
        triggerOnce={true}
        direction="up"
        cascade
        damping={1e-1}
        delay={800}
      >
        <form
          className="mt-10 flex flex-col gap-6 dark:text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
            value={formData.senderName}
            onChange={handleChange}
            className="h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-white"
          />
          <input
            type="email"
            name="senderEmail"
            placeholder="Your Email"
            required
            value={formData.senderEmail}
            onChange={handleChange}
            className="h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="h-32 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-white"
          />
          <SubmitBtn text="Submit" />
        </form>
      </Fade>
    </motion.section>
  );
}
