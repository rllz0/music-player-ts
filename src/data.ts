//images
import BabyImage from './assets/images/Baby.jpeg';
import BlindingImage from './assets/images/Blinding.jpg';
import ShapeImage from './assets/images/Shap.png';
import HowImage from './assets/images/How.png';
import ToxicImage from './assets/images/toxic.jpg';
import RedImage from './assets/images/Red.jpeg'

//songs
import BabySong from './assets/songs/Justin-Bieber-Ft-Ludacris-Baby-(HipHopKit.com).mp3';
import BlindingSong from './assets/songs/The-Weeknd-Blinding-Lights-(HipHopKit.com).mp3';
import ShapeSong from './assets/songs/Ed_Sheeran_-_Shape_of_You_Offblogmedia.com.mp3';
import HowSong from './assets/songs/How Sweet [www.sangeethe.com].mp3';
import ToxicSong from './assets/songs/Toxic Till The End [www.sangeethe.com].mp3';
import RedSong from './assets/songs/Taylor Swift - Red.mp3';

export const songs = [
  {
    id: 1,
    title: "Red",
    artist: "Taylor Swift ",
    thumbnail: RedImage,
    audioUrl: RedSong
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    thumbnail: BlindingImage,
    audioUrl: BlindingSong
  },
  {
    id: 3,
    title: "Shape of You",
    artist: "Ed Sheeran",
    thumbnail: ShapeImage,
    audioUrl: ShapeSong
  },
  {
    id: 4,
    title: "How Sweet",
    artist: "NewJeans",
    thumbnail: HowImage,
    audioUrl: HowSong
  },
  {
    id: 5,
    title: "Toxic Till The End",
    artist: "ROSE",
    thumbnail: ToxicImage,
    audioUrl: ToxicSong
  },
  {
    id: 6,
    title: "Baby",
    artist: "Justin Bieber",
    thumbnail: BabyImage,
    audioUrl: BabySong
  }
];