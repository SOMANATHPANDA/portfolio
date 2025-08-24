import Section from "./Section";
import Card from "./Card";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ profile }) {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus("✅ Mail sent successfully!");
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
          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg hover:opacity-80"
            >
              Send
            </button>
          </form>
          {status && <p className="text-sm pt-2">{status}</p>}

          <div className="flex flex-wrap gap-4 pt-4">
            {/* <a href={`mailto:${profile.email}`} className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> Mail Me
            </a> */}
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            {/* <a href={profile.social.website} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Globe className="w-4 h-4" /> Website
            </a> */}
          </div>
        </div>
      </Card>
    </Section>
  );
}
