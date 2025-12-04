/**
 * TrafficNavigator UI/UX - Interactive Prototype
 * JavaScript for screen interactions, animations & Real Maps
 * Location: STEM School 6th October City, Cairo, Egypt
 */

// ============================================
// Cairo Locations Data
// ============================================
const LOCATIONS = {
    stemSchool: {
        name: "STEM School 6th October",
        coords: [29.9792, 30.9467],
        address: "6th October City, Giza Governorate"
    },
    mallOfEgypt: {
        name: "Mall of Egypt",
        coords: [29.9725, 30.9972],
        address: "6th October City, Mall of Egypt"
    },
    smartVillage: {
        name: "Smart Village",
        coords: [30.0716, 31.0169],
        address: "Smart Village, Cairo-Alex Desert Road"
    },
    arkanPlaza: {
        name: "Arkan Plaza Sheikh Zayed",
        coords: [30.0184, 31.0052],
        address: "Sheikh Zayed City, Giza"
    },
    egyptianMuseum: {
        name: "Egyptian Museum",
        coords: [30.0478, 31.2336],
        address: "Tahrir Square, Cairo"
    }
};

// Traffic route colors
const TRAFFIC_COLORS = {
    fast: '#10B981',
    moderate: '#F59E0B',
    heavy: '#EF4444'
};

// ============================================
// Map Instances
// ============================================
let homeMap = null;
let routesMap = null;
let navMap = null;

// ============================================
// Initialize on DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🚗 TrafficNavigator Design System', 'font-size: 24px; font-weight: bold; color: #6C63FF;');
    console.log('%cVersion 1.0 | iOS Mobile App', 'font-size: 14px; color: #64748B;');
    console.log('📍 Starting Location: STEM School 6th October');
    console.log('-----------------------------------');
    
    // Initialize all interactive elements
    initNavigation();
    initSplashScreen();
    initOnboarding();
    initSearchInteractions();
    initRouteSelection();
    initAnimations();
    initTogglePassword();
    
    // Initialize Leaflet Maps (if Leaflet is loaded)
    if (typeof L !== 'undefined') {
        initHomepageMap();
        initRoutesMap();
        initNavigationMap();
    } else {
        console.log('ℹ️ Leaflet not loaded - maps will show placeholders');
    }
});

// ============================================
// Leaflet Map Initialization
// ============================================

/**
 * Home Page Map - Shows STEM School location
 */
function initHomepageMap() {
    const mapContainer = document.getElementById('home-map');
    if (!mapContainer) return;
    
    homeMap = L.map('home-map', {
        zoomControl: false,
        attributionControl: false
    }).setView(LOCATIONS.stemSchool.coords, 14);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(homeMap);
    
    // Add STEM School marker
    const stemMarker = L.marker(LOCATIONS.stemSchool.coords, {
        icon: createCustomIcon('📍', '#6C63FF')
    }).addTo(homeMap);
    
    stemMarker.bindPopup(`
        <strong>${LOCATIONS.stemSchool.name}</strong><br>
        <small>${LOCATIONS.stemSchool.address}</small>
    `);
    
    // Add nearby destination markers
    addDestinationMarker(homeMap, LOCATIONS.mallOfEgypt, '🛒');
    addDestinationMarker(homeMap, LOCATIONS.smartVillage, '💼');
    addDestinationMarker(homeMap, LOCATIONS.arkanPlaza, '🏬');
    
    console.log('✅ Home map initialized at STEM School');
}

/**
 * Routes Selection Map - Shows route options
 */
