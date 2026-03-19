function VenueCard({
  cityClass,
  imageSrc,
  imageAlt,
  city,
  hotel,
  tags,
}) {
  return (
    <div className={`venue-card ${cityClass}`}>
      <div className="venue-visual" style={{ height: '160px' }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
          className={`venue-img-${cityClass}`}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.2)' }}></div>
        <div className="venue-lounge-tag">Pergola Lounge</div>
      </div>
      <div className="venue-body">
        <div className="venue-city">{city}</div>
        <div className="venue-hotel">{hotel}</div>
        <div className="venue-pills">
          {tags.map((tag) => (
            <span className="venue-pill" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VenueCard
