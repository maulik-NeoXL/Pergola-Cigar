import { useCallback, useEffect, useRef, useState } from 'react'
import HtmlSection from './components/HtmlSection'
import NavBar from './components/NavBar'
import VideoModal from './components/VideoModal'
import ReserveSection from './components/ReserveSection'
import HostCitiesSection from './components/HostCitiesSection'
import InsidePergolaSection from './components/InsidePergolaSection'
import legacyBodyHtml from './legacy/legacy-body.html?raw'

function App() {
  const [sections, setSections] = useState({})
  const [videoOpen, setVideoOpen] = useState(false)
  const scriptLoadedRef = useRef(false)
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  useEffect(() => {
    const html = legacyBodyHtml
    const markers = [
      { key: 'preHero', token: '<!-- AGE GATE -->' },
      { key: 'hero', token: '<section class="hero" id="home">' },
      { key: 'concept', token: '<div class="concept-wrap" id="concept">' },
      { key: 'collection', token: '<div id="collection">' },
      { key: 'experience', token: '<div class="experience-wrap" id="experience">' },
      { key: 'packages', token: '<div id="packages">' },
      { key: 'schedule', token: '<div class="schedule-wrap" id="schedule">' },
      { key: 'hostCities', token: '<div id="gallery">' },
      { key: 'insidePergola', token: '<div id="venues">' },
      { key: 'reserve', token: '<div class="reserve-wrap" id="reserve">' },
      { key: 'footer', token: '<footer>' },
      { key: 'modal', token: '<!-- CIGAR MODAL -->' },
      { key: 'whatsapp', token: '<!-- WHATSAPP WIDGET -->' },
    ]

    const positions = markers
      .map((m) => ({ ...m, index: html.indexOf(m.token) }))
      .filter((m) => m.index >= 0)
      .sort((a, b) => a.index - b.index)

    if (!positions.length) {
      setSections({ full: html })
      return
    }

    const nextIndex = (idx) =>
      idx + 1 < positions.length ? positions[idx + 1].index : html.length

    const map = {}
    positions.forEach((pos, idx) => {
      map[pos.key] = html.slice(pos.index, nextIndex(idx)).trim()
    })
    setSections(map)
  }, [])

  useEffect(() => {
    if (!Object.keys(sections).length) return

    if (!scriptLoadedRef.current) {
      Promise.resolve(import('./legacy/script.js')).then(() => {
        scriptLoadedRef.current = true
        document.dispatchEvent(new Event('DOMContentLoaded'))
      })
    } else {
      document.dispatchEvent(new Event('DOMContentLoaded'))
    }
  }, [sections])

  useEffect(() => {
    function handlePlayClick(e) {
      if (e.target.closest('#conceptPlayBtn')) {
        setVideoOpen(true)
      }
    }
    document.addEventListener('click', handlePlayClick, true)
    return () => document.removeEventListener('click', handlePlayClick, true)
  }, [])

  return (
    <>
      <HtmlSection html={sections.preHero} />
      <NavBar />
      <HtmlSection html={sections.hero} />
      <HtmlSection html={sections.concept} />
      <HtmlSection html={sections.collection} />
      <HtmlSection html={sections.experience} />
      <HtmlSection html={sections.packages} />
      {/* <HtmlSection html={sections.schedule} /> */}
      <HostCitiesSection />
      <InsidePergolaSection />
      <ReserveSection />
      <HtmlSection html={sections.footer} />
      <HtmlSection html={sections.modal} />
      <HtmlSection html={sections.whatsapp} />
      <HtmlSection html={sections.full} />
      <VideoModal open={videoOpen} onClose={closeVideo} />
    </>
  )
}

export default App
