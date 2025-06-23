import type { ProgressBarProps } from "../types";

export function ProgressBar({
  progressRef,
  playerState,
  handleProgressChange,
  formatTime,
}: ProgressBarProps) {
  return (
    <>
      <input
        ref={progressRef}
        type="range"
        min="0"
        max={playerState.duration || 0}
        value={playerState.currentTime}
        onChange={handleProgressChange}
        className="progress"
        id="progress"
      />
      <div className="time-display">
        <span>{formatTime(playerState.currentTime)}</span>
        <span>{formatTime(playerState.duration)}</span>
      </div>
    </>
  );
}
