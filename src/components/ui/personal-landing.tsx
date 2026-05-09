"use client";

import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Mail } from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-violet-400 opacity-60 blur-lg animate-pulse" />
        <img
          src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=VineetDharwad"
          alt="avatar"
          className="relative size-32 rounded-full border-4 border-zinc-800 shadow-xl z-10 bg-[#050914]"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight font-outfit drop-shadow-lg text-white">
        Let's <span className="text-sky-400">Connect</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-lg mx-auto font-sans font-normal text-pretty">
        I craft beautiful, performant web experiences and autonomous AI systems.
      </p>
    </section>
  );
};

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://in.linkedin.com/in/vineet-dharwad-3a8a50389',
    label: 'LinkedIn',
    icon: <LinkedinIcon size={28} />,
    bg: 'bg-[#0077b5]',
    text: 'text-white',
  },
  {
    href: 'https://github.com/winitdwd-lgtm',
    label: 'GitHub',
    icon: <GithubIcon size={28} />,
    bg: 'bg-zinc-800',
    text: 'text-white',
  },
  {
    href: 'mailto:winit.dwd@gmail.com',
    label: 'Email',
    icon: <Mail size={28} />,
    bg: 'bg-sky-500',
    text: 'text-white',
  },
];

const SocialsBlock: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-4 w-full font-sans">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={twMerge(
          'flex items-center gap-2 rounded-full border border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-opacity-80',
          link.bg,
          link.text,
        )}
        style={{ minWidth: 140, minHeight: 56 }}
        tabIndex={0}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

const AboutBlock = () => (
  <div className="w-full rounded-2xl border border-white/10 glass p-7 shadow-lg text-center font-sans">
    <p className="text-lg md:text-xl text-slate-300 font-normal">
      Passionate about building elegant, accessible, and high-performance software.<br />Always learning, always innovating.
    </p>
  </div>
);

const ConnectSection: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validateMessage = (msg: string) => {
    if (!msg.trim()) return "Message cannot be empty.";
    if (msg.trim().length < 3) return "Message must be at least 3 characters.";
    if (msg.length > 200) return "Message cannot exceed 200 characters.";
    return "";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateMessage(message);
    if (validationError) {
      setError(validationError);
      return;
    }
    setShowToast(true);
    setMessage("");
    setError("");
    if (inputRef.current) inputRef.current.blur();
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (error) setError("");
  };

  return (
    <section className="w-full flex flex-col items-center text-center gap-4 mt-8 font-sans relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-base animate-fade-in">
          Message sent!
        </div>
      )}
      <p className="text-lg text-slate-400 mb-4 max-w-md mx-auto font-normal text-pretty">
        Interested in collaborating, chatting about tech, or just saying hi? Send me a message below!
      </p>
      <form onSubmit={handleSend} className="flex flex-col md:flex-row w-full max-w-md gap-2 items-center justify-center">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className={twMerge(
            "flex-1 w-full rounded-full border px-5 py-3 text-base text-zinc-100 placeholder-zinc-500 transition-colors focus:outline-none shadow font-sans",
            error ? "border-red-500 focus:border-red-500" : "border-zinc-700 bg-zinc-900 focus:border-sky-400"
          )}
          maxLength={201}
        />
        <button
          type="submit"
          className={twMerge(
            "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-7 py-3 w-full md:w-auto text-base font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all",
            message.trim() ? "hover:scale-105 hover:shadow-xl cursor-pointer opacity-100" : "opacity-50 cursor-not-allowed"
          )}
          disabled={!message.trim()}
          aria-disabled={!message.trim()}
        >
          Send
        </button>
      </form>
      {error && (
        <div className="text-red-500 text-sm mt-1 font-medium">{error}</div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export const PersonalLanding = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#050914] px-4 py-32 text-zinc-50 font-sans relative overflow-hidden">
      {/* Animated background blob */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-violet-400 opacity-10 rounded-full blur-3xl animate-pulse z-0 pointer-events-none" />
      <div className="w-full max-w-2xl flex flex-col items-center gap-12 z-10 relative">
        <HeroSection />
        <AboutBlock />
        <SocialsBlock />
        <ConnectSection />
      </div>
    </div>
  );
};
