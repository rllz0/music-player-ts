export interface Song {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
  audioUrl: string;
  duration?: number;
}

export interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

export interface AudioElementProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentSong: Song;
}

export interface NavigationProps {
  showInfo: boolean;
  showPlaylist: boolean;
  setShowInfo: (show: boolean) => void;
  setShowPlaylist: (show: boolean) => void;
}

export interface SongDisplayProps {
  currentSong: Song;
  playerState: PlayerState;
}

export interface ProgressBarProps {
  progressRef: React.RefObject<HTMLInputElement | null>;
  playerState: PlayerState;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatTime: (time: number) => string;
}

export interface PlaylistModalProps {
  showPlaylist: boolean;
  setShowPlaylist: (show: boolean) => void;
  songs: Song[];
  currentSongIndex: number;
  handleSongSelect: (index: number) => void;
}

export interface PlayerControlsProps {
  playerState: PlayerState;
  handlePrevious: () => void;
  handlePlayPause: () => void;
  handleNext: () => void;
}

export interface SongInfoModalProps {
  showInfo: boolean;
  setShowInfo: (show: boolean) => void;
  currentSong: Song;
  playerState: PlayerState;
  currentSongIndex: number;
  songsLength: number;
  formatTime: (time: number) => string;
}
