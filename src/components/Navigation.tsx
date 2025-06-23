import type { NavigationProps } from "../types";

export function Navigation({
  showInfo,
  showPlaylist,
  setShowInfo,
  setShowPlaylist,
}: NavigationProps) {
  return (
    <nav className="nav">
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="circle"
        type="button"
        aria-label="Show song info"
      >
        <span className="info-icon">i</span>
      </button>
      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="circle"
        type="button"
        aria-label="Show playlist"
      >
        <div className="bars-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </nav>
  );
}
