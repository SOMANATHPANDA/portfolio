import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";

export default function Hero({ profile }) {
  return (
    <header
      id="top"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {profile.headshot && (
            <img
              src={profile.headshot}
              alt={`${profile.name} headshot`}
              className="w-28 h-28 rounded-2xl object-cover border border-gray-200 dark:border-gray-800"
            />
          )}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              {profile.name}
            </motion.h1>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              {profile.title}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              {profile.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {profile.location}
                </span>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 hover:opacity-80"
                >
                  <Mail className="w-4 h-4" /> {profile.email}
                </a>
              )}
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 hover:opacity-80"
                >
                  <Phone className="w-4 h-4" /> {profile.phone}
                </a>
              )}
            </div>
            <p className="mt-6 max-w-3xl leading-7 text-gray-700 dark:text-gray-300">
              {profile.summary}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {profile.social.github && (
                <a
                  className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900"
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
              {profile.social.github && (
                <a
                  className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900"
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail className="w-4 h-4" /> Mail Me
                </a>
              )}
              {profile.social.linkedin && (
                <a
                  className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900"
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
              {profile.social.website && (
                <a
                  className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900"
                  href={profile.social.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe className="w-4 h-4" /> Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
