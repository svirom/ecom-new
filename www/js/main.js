document.addEventListener('DOMContentLoaded', function() {
  
  // scrolled functions
  window.addEventListener('scroll', function() {
    const mainHeaderCoord = document.querySelector('.main-header').getBoundingClientRect().top;
    const currentCoord = window.scrollY;

    // scrolled top header
    if (currentCoord >= (mainHeaderCoord + 100)) {
      document.querySelector('.main-header').classList.add('scrolled');
    } else {
      document.querySelector('.main-header').classList.remove('scrolled');
    }
  });

  // mobile menu toggle
  const mobileMenuButton = document.querySelector('#mobile-menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const mobileMenuClose = mobileMenu.querySelector('.close');

  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
    document.querySelector('body').classList.toggle('overflow-hidden');
  });

  mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('show');
    document.querySelector('body').classList.remove('overflow-hidden');
  });

  // remove mobile menu classes on window resize up to 1200
  window.addEventListener('resize', function() {
    let documentWidth = document.documentElement.clientWidth;
    if (documentWidth >= 1200) {
      mobileMenu.classList.remove('show');
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  })
})