// JS for animations and interactions
document.addEventListener("DOMContentLoaded", (event) => {
    // Lenis Smooth Scroll
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', gestureDirection: 'vertical', smooth: true, mouseMultiplier: 1, smoothTouch: false, touchMultiplier: 2, infinite: false })
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
    }

    // GSAP Animations (Конвейер сайтов 3.0 Standard)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Reveals
        const reveals = document.querySelectorAll("[data-reveal]");
        reveals.forEach((el) => {
            const effect = el.getAttribute("data-reveal");
            const delay = el.getAttribute("data-delay") || 0;
            
            let config = { opacity: 0, ease: "power3.out", duration: 1.2, scrollTrigger: { trigger: el, start: "top 85%" }};
            
            if (effect === "fade-up") { config.y = 50; }
            if (effect === "scale") { config.scale = 0.9; }
            if (effect === "left") { config.x = -50; }
            if (effect === "right") { config.x = 50; }
            
            gsap.from(el, config);
        });
    }

    // FAQ Toggle
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
});
