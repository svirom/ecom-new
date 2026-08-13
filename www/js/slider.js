document.addEventListener('DOMContentLoaded', function () {

  // splide slider
  let splide = new Splide( '.splide', {
    // type : 'fade',
    pagination: false,
    speed: 800,
    lazyLoad: 'nearby',
  } );

  function setTrackHeight(index) {
    const track = splide.root.querySelector('.splide__track');
    const slide = splide.Components.Slides.getAt(index);
    // slide.slide (the <li>) is a flex item stretched to the track's current
    // height, so its own offsetHeight is useless for measuring content size.
    const content = slide && slide.slide.querySelector('.row');
    if (track && content) {
      track.style.height = content.offsetHeight + 'px';
    }
  }

  splide.on( 'mounted', function () {
    const slidesCount = splide.Components.Slides.getLength();
    document.querySelector('#splide-all-count').textContent = slidesCount;
    setTrackHeight(splide.index);
  } );

  splide.mount();

  splide.on( 'move', function (newIndex) {
    document.querySelector('#splide-current-index').textContent = newIndex + 1;
    setTrackHeight(newIndex);
  } );

  // Splide clears any inline track height it doesn't manage itself whenever
  // it recalculates layout (e.g. once all images finish loading, or on
  // window resize), so re-apply ours every time that happens too.
  splide.on( 'resized', function () {
    setTrackHeight(splide.index);
  } );

});