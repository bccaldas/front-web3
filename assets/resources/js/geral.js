$(document).ready(function(){
  $('.highlightsList').owlCarousel({
    items:3,
		dots:false,
		loop:true,
		lazyLoad: true,
		mouseDrag:true,
		touchDrag:true,
		autoplay:false,
		autoplayTimeout:10000,
		autoplayHoverPause:true,
		smartSpeed: 450,
  })

  $('.highlightsList').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
})
