function HeroSection({ html }) {
  if (!html) return null
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default HeroSection
