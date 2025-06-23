import type { SongDisplayProps } from "../types";

export function SongDisplay({ currentSong, playerState }: SongDisplayProps) {
  return (
    <>
      <img
        src={currentSong.thumbnail}
        alt={`${currentSong.title} thumbnail`}
        className={`song-img ${playerState.isPlaying ? "rotating" : ""}`}
      />
      <h1 className="song-title">{currentSong.title}</h1>
      <p className="song-artist">{currentSong.artist}</p>
    </>
  );
}
