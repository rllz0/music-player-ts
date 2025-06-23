import type { SongInfoModalProps } from "../types";

export function SongInfoModal({
  showInfo,
  setShowInfo,
  currentSong,
  playerState,
  currentSongIndex,
  songsLength,
  formatTime,
}: SongInfoModalProps) {
  if (!showInfo) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Song Information</h3>
        <div className="info-details">
          <p>
            <strong>Title:</strong> {currentSong.title}
          </p>
          <p>
            <strong>Artist:</strong> {currentSong.artist}
          </p>
          <p>
            <strong>Duration:</strong> {formatTime(playerState.duration)}
          </p>
          <p>
            <strong>Track:</strong> {currentSongIndex + 1} of {songsLength}
          </p>
        </div>
        <button
          onClick={() => setShowInfo(false)}
          className="modal-close-btn"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}
