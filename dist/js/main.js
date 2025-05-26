document.addEventListener('DOMContentLoaded', function() {
    // ========== Бургер-меню ==========
    const burger = document.querySelector('.burger-menu');
    const navWrapper = document.querySelector('.hero__nav-wrapper');
    const body = document.body;
    
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        navWrapper.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    overlay.addEventListener('click', function() {
        burger.classList.remove('active');
        navWrapper.classList.remove('active');
        this.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    // ========== Плавний скрол для навігації ==========
    document.querySelectorAll('.hero__menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Закриваємо меню на мобільних
            if (window.innerWidth <= 768) {
                burger.classList.remove('active');
                navWrapper.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('no-scroll');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Скрол до наступного розділу ==========
    const scrollButton = document.querySelector('.hero__scroll');
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            const nextSection = document.querySelector('.locations');
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ========== Навігація місць (Browse more) ==========
    const browseMore = document.querySelector('.browse-more');
    if (browseMore) {
        browseMore.addEventListener('click', function() {
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ========== Слайдер Featured Venues ==========
    let currentVenueIndex = 1;
    const totalVenues = 10;
    const currentPage = document.querySelector('.venue__current');
    
    // Обробники кнопок навігації
    document.querySelector('.venue__arrow--left').addEventListener('click', function() {
        if (currentVenueIndex > 1) {
            currentVenueIndex--;
            currentPage.textContent = currentVenueIndex;
        }
    });
    
    document.querySelector('.venue__arrow--right').addEventListener('click', function() {
        if (currentVenueIndex < totalVenues) {
            currentVenueIndex++;
            currentPage.textContent = currentVenueIndex;
        }
    });

    // ========== Валідація форми ==========
    const contactForm = document.querySelector('.contact__form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('.contact__input, .contact__textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                alert('Form submitted successfully!');
                this.reset();
            } else {
                alert('Please fill all fields correctly!');
            }
        });
    }
});