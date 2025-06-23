import type { PlayerControlsProps } from "../types";

export function PlayerControls({
  playerState,
  handlePrevious,
  handlePlayPause,
  handleNext,
}: PlayerControlsProps) {
  return (
    <div className="controls">
      <button
        onClick={handlePrevious}
        className="control-btn"
        type="button"
        aria-label="Previous song"
      >
        <div className="prev-icon"></div>
      </button>

      <button
        onClick={handlePlayPause}
        className="control-btn play-btn"
        type="button"
        aria-label={playerState.isPlaying ? "Pause" : "Play"}
      >
        {playerState.isPlaying ? (
          <div className="pause-icon">
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="play-icon"></div>
        )}
      </button>

      <button
        onClick={handleNext}
        className="control-btn"
        type="button"
        aria-label="Next song"
      >
        <div className="next-icon"></div>
      </button>
    </div>
  );
}
