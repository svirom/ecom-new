document.addEventListener('DOMContentLoaded', function() {

  scrolledHeader();
  scrolledFooter();
  
  // scrolled functions
  window.addEventListener('scroll', function() {
    scrolledHeader();
    scrolledFooter();
  });

  // scrolled top header
  function scrolledHeader() {
    const mainHeaderCoord = document.querySelector('.main-header').getBoundingClientRect().top;
    const currentCoord = window.scrollY;

    if (currentCoord >= (mainHeaderCoord + 84)) {
      document.querySelector('.main-header').classList.add('scrolled');
    } else {
      document.querySelector('.main-header').classList.remove('scrolled');
    }
  }

  // sticky footer
  function scrolledFooter() {
    const stickyFooter = document.querySelector('.sticky-footer');
    const stickyFooterHeight = stickyFooter.scrollHeight;
    const mainFooterCoord = document.querySelector('.main-footer').getBoundingClientRect().top;
    const documentHeight = document.documentElement.clientHeight;

    if (mainFooterCoord > documentHeight) {
      stickyFooter.style.maxHeight = stickyFooterHeight + 'px';
    } else {
      stickyFooter.removeAttribute('style');
    }
  }

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
  });

  // play button
  const infoVideo = document.querySelectorAll('.info-video');

  infoVideo.forEach(function(video) {
    const playButton = video.querySelector('.info-video__button');
    const playVideo = video.querySelector('.info-video__player');
    const playBkgr = video.querySelector('.info-video__bkgr');
    
    playButton.addEventListener('click', function(e) {
      e.preventDefault();
      playVideo.play();
      playButton.classList.add('d-none');
      playBkgr.classList.add('d-none');
    })
  })

})