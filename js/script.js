// QuickFixx.in – Premium Mobile Repair Website
// Interactive JavaScript with smooth animations

document.addEventListener('DOMContentLoaded', function() {
    console.log('QuickFixx Premium Website Loaded 🚀');
    
    // ===== DOM Elements =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.querySelector('.main-nav');
    const locationTags = document.querySelectorAll('.location-tag');
    const currentYear = document.getElementById('currentYear');
    const brandsGrid = document.getElementById('brandsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const brandSearch = document.getElementById('brandSearch');
    const clearSearch = document.getElementById('clearSearch');
    
    // ===== Business Configuration =====
    const BUSINESS_CONFIG = {
        phone: '7088134375',
        whatsapp: '917088134375',
        email: 'sheikhpasheikrvez074@gmail.com',
        cities: ['bengaluru', 'hyderabad', 'mumbai', 'delhi'],
        whatsappMessage: "Hi QuickFixx, I need doorstep mobile repair service.",
        workingHours: "24/7"
    };
    
    // ===== Brands Data =====
    const BRANDS_DATA = [
        {
            id: 1,
            name: "Apple",
            icon: "fab fa-apple",
            category: ["smartphone", "tablet", "watch"],
            models: ["iPhone 15 Pro Max", "iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone SE", "iPad Pro", "iPad Air", "iPad Mini", "Apple Watch"],
            description: "Premium iPhone, iPad & Apple Watch Repair",
            featured: true
        },
        {
            id: 2,
            name: "Samsung",
            icon: "fab fa-samsung",
            category: ["smartphone", "tablet", "watch"],
            models: ["Galaxy S23 Ultra", "Galaxy Z Fold5", "Galaxy Z Flip5", "Galaxy A Series", "Galaxy Tab", "Galaxy Watch"],
            description: "Flagship Galaxy & Foldable Devices",
            featured: true
        },
        {
            id: 3,
            name: "OnePlus",
            icon: "fas fa-mobile-alt",
            category: ["smartphone"],
            models: ["OnePlus 11", "OnePlus 10 Pro", "OnePlus 9 Series", "OnePlus Nord", "OnePlus 8T"],
            description: "Flagship Killer Series Repair",
            featured: false
        },
        {
            id: 4,
            name: "Oppo",
            icon: "fas fa-camera",
            category: ["smartphone"],
            models: ["Find X6 Pro", "Reno Series", "F Series", "A Series"],
            description: "Camera-Focused Smartphone Repair",
            featured: false
        },
        {
            id: 5,
            name: "Vivo",
            icon: "fas fa-music",
            category: ["smartphone"],
            models: ["X Series", "V Series", "Y Series", "T Series"],
            description: "Music & Camera Smartphone Repair",
            featured: false
        },
        {
            id: 6,
            name: "Realme",
            icon: "fas fa-bolt",
            category: ["smartphone"],
            models: ["Realme 11 Pro+", "Realme 10 Pro", "Realme Narzo", "Realme C Series"],
            description: "Budget Performance Smartphones",
            featured: false
        },
        {
            id: 7,
            name: "Google Pixel",
            icon: "fab fa-google",
            category: ["smartphone", "tablet"],
            models: ["Pixel 8 Pro", "Pixel 7a", "Pixel Fold", "Pixel Tablet"],
            description: "Pure Android Experience Repair",
            featured: true
        },
        {
            id: 8,
            name: "Poco",
            icon: "fas fa-gamepad",
            category: ["smartphone"],
            models: ["Poco F5", "Poco X5", "Poco M Series"],
            description: "Gaming-Focused Smartphone Repair",
            featured: false
        },
        {
            id: 9,
            name: "Redmi",
            icon: "fas fa-fire",
            category: ["smartphone"],
            models: ["Redmi Note 13", "Redmi 12", "Redmi A Series"],
            description: "Value-for-Money Smartphone Repair",
            featured: false
        },
        {
            id: 10,
            name: "Asus",
            icon: "fab fa-asus",
            category: ["smartphone"],
            models: ["ROG Phone 7", "Zenfone 10"],
            description: "Gaming & Compact Flagship Repair",
            featured: false
        },
        {
            id: 11,
            name: "Motorola",
            icon: "fab fa-motorola",
            category: ["smartphone"],
            models: ["Edge 40 Pro", "Razr 40", "G Series"],
            description: "Foldable & Budget Device Repair",
            featured: false
        },
        {
            id: 12,
            name: "Nokia",
            icon: "fab fa-nokia",
            category: ["smartphone"],
            models: ["Nokia G Series", "Nokia X Series", "Classic Models"],
            description: "Durable & Classic Device Repair",
            featured: false
        },
        {
            id: 13,
            name: "Xiaomi",
            icon: "fas fa-wind",
            category: ["smartphone", "tablet"],
            models: ["Xiaomi 13 Pro", "Xiaomi Pad 6", "Mi Series"],
            description: "Innovative Tech Device Repair",
            featured: false
        },
        {
            id: 14,
            name: "Nothing",
            icon: "fas fa-ghost",
            category: ["smartphone"],
            models: ["Phone (2)", "Phone (1)"],
            description: "Transparent Design Smartphone Repair",
            featured: false
        },
        {
            id: 15,
            name: "iQOO",
            icon: "fas fa-tachometer-alt",
            category: ["smartphone"],
            models: ["iQOO 11", "iQOO Z7", "iQOO Neo7"],
            description: "Performance-Oriented Smartphone Repair",
            featured: false
        },
        {
            id: 16,
            name: "Tecno",
            icon: "fas fa-globe-asia",
            category: ["smartphone"],
            models: ["Phantom Series", "Camon Series", "Spark Series"],
            description: "Budget & Camera Smartphone Repair",
            featured: false
        }
    ];

    // ===== Services Data =====
    const SERVICES_DATA = [
        {
            id: 1,
            name: "Doorstep Mobile Repair",
            icon: "fas fa-home",
            category: "premium",
            description: "Our flagship service. A certified technician comes to your location with all tools and genuine parts for a complete repair.",
            features: [
                "Certified technician at your door",
                "All tools & parts brought to you",
                "Live repair you can watch",
                "30-minute average repair time",
                "Free diagnostic assessment"
            ],
            price: "Service-Based",
            featured: true,
            ctaText: "Book Doorstep Service",
            whatsappMessage: "Hi QuickFixx, I want to book your Doorstep Mobile Repair service."
        },
        {
            id: 2,
            name: "Screen & Glass Repair",
            icon: "fas fa-mobile-alt",
            category: "repair",
            description: "Professional repair for cracked, shattered, or unresponsive screens. Includes front and back glass replacement.",
            features: [
                "Cracked screen replacement",
                "Front/Back glass repair",
                "OLED & LCD displays",
                "Curved screen expertise",
                "Color calibration"
            ],
            price: "₹1,499",
            featured: false,
            ctaText: "Fix My Screen",
            whatsappMessage: "Hi QuickFixx, I need screen/glass repair for my device."
        },
        {
            id: 3,
            name: "Battery Replacement",
            icon: "fas fa-battery-full",
            category: "repair",
            description: "Is your battery draining fast? We replace it with a high-quality, long-lasting battery for optimal performance.",
            features: [
                "Genuine/OEM batteries",
                "Battery health diagnostics",
                "Fast replacement (<20 mins)",
                "Improved battery life",
                "Safety tested"
            ],
            price: "₹999",
            featured: false,
            ctaText: "Replace Battery",
            whatsappMessage: "Hi QuickFixx, I need a battery replacement for my phone."
        },
        {
            id: 4,
            name: "Charging Port Repair",
            icon: "fas fa-plug",
            category: "repair",
            description: "Solve charging problems, loose ports, or connectivity issues with professional charging port repair.",
            features: [
                "Port cleaning & repair",
                "Fast charging restoration",
                "Data transfer fix",
                "Water damage cleanup",
                "Original port components"
            ],
            price: "₹799",
            featured: false,
            ctaText: "Fix Charging",
            whatsappMessage: "Hi QuickFixx, my phone has charging port issues."
        },
        {
            id: 5,
            name: "Water Damage Repair",
            icon: "fas fa-tint",
            category: "repair",
            description: "Emergency service for liquid-damaged devices. Quick diagnostic and corrosion cleaning to save your device.",
            features: [
                "Emergency liquid damage service",
                "Ultrasonic cleaning",
                "Corrosion removal",
                "Component-level repair",
                "Data recovery attempt"
            ],
            price: "₹1,299",
            featured: false,
            ctaText: "Emergency Water Repair",
            whatsappMessage: "Hi QuickFixx, my device has water damage and needs emergency repair."
        },
        {
            id: 6,
            name: "Camera & Audio Repair",
            icon: "fas fa-camera",
            category: "repair",
            description: "Fix blurry cameras, faulty focus, or speaker/microphone issues with precision repair.",
            features: [
                "Front/Rear camera repair",
                "Autofocus & flash fix",
                "Speaker replacement",
                "Microphone cleaning",
                "Noise cancellation check"
            ],
            price: "₹899",
            featured: false,
            ctaText: "Fix Camera/Audio",
            whatsappMessage: "Hi QuickFixx, I have camera or audio issues with my device."
        }
    ];
    
    // ===== Mobile Menu Toggle =====
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (mainNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            document.body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // ===== Location Selector =====
    locationTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const city = this.dataset.city;
            
            // Remove active class from all tags
            locationTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');
            
            // Update booking buttons with selected city
            updateBookingLinks(city);
            
            // Show notification
            showCityNotification(city);
        });
    });
    
    function updateBookingLinks(city) {
        const message = encodeURIComponent(
            `Hi QuickFixx, I need doorstep mobile repair service in ${city.toUpperCase()}.`
        );
        
        // Update WhatsApp buttons
        document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
            link.href = `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${message}`;
        });
    }
    
    function showCityNotification(city) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'city-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Service selected for <strong>${city.toUpperCase()}</strong>. Booking buttons updated!</span>
        `;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(45deg, var(--color-secondary), #ffffff);
            color: var(--color-primary);
            padding: 1rem 1.5rem;
            border-radius: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            animation: slideInRight 0.3s ease-out;
        `;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add keyframes for animation
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // ===== Update Current Year =====
    function updateCurrentYear() {
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
    }
    
    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== Parallax Effect =====
    function initParallax() {
        const particles = document.querySelectorAll('.particle');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            particles.forEach((particle, index) => {
                const speed = 0.3 + (index * 0.1);
                particle.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }
    
    // ===== Animate Elements on Scroll =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements
        document.querySelectorAll('.trust-item, .brand-card, .summary-card, .repair-cta, .service-card, .differentiator-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
        // Add animation class
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===== Brands Section Functionality =====
    function renderBrands(filterCategory = 'all', searchTerm = '') {
        if (!brandsGrid) return;
        brandsGrid.innerHTML = '';
        
        const filteredBrands = BRANDS_DATA.filter(brand => {
            // Filter by category
            const categoryMatch = filterCategory === 'all' || brand.category.includes(filterCategory);
            
            // Filter by search term
            const searchMatch = !searchTerm || 
                brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                brand.models.some(model => model.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return categoryMatch && searchMatch;
        });
        
        if (filteredBrands.length === 0) {
            brandsGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--color-secondary); margin-bottom: 1rem;"></i>
                    <h3 style="color: var(--color-text); margin-bottom: 1rem;">No brands found</h3>
                    <p style="color: var(--color-text-light);">Try a different search term or category</p>
                    <button class="btn-secondary" id="resetFilters" style="margin-top: 1.5rem;">
                        <i class="fas fa-redo"></i> Reset Filters
                    </button>
                </div>
            `;
            
            document.getElementById('resetFilters')?.addEventListener('click', () => {
                categoryBtns.forEach(btn => btn.classList.remove('active'));
                document.querySelector('[data-category="all"]').classList.add('active');
                brandSearch.value = '';
                renderBrands('all', '');
            });
            
            return;
        }
        
        filteredBrands.forEach(brand => {
            const brandCard = document.createElement('div');
            brandCard.className = `brand-card ${brand.featured ? 'featured' : ''}`;
            brandCard.dataset.category = brand.category.join(' ');
            
            brandCard.innerHTML = `
                ${brand.featured ? '<div class="featured-badge"><i class="fas fa-star"></i></div>' : ''}
                <div class="brand-icon">
                    <i class="${brand.icon}"></i>
                </div>
                <h3 class="brand-name">${brand.name}</h3>
                <p class="brand-models">${brand.description}</p>
                <div class="brand-tags">
                    ${brand.category.map(cat => 
                        `<span class="brand-tag">${cat === 'smartphone' ? 'Phone' : 
                            cat === 'tablet' ? 'Tablet' : 'Watch'}</span>`
                    ).join('')}
                </div>
            `;
            
            // Add click event to book repair for this brand
            brandCard.addEventListener('click', () => {
                const message = encodeURIComponent(
                    `Hi QuickFixx, I need repair for my ${brand.name} device.`
                );
                window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${message}`, '_blank');
            });
            
            brandsGrid.appendChild(brandCard);
        });
        
        // Animate brand cards
        setTimeout(() => {
            const cards = brandsGrid.querySelectorAll('.brand-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.05}s`;
                card.style.animation = 'fadeInUp 0.6s ease-out forwards';
            });
            
            // Add animation keyframes if not exists
            if (!document.querySelector('#brands-animation')) {
                const style = document.createElement('style');
                style.id = 'brands-animation';
                style.textContent = `
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
            }
        }, 100);
    }
    
    // ===== Category Filter =====
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category
            const category = this.dataset.category;
            
            // Render brands with filter
            renderBrands(category, brandSearch.value);
        });
    });
    
    // ===== Brand Search =====
    let searchTimeout;
    if (brandSearch) {
        brandSearch.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            
            searchTimeout = setTimeout(() => {
                const searchTerm = this.value.trim();
                const activeCategory = document.querySelector('.category-btn.active').dataset.category;
                renderBrands(activeCategory, searchTerm);
            }, 300);
        });
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            brandSearch.value = '';
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            renderBrands(activeCategory, '');
            brandSearch.focus();
        });
    }
    
    // ===== Render Services Function =====
    function renderServices() {
        const servicesGrid = document.getElementById('servicesGrid');
        if (!servicesGrid) return;
        
        servicesGrid.innerHTML = '';
        
        SERVICES_DATA.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = `service-card ${service.featured ? 'featured' : ''}`;
            serviceCard.dataset.service = service.name.toLowerCase().replace(/\s+/g, '-');
            
            serviceCard.innerHTML = `
                ${service.featured ? '<div class="featured-badge"><i class="fas fa-crown"></i> Most Popular</div>' : ''}
                
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                
                <div class="service-content">
                    <h3 class="service-title">${service.name}</h3>
                    <p class="service-description">${service.description}</p>
                    
                    <ul class="service-features">
                        ${service.features.map(feature => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="service-price">
                    <div class="price-tag">
                        <span class="price-from">From</span>
                        <span class="price-amount">${service.price}</span>
                    </div>
                </div>
                
                <a href="https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(service.whatsappMessage)}" 
                   class="service-cta" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    <span>${service.ctaText}</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            `;
            
            // Add click event to entire card (excluding the CTA link)
            serviceCard.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    const message = encodeURIComponent(`Hi QuickFixx, I'm interested in your ${service.name} service.`);
                    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${message}`, '_blank');
                }
            });
            
            servicesGrid.appendChild(serviceCard);
        });
        
        // Animate service cards on load
        setTimeout(() => {
            const cards = servicesGrid.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 100);
    }
    
    // ===== Initialize Everything =====
    function init() {
        updateCurrentYear();
        updateBookingLinks('bengaluru');
        initParallax();
        initScrollAnimations();
        
        // Update contact links dynamically
        const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
        whatsappLinks.forEach(link => {
            const message = encodeURIComponent(BUSINESS_CONFIG.whatsappMessage);
            link.href = `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${message}`;
        });
        
        // Update phone links
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.href = `tel:${BUSINESS_CONFIG.phone}`;
        });
        
        // Update email links
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.href = `mailto:${BUSINESS_CONFIG.email}`;
        });
        
        // Initialize brands & services
        renderBrands();
        renderServices();
    }
    
    // ===== Execute Initialization =====
    init();
    
    // ===== Console Welcome Message =====
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║          QUICKFIXX PREMIUM WEBSITE           ║
    ║           Successfully Loaded! 🎉           ║
    ╠══════════════════════════════════════════════╣
    ║ Business: QuickFixx.in                       ║
    ║ Phone: ${BUSINESS_CONFIG.phone}                      ║
    ║ WhatsApp: ${BUSINESS_CONFIG.whatsapp}                   ║
    ║ Email: ${BUSINESS_CONFIG.email}║
    ║ Cities: ${BUSINESS_CONFIG.cities.join(', ')}      ║
    ║ Brands: ${BRANDS_DATA.length} Premium Brands          ║
    ╚══════════════════════════════════════════════╝
    `);
});