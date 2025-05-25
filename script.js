// Swiper initializations
new Swiper('.mySwiper1', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  pagination: {
    el: '.mySwiper1 .swiper-pagination',
    clickable: true
  }
});

new Swiper('.mySwiper2', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  pagination: {
    el: '.mySwiper2 .swiper-pagination',
    clickable: false
  },
  on: {
    slideChange: function () {
      const captions = document.querySelectorAll('.swiper2-caption');
      captions.forEach((caption, index) => {
        caption.classList.remove('active');
      });
      const realIndex = this.realIndex;
      if (captions[realIndex]) {
        captions[realIndex].classList.add('active');
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Activate the first caption on load for Swiper2
  const captions = document.querySelectorAll('.swiper2-caption');
  if (captions[0]) captions[0].classList.add('active');

  // Run scroll logic once on load
  handleScroll();
});

// Optional additional Swipers (can be removed if unused)
new Swiper('.mySwiper3', {
  loop: true,
  pagination: {
    el: '.mySwiper3 .swiper-pagination',
    clickable: true
  }
});

new Swiper('.mySwiper4', {
  loop: true,
  pagination: {
    el: '.mySwiper4 .swiper-pagination',
    clickable: true
  }
});

//Added code for Swiper99

let swiperImages, swiperCaptions;

document.addEventListener('DOMContentLoaded', () => {
  const imageSwiperEl = document.querySelector('.mySwiper99');
  const captionSwiperEl = document.querySelector('.mySwiper2-captions');

  if (imageSwiperEl && captionSwiperEl) {
    swiperCaptions = new Swiper('.mySwiper2-captions', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 20,
      allowTouchMove: true // Swiping on captions enabled
    });

    swiperImages = new Swiper('.mySwiper99', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      controller: {
        control: swiperCaptions
      }
    });

    swiperCaptions.controller.control = swiperImages;
  }
});

//Added code for Swiper2


const imageSwiperEl = document.querySelector('#imageSwiper2');
const captionSwiperEl = document.querySelector('#captionSwiper2');

if (imageSwiperEl && captionSwiperEl) {
  swiperCaptions = new Swiper('#captionSwiper2', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    allowTouchMove: true
  });

  swiperImages = new Swiper('#imageSwiper2', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    pagination: {
      el: '#imageSwiper2 .swiper-pagination',
      clickable: true
    },
    controller: {
      control: swiperCaptions
    }
  });

  swiperCaptions.controller.control = swiperImages;
}


//added code for swiper 2 popup html

function openPopup(title, text) {
  const html = `<h2>${title}</h2><p>${text}</p>`;
  document.getElementById('popupContent').innerHTML = html;
  document.getElementById('popupBox').style.display = 'flex';
  document.body.classList.add('popup-open');
}

function openPopupFromFile(htmlFilePath) {
  fetch(htmlFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${htmlFilePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(htmlContent => {
      document.getElementById('popupContent').innerHTML = htmlContent;
      document.getElementById('popupBox').style.display = 'block';
      document.body.classList.add('popup-open');
    })
    .catch(error => {
      console.error('Error loading popup content:', error);
    });
}

//dropdown test

function toggleDropdown(headerElement) {
  const content = headerElement.nextElementSibling;
  const arrow = headerElement.querySelector('.arrow');

  content.classList.toggle('open');
  headerElement.classList.toggle('active');

  // The arrow rotates using CSS class "active"
}



// Timeline scroll effect
const cards = document.querySelectorAll('.card');
const dates = document.querySelectorAll('.year-column span');

function handleScroll() {
  const trigger = window.innerHeight * 0.6;
  let activeIndex = -1;

  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const content = card.querySelector('.card-content');

    if (rect.top < trigger && rect.bottom > 100) {
      activeIndex = i;
      content.classList.add('visible');
    } else {
      content.classList.remove('visible');
    }
  });

  dates.forEach(d => d.classList.remove('active', 'near', 'far'));

  if (activeIndex >= 0) {
    dates[activeIndex]?.classList.add('active');
    dates[activeIndex - 1]?.classList.add('near');
    dates[activeIndex + 1]?.classList.add('near');
    dates[activeIndex - 2]?.classList.add('far');
    dates[activeIndex + 2]?.classList.add('far');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Popup functionality


function closePopup() {
  document.getElementById('popupBox').style.display = 'none';
  document.body.classList.remove('popup-open');
}

//Popup expand test

function toggleDropdown(headerElement) {
  const content = headerElement.nextElementSibling;
  const arrow = headerElement.querySelector('.arrow');

  if (!content) return; // safety check

  content.classList.toggle('open');
  headerElement.classList.toggle('active');
}
