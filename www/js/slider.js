document.addEventListener('DOMContentLoaded', function () {

  // splide slider
  let splide = new Splide( '.splide', {
    // type : 'fade',
    pagination: false,
    speed: 800,
  } );

  splide.on( 'mounted', function () {
    const slidesCount = splide.Components.Slides.getLength();
    document.querySelector('#splide-all-count').textContent = slidesCount;
  } );

  splide.mount();

  splide.on( 'move', function (newIndex) {
    document.querySelector('#splide-current-index').textContent = newIndex + 1;
  } );
  
});