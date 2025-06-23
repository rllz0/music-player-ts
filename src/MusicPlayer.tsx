import React, { useState, useRef, useEffect } from "react";
import type { Song, PlayerState } from "./types";
import { songs } from "./data";
import { Navigation } from "./components/Navigation";
import { SongDisplay } from "./components/SongDisplay";
import { AudioElement } from "./components/AudioElement";
import { ProgressBar } from "./components/ProgressBar";
import { PlayerControls } from "./components/PlayerControls";
import { SongInfoModal } from "./components/SongInfoModal";
import { PlaylistModal } from "./components/PlaylistModal";

function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
  });
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  const currentSong: Song = songs[currentSongIndex];

  const handlePlayPause = (): void => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playerState.isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }

    setPlayerState((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };

  const handleProgressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setPlayerState((prev) => ({
      ...prev,
      currentTime: newTime,
    }));
  };

  const handlePrevious = (): void => {
    const newIndex =
      currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
    setCurrentSongIndex(newIndex);
    setPlayerState((prev) => ({ ...prev, isPlaying: false }));
  };

  const handleNext = (): void => {
    const newIndex =
      currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
    setCurrentSongIndex(newIndex);
    setPlayerState((prev) => ({ ...prev, isPlaying: false }));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = (): void => {
      setPlayerState((prev) => ({
        ...prev,
        duration: audio.duration,
      }));
    };

    const handleTimeUpdate = (): void => {
      setPlayerState((prev) => ({
        ...prev,
        currentTime: audio.currentTime,
      }));
    };

    const handleEnded = (): void => {
      handleNext();
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex]);

  const handleSongSelect = (index: number): void => {
    setCurrentSongIndex(index);
    setPlayerState((prev) => ({ ...prev, isPlaying: false }));
    setShowPlaylist(false);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="container">
        <div className="music-player">
          <Navigation
            showInfo={showInfo}
            showPlaylist={showPlaylist}
            setShowInfo={setShowInfo}
            setShowPlaylist={setShowPlaylist}
          />

          <SongDisplay currentSong={currentSong} playerState={playerState} />

          <AudioElement audioRef={audioRef} currentSong={currentSong} />

          <ProgressBar
            progressRef={progressRef}
            playerState={playerState}
            handleProgressChange={handleProgressChange}
            formatTime={formatTime}
          />

          <PlayerControls
            playerState={playerState}
            handlePrevious={handlePrevious}
            handlePlayPause={handlePlayPause}
            handleNext={handleNext}
          />

          <SongInfoModal
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            currentSong={currentSong}
            playerState={playerState}
            currentSongIndex={currentSongIndex}
            songsLength={songs.length}
            formatTime={formatTime}
          />

          <PlaylistModal
            showPlaylist={showPlaylist}
            setShowPlaylist={setShowPlaylist}
            songs={songs}
            currentSongIndex={currentSongIndex}
            handleSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