function initRoutesMap() {
    const mapContainer = document.getElementById('routes-map');
    if (!mapContainer) return;
    
    routesMap = L.map('routes-map', {
        zoomControl: false,
        attributionControl: false
    }).setView([29.99, 30.97], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(routesMap);
    
    // Origin marker (STEM School)
    L.marker(LOCATIONS.stemSchool.coords, {
        icon: createCustomIcon('🏫', '#6C63FF')
    }).addTo(routesMap);
    
    // Destination marker (Mall of Egypt)
    L.marker(LOCATIONS.mallOfEgypt.coords, {
        icon: createCustomIcon('🎯', '#EF4444')
    }).addTo(routesMap);
    
    // Draw 3 route options
    drawRoutePolylines(routesMap);
    
    console.log('✅ Routes map initialized');
}

/**
 * Navigation Map - Active navigation view
 */
function initNavigationMap() {
    const mapContainer = document.getElementById('nav-map');
    if (!mapContainer) return;
    
    navMap = L.map('nav-map', {
        zoomControl: false,
        attributionControl: false
    }).setView([29.976, 30.96], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(navMap);
    
    // Current position marker
    L.marker([29.976, 30.96], {
        icon: createNavigationIcon()
    }).addTo(navMap);
    
    // Draw active route
    const activeRoute = [
        [29.9792, 30.9467],
        [29.978, 30.955],
        [29.976, 30.96],
        [29.974, 30.975],
        [29.9725, 30.9972]
    ];
    
    L.polyline(activeRoute, {
        color: TRAFFIC_COLORS.fast,
        weight: 6,
        opacity: 0.8
    }).addTo(navMap);
    
    console.log('✅ Navigation map initialized');
}

/**
 * Create custom marker icon
 */
function createCustomIcon(emoji, bgColor) {
    return L.divIcon({
        html: `<div style="
            background: ${bgColor};
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            border: 2px solid white;
        ">${emoji}</div>`,
        className: 'custom-marker',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
}

/**
 * Create navigation arrow icon
 */
function createNavigationIcon() {
    return L.divIcon({
        html: `<div style="
            background: #6C63FF;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: white;
            box-shadow: 0 0 20px rgba(108,99,255,0.6);
            border: 3px solid white;
            animation: pulse 2s infinite;
        ">▲</div>`,
        className: 'nav-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
}

/**
 * Add destination marker to map
 */
function addDestinationMarker(map, location, emoji) {
    const marker = L.marker(location.coords, {
        icon: createCustomIcon(emoji, '#F8FAFC')
    }).addTo(map);
    
    marker.bindPopup(`<strong>${location.name}</strong>`);
}

/**
 * Draw route polylines with traffic colors
 */
function drawRoutePolylines(map) {
    // Fast Route (Mehwar) - Green
    const fastRoute = [
        LOCATIONS.stemSchool.coords,
        [29.985, 30.96],
        [29.99, 30.98],
        LOCATIONS.mallOfEgypt.coords
    ];
    L.polyline(fastRoute, {
        color: TRAFFIC_COLORS.fast,
        weight: 5,
        opacity: 0.8
    }).addTo(map);
    
    // Moderate Route (26th July) - Yellow
    const moderateRoute = [
        LOCATIONS.stemSchool.coords,
        [29.975, 30.955],
        [29.97, 30.975],
        LOCATIONS.mallOfEgypt.coords
    ];
    L.polyline(moderateRoute, {
        color: TRAFFIC_COLORS.moderate,
        weight: 4,
        opacity: 0.7,
        dashArray: '5, 10'
    }).addTo(map);
    
    // Heavy Route (Ring Road) - Red
    const heavyRoute = [
        LOCATIONS.stemSchool.coords,
        [30.0, 30.94],
        [30.01, 30.98],
        [29.99, 31.01],
        LOCATIONS.mallOfEgypt.coords
    ];
    L.polyline(heavyRoute, {
        color: TRAFFIC_COLORS.heavy,
        weight: 4,
        opacity: 0.6,
        dashArray: '3, 8'
    }).addTo(map);
}

// ============================================
// UI Interactions
// ============================================

/**
 * Navigation & Scroll
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.screen-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Bottom nav
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            bottomNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    });
}

/**
 * Toggle Password Visibility
 */
function initTogglePassword() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
}

/**
 * Splash Screen Animation
 */
function initSplashScreen() {
    const splashLogo = document.querySelector('.splash-logo .logo-icon');
    if (splashLogo) {
        splashLogo.classList.add('animated');
        
        setTimeout(() => {
            console.log('✨ App loaded - transitioning to onboarding');
        }, 2000);
    }
}

/**
 * Onboarding Navigation
 */
function initOnboarding() {
    const dots = document.querySelectorAll('.onboarding-dots .dot');
    const nextBtn = document.querySelector('.btn-next');
    const skipBtn = document.querySelector('.btn-skip');
    
    let currentStep = 0;
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep < dots.length - 1) {
                currentStep++;
                updateDots(dots, currentStep);
            } else {
                console.log('➡️ Go to login');
            }
        });
    }
    
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            console.log('⏭️ Skip to login');
        });
    }
}

