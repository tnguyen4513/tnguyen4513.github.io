// Theme toggle
const themeSwitch = document.getElementById('switch');

// Restore saved preference; default to dark (space theme)
const saved = localStorage.getItem('theme');
if (saved === 'light') {
    themeSwitch.checked = true;
    document.body.classList.add('light-mode');
}

themeSwitch.addEventListener('change', function () {
    document.body.classList.toggle('light-mode', this.checked);
    localStorage.setItem('theme', this.checked ? 'light' : 'dark');
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.classList.toggle('active');
});

// Close mobile nav on link click
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// Toast
window.addEventListener('load', () => {
    const toast = document.getElementById('toast');
    // Only show on smaller screens
    if (window.innerWidth < 768) {
        toast.classList.add('show');
        document.getElementById('closeToast').addEventListener('click', () => {
            toast.classList.remove('show');
        });
        setTimeout(() => toast.classList.remove('show'), 8000);
    }
});

// Subtle header shrink on scroll (optional polish)
let lastScroll = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 40) {
        header.style.boxShadow = '0 1px 0 var(--border)';
    } else {
        header.style.boxShadow = 'none';
    }
    lastScroll = y;
}, { passive: true });

// Scroll reveal for sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll(
        '.section-header, .about-grid, .skill-card, .timeline-item, .project-card, .cert-item, .contact-container'
    );
    targets.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => io.observe(el));
});