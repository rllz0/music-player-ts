import type { AudioElementProps } from "../types";

export function AudioElement({ audioRef, currentSong }: AudioElementProps) {
  return <audio ref={audioRef} src={currentSong.audioUrl} preload="metadata" />;
}
