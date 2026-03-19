        // ── AGE GATE ────────────────────────────────────────────────────────────────
        window.enterSite = function () {
            document.getElementById('ageGate').classList.add('hidden');
            setTimeout(() => { document.getElementById('ageGate').style.display = 'none'; }, 400);
        };
        window.exitSite = function () {
            window.location.href = 'https://www.google.com';
        };

        // ── CIGAR DATA (Signature Matchday Blends — Bunch Cigars) ───────────────────
        const cigars = [
            {
                icon: '🍂', badge: 'Black Infused', name: 'Black Infused', origin: 'Bunch Cigars · Signature',
                desc: 'Our signature matchday blend. A medium-full bodied cigar with notes of cedar, leather, and dark chocolate spice. Built for the energy of the opening kick and perfect with Johnnie Walker Black or aged bourbon. The quintessential Bunch Cigars matchday experience.',
                details: { Strength: 'Med-Full Body', 'Burn Time': '~75 min', Pairing: 'Black Label / Bourbon', Blend: 'Black Infused' },
                tags: ['Matchday Blend', '75 min', 'Cedar / Chocolate', 'Signature']
            },
            {
                icon: '🌿', badge: 'Gold Infused', name: 'Gold Infused', origin: 'Bunch Cigars · Evening',
                desc: 'A smooth, medium-bodied reserved evening cigar. Notes of honey, almond, and subtle white pepper that evolve gracefully over a 60-minute burn. The ideal companion to a fine whisky or aged rum on a quiet matchday evening under the pergola.',
                details: { Strength: 'Medium Body', 'Burn Time': '~60 min', Pairing: 'Single Malt / Whisky', Blend: 'Gold Infused' },
                tags: ['Evening Cigar', '60 min', 'Honey / Almond', 'Reserve']
            },
            {
                icon: '☽', badge: 'Blue Infusion', name: 'Blue Infusion', origin: 'Bunch Cigars · Premium',
                desc: 'Light, smooth, and endlessly social. The perfect pairing with Johnnie Walker Blue Label — for the most elevated matchday moments. Velvety and premium, designed for the discerning guest.',
                details: { Strength: 'Smooth', 'Burn Time': '~60 min', Pairing: 'Johnnie Walker Blue', Blend: 'Blue Infusion' },
                tags: ['Premium', '60 min', 'Smooth / Refined', 'Blue Label Pairing']
            },
            {
                icon: '🔥', badge: 'Black Infused', name: 'Black Infused × Black Label', origin: 'Bunch Cigars · Matchday Pairing',
                desc: 'Bold and deeply unhurried. Dark cocoa, dried cherry, fine leather — the definitive cigar and Scotch pairing for the final whistle. Bunch Cigars Black Infused with Johnnie Walker Black Label.',
                details: { Strength: 'Full Body', 'Burn Time': '~90 min', Pairing: 'Johnnie Walker Black', Blend: 'Black Infused' },
                tags: ['Full Body', '90 min', 'Complex / Rich', 'Matchday Pairing']
            }
        ];

        window.openCigarModal = function (idx) {
            const c = cigars[idx];
            document.getElementById('mIcon').textContent = c.icon;
            document.getElementById('mBadge').textContent = c.badge;
            document.getElementById('mName').textContent = c.name;
            document.getElementById('mOrigin').textContent = c.origin;
            document.getElementById('mDesc').textContent = c.desc;
            document.getElementById('mDetails').innerHTML = Object.entries(c.details).map(([k, v]) =>
                `<div class="modal-detail"><div class="modal-detail-label">${k}</div><div class="modal-detail-value">${v}</div></div>`
            ).join('');
            document.getElementById('mTags').innerHTML = c.tags.map(t =>
                `<span class="modal-tag">${t}</span>`
            ).join('');
            document.getElementById('cigarModal').classList.add('open');
            document.body.style.overflow = 'hidden';
        };
        window.closeCigarModal = function (e, force) {
            if (force || (e && e.target === document.getElementById('cigarModal'))) {
                document.getElementById('cigarModal').classList.remove('open');
                document.body.style.overflow = '';
            }
        };
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCigarModal(null, true); });

        // ── FORM ─────────────────────────────────────────────────────────────────────
        const marriottVenues = {
            new_york: ['Times Square Rooftop Pergola', 'Essex House Skyline Pergola', 'Hudson River Lounge Pergola', 'Liberty View Match Pergola'],
            los_angeles: ['L.A. LIVE Match Pergola', 'Hollywood Hills Pergola Bar', 'Santa Monica Sunset Pergola', 'Manhattan Beach Club Pergola', 'Beverly Matchday Pergola'],
            dallas: ['Arts District Signature Pergola', 'Uptown Skyline Pergola', 'Victory Park Match Pergola', 'Galleria Club Pergola'],
            miami: ['Biscayne Bay Pergola', 'Brickell Matchday Pergola', 'South Beach Lounge Pergola', 'Design District Pergola'],
            san_francisco: ['Union Square Match Pergola', 'Embarcadero Bay Pergola', 'Nob Hill Skyline Pergola', 'SoMa Club Pergola', 'Golden Gate Lounge Pergola'],
            boston: ['Back Bay Pergola Lounge', 'Seaport Match Pergola', 'Long Wharf Harbor Pergola', 'Copley Square Club Pergola'],
            seattle: ['Seattle Marriott Waterfront', 'JW Marriott Seattle', 'Renaissance Seattle Hotel'],
            atlanta: ['JW Marriott Atlanta Buckhead', 'Atlanta Marriott Marquis', 'Renaissance Atlanta Midtown'],
            kansas_city: ['Marriott Kansas City Country Club Plaza', 'Kansas City Marriott Downtown', 'Renaissance Kansas City'],
            philadelphia: ['Philadelphia Marriott Downtown', 'JW Marriott Philadelphia', 'Renaissance Philadelphia Downtown'],
        };

        window.updateVenues = function () {
            const citySelect = document.getElementById('citySelect');
            const venueSelect = document.getElementById('venueSelect');
            if (!citySelect || !venueSelect) return;
            const cityKey = citySelect.value;
            const venues = marriottVenues[cityKey] || [];
            venueSelect.innerHTML = '<option value="" disabled selected>Select a pergola venue…</option>' +
                venues.map((venue) => `<option value="${venue}">${venue}</option>`).join('');
        };

        window.populateMatchOptions = function () {
            const matchSelect = document.getElementById('matchSelect');
            if (!matchSelect || !Array.isArray(matches)) return;
            const options = matches.map((m) => {
                const label = `${m.team1} vs ${m.team2} · ${m.date} · ${m.venue}`;
                return `<option value="${label}">${label}</option>`;
            });
            matchSelect.innerHTML = '<option value="" disabled selected>Select a match…</option>' + options.join('');
        };

        window.handleSubmit = function (e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.textContent = '✓ Enquiry Received';
            btn.style.background = '#2d8a4e';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Submit Enquiry';
                btn.style.background = '';
                btn.disabled = false;
                e.target.reset();
            }, 3500);
        };

        // ── WHATSAPP ─────────────────────────────────────────────────────────────────
        window.toggleWA = function (e) {
            e.stopPropagation();
            document.getElementById('waTooltip').classList.toggle('open');
        };
        document.addEventListener('click', function (e) {
            const w = document.getElementById('waWidget');
            if (w && !w.contains(e.target)) document.getElementById('waTooltip').classList.remove('open');
        });

        // ── MATCH SCHEDULE ───────────────────────────────────────────────────────────
        const matches = [
            // ── GROUP A ──
            { group: 'A', stage: 'Group', date: 'Jun 11', time: '3PM ET', team1: 'Mexico', flag1: '🇲🇽', team2: 'South Africa', flag2: '🇿🇦', venue: 'Mexico City' },
            { group: 'A', stage: 'Group', date: 'Jun 11', time: '9PM ET', team1: 'South Korea', flag1: '🇰🇷', team2: 'UEFA Playoff D', flag2: '🏳️', venue: 'Guadalajara' },
            { group: 'A', stage: 'Group', date: 'Jun 18', time: '9PM ET', team1: 'Mexico', flag1: '🇲🇽', team2: 'South Korea', flag2: '🇰🇷', venue: 'Guadalajara' },
            { group: 'A', stage: 'Group', date: 'Jun 18', time: '3PM ET', team1: 'UEFA Playoff D', flag1: '🏳️', team2: 'South Africa', flag2: '🇿🇦', venue: 'Atlanta' },
            { group: 'A', stage: 'Group', date: 'Jun 24', time: '9PM ET', team1: 'UEFA Playoff D', flag1: '🏳️', team2: 'Mexico', flag2: '🇲🇽', venue: 'Mexico City' },
            { group: 'A', stage: 'Group', date: 'Jun 24', time: '9PM ET', team1: 'South Africa', flag1: '🇿🇦', team2: 'South Korea', flag2: '🇰🇷', venue: 'Monterrey' },
            // ── GROUP B ──
            { group: 'B', stage: 'Group', date: 'Jun 12', time: '8PM ET', team1: 'Canada', flag1: '🇨🇦', team2: 'UEFA Playoff A', flag2: '🏳️', venue: 'Toronto' },
            { group: 'B', stage: 'Group', date: 'Jun 13', time: '3PM ET', team1: 'Qatar', flag1: '🇶🇦', team2: 'Switzerland', flag2: '🇨🇭', venue: 'San Francisco' },
            { group: 'B', stage: 'Group', date: 'Jun 18', time: '9PM ET', team1: 'Switzerland', flag1: '🇨🇭', team2: 'UEFA Playoff A', flag2: '🏳️', venue: 'Los Angeles' },
            { group: 'B', stage: 'Group', date: 'Jun 18', time: '6PM ET', team1: 'Canada', flag1: '🇨🇦', team2: 'Qatar', flag2: '🇶🇦', venue: 'Vancouver' },
            { group: 'B', stage: 'Group', date: 'Jun 24', time: '3PM ET', team1: 'UEFA Playoff A', flag1: '🏳️', team2: 'Qatar', flag2: '🇶🇦', venue: 'Seattle' },
            { group: 'B', stage: 'Group', date: 'Jun 24', time: '3PM ET', team1: 'Switzerland', flag1: '🇨🇭', team2: 'Canada', flag2: '🇨🇦', venue: 'Vancouver' },
            // ── GROUP C ──
            { group: 'C', stage: 'Group', date: 'Jun 13', time: '6PM ET', team1: 'Brazil', flag1: '🇧🇷', team2: 'Morocco', flag2: '🇲🇦', venue: 'New York / NJ' },
            { group: 'C', stage: 'Group', date: 'Jun 13', time: '9PM ET', team1: 'Haiti', flag1: '🇭🇹', team2: 'Scotland', flag2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', venue: 'Boston' },
            { group: 'C', stage: 'Group', date: 'Jun 19', time: '6PM ET', team1: 'Scotland', flag1: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', team2: 'Morocco', flag2: '🇲🇦', venue: 'Boston' },
            { group: 'C', stage: 'Group', date: 'Jun 19', time: '9PM ET', team1: 'Brazil', flag1: '🇧🇷', team2: 'Haiti', flag2: '🇭🇹', venue: 'Philadelphia' },
            { group: 'C', stage: 'Group', date: 'Jun 24', time: '6PM ET', team1: 'Scotland', flag1: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', team2: 'Brazil', flag2: '🇧🇷', venue: 'Miami' },
            { group: 'C', stage: 'Group', date: 'Jun 24', time: '6PM ET', team1: 'Morocco', flag1: '🇲🇦', team2: 'Haiti', flag2: '🇭🇹', venue: 'Atlanta' },
            // ── GROUP D ──
            { group: 'D', stage: 'Group', date: 'Jun 12', time: '9PM ET', team1: 'USA', flag1: '🇺🇸', team2: 'Paraguay', flag2: '🇵🇾', venue: 'Los Angeles' },
            { group: 'D', stage: 'Group', date: 'Jun 13', time: '12AM ET', team1: 'Australia', flag1: '🇦🇺', team2: 'UEFA Playoff C', flag2: '🏳️', venue: 'Vancouver' },
            { group: 'D', stage: 'Group', date: 'Jun 19', time: '3PM ET', team1: 'USA', flag1: '🇺🇸', team2: 'Australia', flag2: '🇦🇺', venue: 'Seattle' },
            { group: 'D', stage: 'Group', date: 'Jun 19', time: '6PM ET', team1: 'UEFA Playoff C', flag1: '🏳️', team2: 'Paraguay', flag2: '🇵🇾', venue: 'San Francisco' },
            { group: 'D', stage: 'Group', date: 'Jun 25', time: '10PM ET', team1: 'UEFA Playoff C', flag1: '🏳️', team2: 'USA', flag2: '🇺🇸', venue: 'Los Angeles' },
            { group: 'D', stage: 'Group', date: 'Jun 25', time: '10PM ET', team1: 'Paraguay', flag1: '🇵🇾', team2: 'Australia', flag2: '🇦🇺', venue: 'San Francisco' },
            // ── GROUP E ──
            { group: 'E', stage: 'Group', date: 'Jun 14', time: '1PM ET', team1: 'Germany', flag1: '🇩🇪', team2: 'Curaçao', flag2: '🇨🇼', venue: 'Houston' },
            { group: 'E', stage: 'Group', date: 'Jun 14', time: '7PM ET', team1: 'Ivory Coast', flag1: '🇨🇮', team2: 'Ecuador', flag2: '🇪🇨', venue: 'Philadelphia' },
            { group: 'E', stage: 'Group', date: 'Jun 20', time: '4PM ET', team1: 'Germany', flag1: '🇩🇪', team2: 'Ivory Coast', flag2: '🇨🇮', venue: 'Toronto' },
            { group: 'E', stage: 'Group', date: 'Jun 20', time: '7PM ET', team1: 'Ecuador', flag1: '🇪🇨', team2: 'Curaçao', flag2: '🇨🇼', venue: 'Kansas City' },
            { group: 'E', stage: 'Group', date: 'Jun 25', time: '4PM ET', team1: 'Ecuador', flag1: '🇪🇨', team2: 'Germany', flag2: '🇩🇪', venue: 'New York / NJ' },
            { group: 'E', stage: 'Group', date: 'Jun 25', time: '4PM ET', team1: 'Curaçao', flag1: '🇨🇼', team2: 'Ivory Coast', flag2: '🇨🇮', venue: 'Philadelphia' },
            // ── GROUP F ──
            { group: 'F', stage: 'Group', date: 'Jun 14', time: '4PM ET', team1: 'Netherlands', flag1: '🇳🇱', team2: 'Japan', flag2: '🇯🇵', venue: 'Dallas' },
            { group: 'F', stage: 'Group', date: 'Jun 14', time: '10PM ET', team1: 'UEFA Playoff B', flag1: '🏳️', team2: 'Tunisia', flag2: '🇹🇳', venue: 'Monterrey' },
            { group: 'F', stage: 'Group', date: 'Jun 20', time: '1PM ET', team1: 'Netherlands', flag1: '🇳🇱', team2: 'UEFA Playoff B', flag2: '🏳️', venue: 'Houston' },
            { group: 'F', stage: 'Group', date: 'Jun 20', time: '10PM ET', team1: 'Tunisia', flag1: '🇹🇳', team2: 'Japan', flag2: '🇯🇵', venue: 'Monterrey' },
            { group: 'F', stage: 'Group', date: 'Jun 25', time: '7PM ET', team1: 'Japan', flag1: '🇯🇵', team2: 'UEFA Playoff B', flag2: '🏳️', venue: 'Dallas' },
            { group: 'F', stage: 'Group', date: 'Jun 25', time: '7PM ET', team1: 'Tunisia', flag1: '🇹🇳', team2: 'Netherlands', flag2: '🇳🇱', venue: 'Kansas City' },
            // ── GROUP G ──
            { group: 'G', stage: 'Group', date: 'Jun 15', time: '3PM ET', team1: 'Belgium', flag1: '🇧🇪', team2: 'Egypt', flag2: '🇪🇬', venue: 'Seattle' },
            { group: 'G', stage: 'Group', date: 'Jun 15', time: '9PM ET', team1: 'Iran', flag1: '🇮🇷', team2: 'New Zealand', flag2: '🇳🇿', venue: 'Los Angeles' },
            { group: 'G', stage: 'Group', date: 'Jun 21', time: '3PM ET', team1: 'Belgium', flag1: '🇧🇪', team2: 'Iran', flag2: '🇮🇷', venue: 'Los Angeles' },
            { group: 'G', stage: 'Group', date: 'Jun 21', time: '6PM ET', team1: 'New Zealand', flag1: '🇳🇿', team2: 'Egypt', flag2: '🇪🇬', venue: 'Vancouver' },
            { group: 'G', stage: 'Group', date: 'Jun 26', time: '11PM ET', team1: 'Egypt', flag1: '🇪🇬', team2: 'Iran', flag2: '🇮🇷', venue: 'Seattle' },
            { group: 'G', stage: 'Group', date: 'Jun 26', time: '11PM ET', team1: 'New Zealand', flag1: '🇳🇿', team2: 'Belgium', flag2: '🇧🇪', venue: 'Vancouver' },
            // ── GROUP H ──
            { group: 'H', stage: 'Group', date: 'Jun 15', time: '12PM ET', team1: 'Spain', flag1: '🇪🇸', team2: 'Cape Verde', flag2: '🇨🇻', venue: 'Atlanta' },
            { group: 'H', stage: 'Group', date: 'Jun 15', time: '6PM ET', team1: 'Saudi Arabia', flag1: '🇸🇦', team2: 'Uruguay', flag2: '🇺🇾', venue: 'Miami' },
            { group: 'H', stage: 'Group', date: 'Jun 21', time: '12PM ET', team1: 'Spain', flag1: '🇪🇸', team2: 'Saudi Arabia', flag2: '🇸🇦', venue: 'Atlanta' },
            { group: 'H', stage: 'Group', date: 'Jun 21', time: '6PM ET', team1: 'Uruguay', flag1: '🇺🇾', team2: 'Cape Verde', flag2: '🇨🇻', venue: 'Miami' },
            { group: 'H', stage: 'Group', date: 'Jun 26', time: '8PM ET', team1: 'Cape Verde', flag1: '🇨🇻', team2: 'Saudi Arabia', flag2: '🇸🇦', venue: 'Houston' },
            { group: 'H', stage: 'Group', date: 'Jun 26', time: '8PM ET', team1: 'Uruguay', flag1: '🇺🇾', team2: 'Spain', flag2: '🇪🇸', venue: 'Guadalajara' },
            // ── GROUP I ──
            { group: 'I', stage: 'Group', date: 'Jun 16', time: '3PM ET', team1: 'France', flag1: '🇫🇷', team2: 'Senegal', flag2: '🇸🇳', venue: 'New York / NJ' },
            { group: 'I', stage: 'Group', date: 'Jun 16', time: '9PM ET', team1: 'IC Playoff 2', flag1: '🏳️', team2: 'Norway', flag2: '🇳🇴', venue: 'Boston' },
            { group: 'I', stage: 'Group', date: 'Jun 22', time: '3PM ET', team1: 'Norway', flag1: '🇳🇴', team2: 'Senegal', flag2: '🇸🇳', venue: 'New York / NJ' },
            { group: 'I', stage: 'Group', date: 'Jun 22', time: '6PM ET', team1: 'France', flag1: '🇫🇷', team2: 'IC Playoff 2', flag2: '🏳️', venue: 'Philadelphia' },
            { group: 'I', stage: 'Group', date: 'Jun 26', time: '3PM ET', team1: 'Norway', flag1: '🇳🇴', team2: 'France', flag2: '🇫🇷', venue: 'Boston' },
            { group: 'I', stage: 'Group', date: 'Jun 26', time: '3PM ET', team1: 'Senegal', flag1: '🇸🇳', team2: 'IC Playoff 2', flag2: '🏳️', venue: 'Toronto' },
            // ── GROUP J ──
            { group: 'J', stage: 'Group', date: 'Jun 16', time: '12PM ET', team1: 'Argentina', flag1: '🇦🇷', team2: 'Algeria', flag2: '🇩🇿', venue: 'Kansas City' },
            { group: 'J', stage: 'Group', date: 'Jun 16', time: '6PM ET', team1: 'Austria', flag1: '🇦🇹', team2: 'Jordan', flag2: '🇯🇴', venue: 'San Francisco' },
            { group: 'J', stage: 'Group', date: 'Jun 22', time: '12PM ET', team1: 'Argentina', flag1: '🇦🇷', team2: 'Austria', flag2: '🇦🇹', venue: 'Dallas' },
            { group: 'J', stage: 'Group', date: 'Jun 22', time: '3PM ET', team1: 'Jordan', flag1: '🇯🇴', team2: 'Algeria', flag2: '🇩🇿', venue: 'San Francisco' },
            { group: 'J', stage: 'Group', date: 'Jun 27', time: '3PM ET', team1: 'Jordan', flag1: '🇯🇴', team2: 'Argentina', flag2: '🇦🇷', venue: 'Dallas' },
            { group: 'J', stage: 'Group', date: 'Jun 27', time: '3PM ET', team1: 'Algeria', flag1: '🇩🇿', team2: 'Austria', flag2: '🇦🇹', venue: 'Kansas City' },
            // ── GROUP K ──
            { group: 'K', stage: 'Group', date: 'Jun 17', time: '12PM ET', team1: 'Uzbekistan', flag1: '🇺🇿', team2: 'Colombia', flag2: '🇨🇴', venue: 'Mexico City' },
            { group: 'K', stage: 'Group', date: 'Jun 17', time: '6PM ET', team1: 'Portugal', flag1: '🇵🇹', team2: 'IC Playoff 1', flag2: '🏳️', venue: 'Houston' },
            { group: 'K', stage: 'Group', date: 'Jun 23', time: '12PM ET', team1: 'Colombia', flag1: '🇨🇴', team2: 'IC Playoff 1', flag2: '🏳️', venue: 'Guadalajara' },
            { group: 'K', stage: 'Group', date: 'Jun 23', time: '3PM ET', team1: 'Portugal', flag1: '🇵🇹', team2: 'Uzbekistan', flag2: '🇺🇿', venue: 'Houston' },
            { group: 'K', stage: 'Group', date: 'Jun 27', time: '6PM ET', team1: 'Colombia', flag1: '🇨🇴', team2: 'Portugal', flag2: '🇵🇹', venue: 'Miami' },
            { group: 'K', stage: 'Group', date: 'Jun 27', time: '6PM ET', team1: 'IC Playoff 1', flag1: '🏳️', team2: 'Uzbekistan', flag2: '🇺🇿', venue: 'Atlanta' },
            // ── GROUP L ──
            { group: 'L', stage: 'Group', date: 'Jun 17', time: '3PM ET', team1: 'England', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Croatia', flag2: '🇭🇷', venue: 'Dallas' },
            { group: 'L', stage: 'Group', date: 'Jun 17', time: '9PM ET', team1: 'Ghana', flag1: '🇬🇭', team2: 'Panama', flag2: '🇵🇦', venue: 'Toronto' },
            { group: 'L', stage: 'Group', date: 'Jun 23', time: '6PM ET', team1: 'England', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Ghana', flag2: '🇬🇭', venue: 'Boston' },
            { group: 'L', stage: 'Group', date: 'Jun 23', time: '9PM ET', team1: 'Panama', flag1: '🇵🇦', team2: 'Croatia', flag2: '🇭🇷', venue: 'Toronto' },
            { group: 'L', stage: 'Group', date: 'Jun 27', time: '9PM ET', team1: 'Panama', flag1: '🇵🇦', team2: 'England', flag2: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue: 'New York / NJ' },
            { group: 'L', stage: 'Group', date: 'Jun 27', time: '9PM ET', team1: 'Croatia', flag1: '🇭🇷', team2: 'Ghana', flag2: '🇬🇭', venue: 'Philadelphia' },
            // ── ROUND OF 32 ──
            { group: 'R32', stage: 'Round of 32', date: 'Jun 28', time: '3PM ET', team1: '2nd Group A', flag1: '⚽', team2: '2nd Group B', flag2: '⚽', venue: 'Los Angeles' },
            { group: 'R32', stage: 'Round of 32', date: 'Jun 29', time: '1PM ET', team1: '1st Group C', flag1: '⚽', team2: '2nd Group F', flag2: '⚽', venue: 'Houston' },
            { group: 'R32', stage: 'Round of 32', date: 'Jun 29', time: '4:30PM ET', team1: '1st Group E', flag1: '⚽', team2: '3rd A/B/C/D/F', flag2: '⚽', venue: 'Boston' },
            { group: 'R32', stage: 'Round of 32', date: 'Jun 29', time: '9PM ET', team1: '1st Group F', flag1: '⚽', team2: '2nd Group C', flag2: '⚽', venue: 'Monterrey' },
            { group: 'R32', stage: 'Round of 32', date: 'Jun 30', time: '1PM ET', team1: '2nd Group E', flag1: '⚽', team2: '2nd Group I', flag2: '⚽', venue: 'Dallas' },
            { group: 'R32', stage: 'Round of 32', date: 'Jun 30', time: '5PM ET', team1: '1st Group I', flag1: '⚽', team2: '3rd C/D/F/G/H', flag2: '⚽', venue: 'New York / NJ' },
            { group: 'R32', stage: 'Round of 32', date: 'Jun 30', time: '9PM ET', team1: '1st Group A', flag1: '⚽', team2: '3rd C/E/F/H/I', flag2: '⚽', venue: 'Mexico City' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 1', time: '12PM ET', team1: '1st Group L', flag1: '⚽', team2: '3rd E/H/I/J/K', flag2: '⚽', venue: 'Atlanta' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 1', time: '4PM ET', team1: '1st Group G', flag1: '⚽', team2: '3rd A/E/H/I/J', flag2: '⚽', venue: 'Seattle' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 1', time: '8PM ET', team1: '1st Group D', flag1: '⚽', team2: '3rd B/E/F/I/J', flag2: '⚽', venue: 'San Francisco' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 2', time: '3PM ET', team1: '1st Group H', flag1: '⚽', team2: '2nd Group J', flag2: '⚽', venue: 'Los Angeles' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 2', time: '7PM ET', team1: '2nd Group K', flag1: '⚽', team2: '2nd Group L', flag2: '⚽', venue: 'Toronto' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 2', time: '11PM ET', team1: '1st Group B', flag1: '⚽', team2: '3rd E/F/G/I/J', flag2: '⚽', venue: 'Vancouver' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 3', time: '2PM ET', team1: '2nd Group D', flag1: '⚽', team2: '2nd Group G', flag2: '⚽', venue: 'Dallas' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 3', time: '6PM ET', team1: '1st Group J', flag1: '⚽', team2: '2nd Group H', flag2: '⚽', venue: 'Miami' },
            { group: 'R32', stage: 'Round of 32', date: 'Jul 3', time: '9:30PM ET', team1: '1st Group K', flag1: '⚽', team2: '3rd D/E/I/J/L', flag2: '⚽', venue: 'Kansas City' },
            // ── ROUND OF 16 ──
            { group: 'R16', stage: 'Round of 16', date: 'Jul 4', time: '1PM ET', team1: 'W Match 73', flag1: '⚽', team2: 'W Match 75', flag2: '⚽', venue: 'Houston' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 4', time: '5PM ET', team1: 'W Match 74', flag1: '⚽', team2: 'W Match 77', flag2: '⚽', venue: 'Philadelphia' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 5', time: '3PM ET', team1: 'W Match 79', flag1: '⚽', team2: 'W Match 80', flag2: '⚽', venue: 'Mexico City' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 5', time: '7PM ET', team1: 'W Match 76', flag1: '⚽', team2: 'W Match 78', flag2: '⚽', venue: 'New York / NJ' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 6', time: '3PM ET', team1: 'W Match 83', flag1: '⚽', team2: 'W Match 84', flag2: '⚽', venue: 'Dallas' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 6', time: '7PM ET', team1: 'W Match 81', flag1: '⚽', team2: 'W Match 82', flag2: '⚽', venue: 'Seattle' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 7', time: '3PM ET', team1: 'W Match 85', flag1: '⚽', team2: 'W Match 87', flag2: '⚽', venue: 'Vancouver' },
            { group: 'R16', stage: 'Round of 16', date: 'Jul 7', time: '7PM ET', team1: 'W Match 86', flag1: '⚽', team2: 'W Match 88', flag2: '⚽', venue: 'Atlanta' },
            // ── QUARTER-FINALS ──
            { group: 'QF', stage: 'Quarter-Finals', date: 'Jul 9', time: '3PM ET', team1: 'W Match 89', flag1: '⚽', team2: 'W Match 90', flag2: '⚽', venue: 'Boston' },
            { group: 'QF', stage: 'Quarter-Finals', date: 'Jul 10', time: '3PM ET', team1: 'W Match 93', flag1: '⚽', team2: 'W Match 94', flag2: '⚽', venue: 'Los Angeles' },
            { group: 'QF', stage: 'Quarter-Finals', date: 'Jul 11', time: '3PM ET', team1: 'W Match 91', flag1: '⚽', team2: 'W Match 92', flag2: '⚽', venue: 'Miami' },
            { group: 'QF', stage: 'Quarter-Finals', date: 'Jul 11', time: '7PM ET', team1: 'W Match 95', flag1: '⚽', team2: 'W Match 96', flag2: '⚽', venue: 'Kansas City' },
            // ── SEMI-FINALS ──
            { group: 'SF', stage: 'Semi-Finals', date: 'Jul 14', time: '3PM ET', team1: 'W Match 97', flag1: '⚽', team2: 'W Match 98', flag2: '⚽', venue: 'Dallas' },
            { group: 'SF', stage: 'Semi-Finals', date: 'Jul 15', time: '3PM ET', team1: 'W Match 99', flag1: '⚽', team2: 'W Match 100', flag2: '⚽', venue: 'Atlanta' },
            // ── THIRD PLACE ──
            { group: '3PL', stage: 'Third Place', date: 'Jul 18', time: '3PM ET', team1: 'Loser SF1', flag1: '⚽', team2: 'Loser SF2', flag2: '⚽', venue: 'Miami' },
            // ── FINAL ──
            { group: 'FIN', stage: 'Final', date: 'Jul 19', time: '3PM ET', team1: 'Winner SF1', flag1: '🏆', team2: 'Winner SF2', flag2: '🏆', venue: 'New York / NJ' },
        ]

        const stageOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'R32', 'R16', 'QF', 'SF', '3PL', 'FIN'];
        const stageLabels = {
            A: 'Group A', B: 'Group B', C: 'Group C', D: 'Group D', E: 'Group E', F: 'Group F',
            G: 'Group G', H: 'Group H', I: 'Group I', J: 'Group J', K: 'Group K', L: 'Group L',
            R32: 'Round of 32', R16: 'Round of 16', QF: 'Quarter-Finals', SF: 'Semi-Finals',
            '3PL': 'Third Place', FIN: '⚽ Final'
        };
        const knockoutStages = ['R32', 'R16', 'QF', 'SF', '3PL', 'FIN'];

        let activeGroup = 'A';

        function renderGroupNav() {
            const nav = document.getElementById('groupNav');
            let html = '';
            stageOrder.forEach((g) => {
                const isActive = g === activeGroup;
                html += `<button class="grp-btn${isActive ? ' active' : ''}" onclick="setGroup('${g}')">${stageLabels[g]}</button>`;
            });
            nav.innerHTML = html;
        }

        function renderMatches() {
            const grid = document.getElementById('matchesGrid');
            const filtered = matches.filter(m => m.group === activeGroup);
            const isKO = knockoutStages.includes(activeGroup);
            const isFinal = activeGroup === 'FIN';
            const cols = window.innerWidth <= 640 ? 1 : (isFinal ? 1 : isKO ? 2 : 3);
            grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            const cardStyle = '';
            const finalExtra = isFinal ? 'text-align:center;padding:2.5rem 2rem;' : '';

            grid.innerHTML = filtered.map(m => `
    <div class="match-card" style="${cardStyle}${finalExtra}">
      <div class="match-meta">${m.stage} &nbsp;·&nbsp; ${m.date} &nbsp;·&nbsp; ${m.time}</div>
      <div class="match-teams" style="${isFinal ? 'justify-content:center;font-size:1.1rem;gap:1.5rem;' : ''}">
        <span>${m.flag1} ${m.team1}</span>
        <span class="match-vs" style="${isFinal ? 'font-size:0.9rem;' : ''}">vs</span>
        <span>${m.flag2} ${m.team2}</span>
      </div>
      <div class="match-venue">📍 ${m.venue}</div>
    </div>
  `).join('');
        }

        window.setGroup = function (g) {
            activeGroup = g;
            renderGroupNav();
            renderMatches();
        };

        document.addEventListener('DOMContentLoaded', () => {
            renderGroupNav();
            renderMatches();
            populateMatchOptions();

            const nav = document.getElementById('groupNav');
            if (nav) {
                const controls = document.createElement('div');
                controls.className = 'group-nav-mobile-controls';
                controls.innerHTML = `
                    <button type="button" class="group-nav-arrow" aria-label="Scroll stages left">‹</button>
                    <button type="button" class="group-nav-arrow" aria-label="Scroll stages right">›</button>
                `;
                nav.insertAdjacentElement('beforebegin', controls);
                const [leftBtn, rightBtn] = controls.querySelectorAll('.group-nav-arrow');
                const scrollStep = () => Math.max(180, nav.clientWidth * 0.7);
                leftBtn.addEventListener('click', () => nav.scrollBy({ left: -scrollStep(), behavior: 'smooth' }));
                rightBtn.addEventListener('click', () => nav.scrollBy({ left: scrollStep(), behavior: 'smooth' }));
            }
        });

        // Host Cities: replace embedded images with city stock photos
        document.addEventListener('DOMContentLoaded', () => {
            const hostCities = document.querySelector('#gallery');
            if (!hostCities) return;

            const cityImages = {
                'venue-img-vv-ny': 'https://picsum.photos/seed/new-york-skyline/1600/900',
                'venue-img-vv-la': 'https://picsum.photos/seed/los-angeles-downtown/1600/900',
                'venue-img-vv-dal': 'https://picsum.photos/seed/dallas-texas-city/1600/900',
                'venue-img-vv-mia': 'https://picsum.photos/seed/miami-waterfront/1600/900',
                'venue-img-vv-sf': 'https://picsum.photos/seed/san-francisco-bay/1600/900',
                'venue-img-vv-bos': 'https://picsum.photos/seed/boston-harbor/1600/900'
            };

            Object.entries(cityImages).forEach(([cls, src]) => {
                const img = hostCities.querySelector(`img.${cls}`);
                if (!img) return;
                img.src = src;
            });
        });

        // ── SCROLL REVEAL ──────────────────────────────────────────────────────────
        document.addEventListener('DOMContentLoaded', () => {
            const revealTargets = [
                '.section-tag', '.section-title', '.section-rule', '.section-intro',
                '.concept-card', '.cigar-card', '.exp-card', '.pkg-card', '.moment-card',
                '.venue-card', '.reserve-detail', '.reserve-form',
                '.snapshot-card', '.footer-top', '.hero-stats',
            ];

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

            revealTargets.forEach((selector) => {
                document.querySelectorAll(selector).forEach((el) => {
                    if (!el.closest('.hero')) {
                        el.classList.add('reveal');
                        observer.observe(el);
                    }
                });
            });

            // Stagger cards in grids
            document.querySelectorAll('.concept-grid, .collection-grid, .experience-grid, .packages-grid, .schedule-moments, .venues-grid').forEach((grid) => {
                if (!grid.closest('.hero')) {
                    grid.classList.add('reveal-stagger');
                }
            });
        });

        // ── CARD GLOW FOLLOW MOUSE ─────────────────────────────────────────────────
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.venue-card, .concept-card, .cigar-card, .exp-card, .pkg-card, .moment-card');
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });

        // ── NAV SCROLL EFFECT ──────────────────────────────────────────────────────
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (nav) {
                nav.classList.toggle('scrolled', window.scrollY > 40);
            }
        }, { passive: true });

    
