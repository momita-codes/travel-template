
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dots = document.querySelectorAll('.dot');

  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
      dot.style.backgroundColor = (i === index) ? '#333' : '#bbb';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Event Listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentSlide = parseInt(dot.getAttribute('data-index'));
      showSlide(currentSlide);
    });
  });

  // Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Initialize
  showSlide(currentSlide);

