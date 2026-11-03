import { useState, useRef, useEffect } from "react";
import { cn } from "utils/cn";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play on component mount
  useEffect(() => {
    if (soundBarEl.current) {
      soundBarEl.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          // Browsers usually block autoplay until the user interacts with the document
          console.log("Autoplay blocked by browser. Waiting for user interaction.", error);
        });
    }
  }, []);

  const togglePlayPause = () => {
    if (!isPlaying) {
      soundBarEl.current.play();
    } else {
      soundBarEl.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "soundBars link top-1 right-14 flex items-center justify-center",
        isPlaying && "play",
      )}
      onClick={togglePlayPause}
      title={isPlaying ? "Pause" : "Play"} // Dynamic tooltip on hover
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="auto" />
    </div>
  );
};

export default SoundBar;