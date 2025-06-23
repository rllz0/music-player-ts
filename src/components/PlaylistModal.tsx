import type { PlaylistModalProps } from "../types";

export function PlaylistModal({
  showPlaylist,
  setShowPlaylist,
  songs,
  currentSongIndex,
  handleSongSelect,
}: PlaylistModalProps) {
  if (!showPlaylist) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content playlist-modal">
        <h3 className="modal-title">Playlist</h3>
        <div className="playlist-container">
          {songs.map((song, index) => (
            <div
              key={song.id}
              onClick={() => handleSongSelect(index)}
              className={`playlist-item ${
                index === currentSongIndex ? "active" : ""
              }`}
            >
              <img
                src={song.thumbnail}
                alt={song.title}
                className="playlist-thumbnail"
              />
              <div className="playlist-info">
                <p className="playlist-title">{song.title}</p>
                <p className="playlist-artist">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowPlaylist(false)}
          className="modal-close-btn"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}
