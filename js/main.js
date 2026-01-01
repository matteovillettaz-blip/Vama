/**
 * VAMA - Main JavaScript
 * Version switcher and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Version Switcher
    const switcherBtns = document.querySelectorAll('.switcher-btn');
    const versionContainers = document.querySelectorAll('.version-container');

    switcherBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const version = this.dataset.version;

            // Update buttons
            switcherBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update containers
            versionContainers.forEach(container => {
                container.classList.remove('active');
            });

            document.getElementById(`version-${version}`).classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Re-initialize icons for the new container
            lucide.createIcons();
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Header scroll effect (optional - adds shadow on scroll)
    const headers = document.querySelectorAll('.header');

    window.addEventListener('scroll', function() {
        headers.forEach(header => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            } else {
                header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
            }
        });
    });

    // Form submission (prevent default for demo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Demo: Form inviato con successo!\n\nIn produzione, questo invierà i dati al server.');
        });
    });

    // Mobile menu toggle
    const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');

    mobileMenuBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const header = this.closest('.header');
            const nav = header.querySelector('.nav-main');
            const isOpen = nav.classList.contains('mobile-open');

            if (isOpen) {
                nav.classList.remove('mobile-open');
                this.innerHTML = '<i data-lucide="menu"></i>';
            } else {
                nav.classList.add('mobile-open');
                this.innerHTML = '<i data-lucide="x"></i>';
            }

            // Re-initialize icons
            lucide.createIcons();
        });
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-main .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const nav = this.closest('.nav-main');
            const header = nav.closest('.header');
            const btn = header.querySelector('.mobile-menu-btn');

            if (nav.classList.contains('mobile-open')) {
                nav.classList.remove('mobile-open');
                btn.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            }
        });
    });

    // Animate elements on scroll (simple implementation)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .service-card-b, .why-item, .stat-item');

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;

            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animation
    const setInitialStyles = () => {
        const elements = document.querySelectorAll('.service-card, .service-card-b, .why-item');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };

    // Run animations
    setInitialStyles();
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
