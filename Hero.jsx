import { useEffect, useRef, useState } from 'react'
import { Sparkmark } from './icons.jsx'
import './Hero.css'

const HERO_VIDEO_URL = 'https://pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev/templates/monoio/hero.mp4'

const CREATORS = [
  'linear-gradient(140deg,#3b3f52,#8b93b5)',
  'linear-gradient(140deg,#7a4f6b,#e2a3c7)',
  'linear-gradient(140deg,#4a4136,#b9a184)',
  'linear-gradient(140deg,#3d4b6b,#93b2e6)',
]

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const play = video.play()
    if (play?.catch) play.catch(() => {})
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setReady(true)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero__video ${ready ? 'is-ready' : ''}`}
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__top">
        <span className="pill">
          <Sparkmark size={13} />
          Powering nex-gen creators.
        </span>

        <h1 className="hero__title">
          AI Editing Reimagined<br />For The Future Of<br />Design.
        </h1>

        <a className="btn btn--steel hero__cta" href="#start">
          Get started
        </a>
      </div>

      <div className="hero__bottom">
        <p className="hero__sub">
          Monoio is an intelligent tools that understand your creative intent and accelerate every step
          of your workflow.
        </p>

        <div className="proof">
          <ul className="proof__avatars">
            {CREATORS.map((bg, i) => (
              <li key={i} style={{ background: bg }} />
            ))}
          </ul>
          <span className="proof__label">Trusted by 12k+ creators.</span>
        </div>
      </div>
    </section>
  )
}
