"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Mobilde video kapalı (performans + UX)
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setShowVideo(true);
    }
  }, []);

  if (!showVideo) {
    // Video yerine poster (LCP dostu)
    return (
      <div
        className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800"
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="/video/hero-poster.jpg"
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
