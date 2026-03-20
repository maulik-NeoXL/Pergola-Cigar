import SkeletonImage from '../SkeletonImage'

function VenueCard({
  cityClass,
  imageSrc,
  imageAlt,
  city,
  hotel,
  tags,
  onClick,
}) {
  return (
    <div className={`venue-card ${cityClass}`} onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      <div className="venue-visual" style={{ height: '160px' }}>
        <SkeletonImage
          src={imageSrc}
          alt={imageAlt}
          className={`venue-img-${cityClass}`}
          style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
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
