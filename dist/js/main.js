document.addEventListener('DOMContentLoaded', () => {

    // ===== Scroll on "↓ Scroll" button =====
    const scrollBtn = document.querySelector('.hero__scroll');
    scrollBtn?.addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector('.locations')?.offsetTop || 0,
        behavior: 'smooth'
      });
    });
  
    // ===== Burger menu toggle =====
    const burger = document.querySelector('.burger-menu');
    const navWrapper = document.querySelector('.hero__nav-wrapper');
    burger?.addEventListener('click', () => {
      navWrapper?.classList.toggle('active'); // You need to add .active CSS styles (e.g. `display: block`)
    });
  
    // ===== Featured venue slider =====
    const venues = [
      {
        image: 'img/Villa.jpg',
        name: 'Villa Balbianello',
        location: 'Lake Como',
        description: `The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini)...`,
        note: `But the special feature of Villa Balbianello is above all the vast garden...`
      },
      {
        image: 'img/Villa2.jpg',
        name: 'Villa Erba',
        location: 'Cernobbio',
        description: `Villa Erba is a 19th-century villa surrounded by a beautiful park...`,
        note: `The architecture and scenery are perfect for cinematic weddings...`
      },
      // ➕ Add more venue objects here
    ];
  
    let currentVenue = 0;
  
    const updateVenue = () => {
      const image = document.querySelector('.featured-venue__image img');
      const name = document.querySelector('.venue__name');
      const location = document.querySelector('.venue__location');
      const desc = document.querySelector('.venue__description');
      const note = document.querySelector('.venue__note');
      const current = document.querySelector('.venue__current');
      const total = document.querySelector('.venue__total');
  
      const venue = venues[currentVenue];
      image.src = venue.image;
      name.textContent = venue.name;
      location.textContent = venue.location;
      desc.textContent = venue.description;
      note.innerHTML = venue.note + ' <a href="#" class="venue__more">View more</a>';
      current.textContent = (currentVenue + 1).toString();
      total.textContent = `/${venues.length}`;
    };
  
    document.querySelector('.venue__arrow--left')?.addEventListener('click', () => {
      currentVenue = (currentVenue - 1 + venues.length) % venues.length;
      updateVenue();
    });
  
    document.querySelector('.venue__arrow--right')?.addEventListener('click', () => {
      currentVenue = (currentVenue + 1) % venues.length;
      updateVenue();
    });
  
    updateVenue(); // Initial load
  
    // ===== Browse More Scroll Left (optional enhancement) =====
    const browseMore = document.querySelector('.browse-more');
    browseMore?.addEventListener('click', () => {
      document.querySelector('.locations__grid')?.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    });
  
  });
  