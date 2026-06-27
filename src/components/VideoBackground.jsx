import React, { useEffect, useRef } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);
  const fadingOutRef = useRef(false);

  const getOpacity = () => {
    if (!videoRef.current) return 0;
    const op = parseFloat(videoRef.current.style.opacity);
    return isNaN(op) ? 0 : op;
  };

  const setOpacity = (val) => {
    if (videoRef.current) {
      videoRef.current.style.opacity = Math.max(0, Math.min(1, val));
    }
  };

  const animateFade = (targetOpacity, duration, callback) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startOpacity = getOpacity();
    const opacityDiff = targetOpacity - startOpacity;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = startOpacity + opacityDiff * progress;
      
      setOpacity(currentVal);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        animationFrameRef.current = null;
        if (callback) callback();
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isNaN(video.duration)) return;

    const timeRemaining = video.duration - video.currentTime;

    // Trigger fade-out 0.55s before video ends
    if (timeRemaining <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      animateFade(0, 250);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    setOpacity(0);

    setTimeout(() => {
      video.currentTime = 0;
      video.play()
        .then(() => {
          fadingOutRef.current = false;
          animateFade(1, 250);
        })
        .catch((err) => {
          console.error("Playback failed on loop reset:", err);
          fadingOutRef.current = false;
        });
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setOpacity(0);

    const startVideo = () => {
      video.play()
        .then(() => {
          animateFade(1, 250);
        })
        .catch((err) => {
          console.warn("Autoplay blocked, waiting for user interaction.", err);
          // Fallback: fade in anyway so background is not black if blocked
          animateFade(1, 250);
        });
    };

    // If metadata is already loaded (from cache or fast loading), play immediately
    if (video.readyState >= 1) {
      startVideo();
    } else {
      video.addEventListener("loadedmetadata", startVideo);
    }

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", startVideo);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        background: "#fbfcf8" // Use a bright base color to blend with the video background if it represents data metrics
      }}
    >
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"
        muted
        playsInline
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "115%",
          height: "115%",
          objectFit: "cover",
          objectPosition: "top center",
          opacity: 0,
          willChange: "opacity"
        }}
      />
      {/* Dynamic Overlay for branding */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 60%, #fbfcf8 100%)",
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