function updateDots(dots, activeIndex) {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

/**
 * Search Interactions
 */
function initSearchInteractions() {
    const searchInput = document.querySelector('.search-bar input');
    const micBtn = document.querySelector('.btn-mic');
    const resultItems = document.querySelectorAll('.result-item');
    
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            console.log('🔍 Search activated');
        });
    }
    
    if (micBtn) {
        micBtn.addEventListener('click', () => {
            console.log('🎤 Voice search activated');
            micBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                micBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }
    
    resultItems.forEach(item => {
        item.addEventListener('click', () => {
            const dest = item.querySelector('h5')?.textContent;
            console.log('📍 Selected destination:', dest);
        });
    });
}

/**
 * Route Selection
 */
function initRouteSelection() {
    const routeCards = document.querySelectorAll('.route-card');
    const goButtons = document.querySelectorAll('.btn-go');
    
    routeCards.forEach(card => {
        card.addEventListener('click', () => {
            routeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            const badge = card.querySelector('.route-badge');
            if (badge) {
                console.log('🛣️ Selected route:', badge.textContent);
            }
        });
        
        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    goButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('🚀 Starting navigation...');
        });
    });
}

/**
 * UI Animations & Intersection Observer
 */
function initAnimations() {
    const sections = document.querySelectorAll('.screen-section');
    const navItems = document.querySelectorAll('.screen-nav .nav-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                const id = entry.target.getAttribute('id');
                navItems.forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('href') === `#${id}`) {
                        nav.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Quick Place Actions
 */
document.querySelectorAll('.quick-place').forEach(place => {
    place.addEventListener('click', () => {
        const placeName = place.querySelector('span')?.textContent;
        console.log('🏠 Navigate to:', placeName);
    });
});

/**
 * Settings Toggle
 */
document.querySelectorAll('.toggle input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        console.log('⚙️ Setting changed:', this.checked);
    });
});

// ============================================
// Map Utility Functions
// ============================================

/**
 * Center map on current location
 */
function centerOnLocation(map, coords, zoom = 15) {
    if (map) {
        map.setView(coords, zoom);
    }
}

/**
 * Add traffic layer simulation
 */
function addTrafficSimulation(map) {
    const trafficPoints = [
        { coords: [29.98, 30.95], color: TRAFFIC_COLORS.heavy },
        { coords: [29.985, 30.97], color: TRAFFIC_COLORS.moderate },
        { coords: [29.99, 30.99], color: TRAFFIC_COLORS.fast }
    ];
    
    trafficPoints.forEach(point => {
        L.circle(point.coords, {
            color: point.color,
            fillColor: point.color,
            fillOpacity: 0.3,
            radius: 200
        }).addTo(map);
    });
}

// Add CSS animation for navigation marker
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(108,99,255,0.6); }
        70% { box-shadow: 0 0 0 15px rgba(108,99,255,0); }
        100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
    }
    
    .animate-in {
        animation: fadeInUp 0.5s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('🗺️ TrafficNavigator Maps Ready');
console.log('📍 Origin: STEM School 6th October');
console.log('🎯 Destinations: Mall of Egypt, Smart Village, Arkan Plaza');
