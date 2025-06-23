import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './MusicPlayer.css'
import MusicPlayer from './MusicPlayer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < MusicPlayer/>
  </StrictMode>,
)
