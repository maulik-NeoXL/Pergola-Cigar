function ReserveSection() {
  const handleSubmit = (e) => {
    if (typeof window !== 'undefined' && typeof window.handleSubmit === 'function') {
      window.handleSubmit(e)
      return
    }
    e.preventDefault()
  }

  const handleCityChange = () => {
    if (typeof window !== 'undefined' && typeof window.updateVenues === 'function') {
      window.updateVenues()
    }
  }

  return (
    <div className="reserve-wrap" id="reserve">
      <div className="section">
        <div className="reserve-grid">
          <div className="reserve-left">
            <span className="section-tag">Reserve Your Experience</span>
            <h2 className="section-title">
              Enquire about
              <br />
              <em>your evening</em>
            </h2>
            <div className="section-rule"></div>
            <p>
              Our concierge team will follow up personally to confirm your preferred match, venue, and package
              — and to tailor the experience to your group.
            </p>
            <div className="reserve-detail">
              <div className="rd-icon">🌿</div>
              <div>
                <div className="rd-label">Available Across</div>
                <div className="rd-value">10 host cities · 40+ Marriott properties</div>
              </div>
            </div>
            <div className="reserve-detail">
              <div className="rd-icon">🏆</div>
              <div>
                <div className="rd-label">Season</div>
                <div className="rd-value">June 11 - July 19, 2026</div>
              </div>
            </div>
            <div className="reserve-detail">
              <div className="rd-icon">✉️</div>
              <div>
                <div className="rd-label">Response Time</div>
                <div className="rd-value">Our concierge team responds within 24 hours</div>
              </div>
            </div>
          </div>

          <div>
            <div className="reserve-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">First Name <span>*</span></label>
                    <input className="form-input" type="text" placeholder="John" required />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Last Name <span>*</span></label>
                    <input className="form-input" type="text" placeholder="Smith" required />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Email Address <span>*</span></label>
                  <input className="form-input" type="email" placeholder="john@company.com" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Preferred City <span>*</span></label>
                    <select className="form-select" id="citySelect" onChange={handleCityChange} required defaultValue="">
                      <option value="" disabled>Select a city...</option>
                      <option value="new_york">New York / New Jersey</option>
                      <option value="los_angeles">Los Angeles</option>
                      <option value="dallas">Dallas</option>
                      <option value="miami">Miami</option>
                      <option value="san_francisco">San Francisco</option>
                      <option value="boston">Boston</option>
                      <option value="seattle">Seattle</option>
                      <option value="atlanta">Atlanta</option>
                      <option value="kansas_city">Kansas City</option>
                      <option value="philadelphia">Philadelphia</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Preferred Pergola Venue <span>*</span></label>
                    <select className="form-select" id="venueSelect" required defaultValue="">
                      <option value="" disabled>Select a city first...</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">No. of Guests <span>*</span></label>
                    <select className="form-select" required defaultValue="">
                      <option value="" disabled>Select...</option>
                      <option>1 - 2 guests</option>
                      <option>3 - 4 guests</option>
                      <option>5 - 9 guests</option>
                      <option>10+ guests (Corporate)</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Preferred Match <span>*</span></label>
                    <select className="form-select" id="matchSelect" required defaultValue="">
                      <option value="" disabled>Select a match...</option>
                    </select>
                  </div>
                </div>
                <button className="form-submit" type="submit" id="submitBtn">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReserveSection
