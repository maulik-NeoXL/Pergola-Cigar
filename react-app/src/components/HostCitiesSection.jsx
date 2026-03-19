import { useState } from 'react'
import VenueCard from './cards/VenueCard'
import CityPergolaModal from './CityPergolaModal'
import { hostCities } from '../data/venues'
import useScrollReveal from '../hooks/useScrollReveal'

function HostCitiesSection() {
  const [selectedCity, setSelectedCity] = useState(null)
  const sectionRef = useScrollReveal()

  return (
    <div id="gallery" ref={sectionRef}>
      <div className="section">
        <span className="section-tag">Host Cities</span>
        <h2 className="section-title">Marriott Pergola<br /><em>Lounges</em></h2>
        <div className="section-rule"></div>
        <p className="section-intro">
          Exclusive pergola settings across all 10 FIFA World Cup 2026 host cities, within
          Marriott&apos;s finest properties.
        </p>
        <div className="venues-grid">
          {hostCities.map((item) => (
            <VenueCard
              key={`${item.cityClass}-${item.city}`}
              cityClass={item.cityClass}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              city={item.city}
              hotel={item.hotel}
              tags={item.tags}
              onClick={() => setSelectedCity(item)}
            />
          ))}
        </div>
      </div>

      {selectedCity && (
        <CityPergolaModal
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </div>
  )
}

export default HostCitiesSection
