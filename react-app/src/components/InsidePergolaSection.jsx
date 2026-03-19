import VenueCard from './cards/VenueCard'
import { hostCities } from '../data/venues'

function InsidePergolaSection() {
  const pergolaImages = [
    '/assets/pergola-1.png',
    '/assets/pergola-2.png',
    '/assets/pergola-3.png',
    '/assets/pergola-4.png',
    '/assets/pergola-5.png',
  ]

  return (
    <div id="venues">
      <div className="section">
        <span className="section-tag">Venues</span>
        <h2 className="section-title"> Inside the<br /><em>Pergola</em></h2>
        <div className="section-rule"></div>
        <p className="section-intro">
          Exclusive pergola settings across all 10 FIFA World Cup 2026 host cities, within
          Marriott&apos;s finest properties.
        </p>
        <div className="venues-grid">
          {hostCities.map((item, idx) => (
            <VenueCard
              key={`inside-${item.cityClass}-${item.city}`}
              cityClass={item.cityClass}
              imageSrc={pergolaImages[idx % pergolaImages.length]}
              imageAlt={`${item.city} pergola`}
              city={item.city}
              hotel={item.hotel}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InsidePergolaSection
