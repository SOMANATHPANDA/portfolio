import Section from "./Section";
import Card from "./Card";
import { Linkedin, Github } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ profile }) {
  const form = useRef();
  const [status, setStatus] = useState("");

  // ✅ Form state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  // ✅ Validation
  const isFormValid =
    formData.user_name &&
    formData.user_email &&
    formData.subject &&
    formData.message;

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Send email
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Mail sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: ""
          });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send mail.");
        }
      );
  };

  return (
    <Section id="contact" title="Contact">
      <Card>
        <div className="space-y-4">
          <p>If you’d like to reach out, send me a direct message:</p>

          {/* ✅ Note */}
          <p className="text-xs text-gray-500">
            * All fields are required
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            
            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name *"
              required
              value={formData.user_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email *"
              required
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-4 py-2 rounded-lg transition ${
                isFormValid
                  ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:opacity-80"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Send
            </button>
          </form>

          {/* Status */}
          {status && <p className="text-sm pt-2">{status}</p>}

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>

            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}