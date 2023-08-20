AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

   "use strict";

   $(window).stellar({
   responsive: true,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll'
 });
  
 


   var fullHeight = function() {

       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
           $('.js-fullheight').css('height', $(window).height());
       });

   };
   fullHeight();

   // loader
   var loader = function() {
       setTimeout(function() { 
           if($('#ftco-loader').length > 0) {
               $('#ftco-loader').removeClass('show');
           }
       }, 1);
   };
   loader();

   // Scrollax
  $.Scrollax();



  // Burger Menu
   var burgerMenu = function() {

       $('body').on('click', '.js-fh5co-nav-toggle', function(event){

           event.preventDefault();

           if ( $('#ftco-nav').is(':visible') ) {
               $(this).removeClass('active');
           } else {
               $(this).addClass('active');	
           }

           
           
       });

   };
   burgerMenu();


   var onePageClick = function() {


       $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
       event.preventDefault();

       var href = $.attr(this, 'href');

       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top - 70
       }, 500, function() {
           // window.location.hash = href;
       });
       });

   };

   onePageClick();
   

   var carousel = function() {
       $('.home-slider').owlCarousel({
       loop:true,
       autoplay: true,
       margin:0,
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       nav:false,
       autoplayHoverPause: false,
       items: 1,
       navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
       responsive:{
         0:{
           items:1
         },
         600:{
           items:1
         },
         1000:{
           items:1
         }
       }
       });
   };
   carousel();

   $('nav .dropdown').hover(function(){
       var $this = $(this);
       // 	 timer;
       // clearTimeout(timer);
       $this.addClass('show');
       $this.find('> a').attr('aria-expanded', true);
       // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
       $this.find('.dropdown-menu').addClass('show');
   }, function(){
       var $this = $(this);
           // timer;
       // timer = setTimeout(function(){
           $this.removeClass('show');
           $this.find('> a').attr('aria-expanded', false);
           // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
           $this.find('.dropdown-menu').removeClass('show');
       // }, 100);
   });


   $('#dropdown04').on('show.bs.dropdown', function () {
     console.log('show');
   });

   // scroll
   var scrollWindow = function() {
       $(window).scroll(function(){
           var $w = $(this),
                   st = $w.scrollTop(),
                   navbar = $('.ftco_navbar'),
                   sd = $('.js-scroll-wrap');

           if (st > 150) {
               if ( !navbar.hasClass('scrolled') ) {
                   navbar.addClass('scrolled');	
               }
           } 
           if (st < 150) {
               if ( navbar.hasClass('scrolled') ) {
                   navbar.removeClass('scrolled sleep');
               }
           } 
           if ( st > 350 ) {
               if ( !navbar.hasClass('awake') ) {
                   navbar.addClass('awake');	
               }
               
               if(sd.length > 0) {
                   sd.addClass('sleep');
               }
           }
           if ( st < 350 ) {
               if ( navbar.hasClass('awake') ) {
                   navbar.removeClass('awake');
                   navbar.addClass('sleep');
               }
               if(sd.length > 0) {
                   sd.removeClass('sleep');
               }
           }
       });
   };
   scrollWindow();

   

   var counter = function() {
       
       $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

           if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

               var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
               $('.number').each(function(){
                   var $this = $(this),
                       num = $this.data('number');
                       console.log(num);
                   $this.animateNumber(
                     {
                       number: num,
                       numberStep: comma_separator_number_step
                     }, 7000
                   );
               });
               
           }

       } , { offset: '95%' } );

   }
   counter();


   var contentWayPoint = function() {
       var i = 0;
       $('.ftco-animate').waypoint( function( direction ) {

           if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
               
               i++;

               $(this.element).addClass('item-animate');
               setTimeout(function(){

                   $('body .ftco-animate.item-animate').each(function(k){
                       var el = $(this);
                       setTimeout( function () {
                           var effect = el.data('animate-effect');
                           if ( effect === 'fadeIn') {
                               el.addClass('fadeIn ftco-animated');
                           } else if ( effect === 'fadeInLeft') {
                               el.addClass('fadeInLeft ftco-animated');
                           } else if ( effect === 'fadeInRight') {
                               el.addClass('fadeInRight ftco-animated');
                           } else {
                               el.addClass('fadeInUp ftco-animated');
                           }
                           el.removeClass('item-animate');
                       },  k * 50, 'easeInOutExpo' );
                   });
                   
               }, 100);
               
           }

       } , { offset: '95%' } );
   };
   contentWayPoint();

   // magnific popup
   $('.image-popup').magnificPopup({
   type: 'image',
   closeOnContentClick: true,
   closeBtnInside: false,
   fixedContentPos: true,
   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
     verticalFit: true
   },
   zoom: {
     enabled: true,
     duration: 300 // don't foget to change the duration also in CSS
   }
 });

 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });


 var goHere = function() {

       $('.mouse-icon').on('click', function(event){
           
           event.preventDefault();

           $('html,body').animate({
               scrollTop: $('.goto-here').offset().top
           }, 500, 'easeInOutExpo');
           
           return false;
       });
   };
   goHere();

   // $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
 this.toRotate = toRotate;
 this.el = el;
 this.loopNum = 0;
 this.period = parseInt(period, 10) || 2000;
 this.txt = '';
 this.tick();
 this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
 var i = this.loopNum % this.toRotate.length;
 var fullTxt = this.toRotate[i];

 if (this.isDeleting) {
   this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
   this.txt = fullTxt.substring(0, this.txt.length + 1);
 }

 this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

 var that = this;
 var delta = 300 - Math.random() * 100;

 if (this.isDeleting) { delta /= 2; }

 if (!this.isDeleting && this.txt === fullTxt) {
   delta = this.period;
   this.isDeleting = true;
 } else if (this.isDeleting && this.txt === '') {
   this.isDeleting = false;
   this.loopNum++;
   delta = 500;
 }

 setTimeout(function() {
   that.tick();
 }, delta);
};


// Portfolio

// init Isotope




window.onload = function() {
 var elements = document.getElementsByClassName('txt-rotate');
 for (var i=0; i<elements.length; i++) {
   var toRotate = elements[i].getAttribute('data-rotate');
   var period = elements[i].getAttribute('data-period');
   if (toRotate) {
     new TxtRotate(elements[i], JSON.parse(toRotate), period);
   }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.type = "text/css";
 css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
 document.body.appendChild(css);
};


})(jQuery);


// window.addEventListener('load', () => {
//    let portfolioContainer = select('.portfolio-container');
//    if (portfolioContainer) {
//      let portfolioIsotope = new Isotope(portfolioContainer, {
//        itemSelector: '.portfolio-item',
//        layoutMode: 'fitRows'
//      });

//      let portfolioFilters = select('#portfolio-flters li', true);

//      on('click', '#portfolio-flters li', function(e) {
//        e.preventDefault();
//        portfolioFilters.forEach(function(el) {
//          el.classList.remove('filter-active');
//        });
//        this.classList.add('filter-active');

//        portfolioIsotope.arrange({
//          filter: this.getAttribute('data-filter')
//        });
//        aos_init();
//      }, true);
//    }

//  });

 /**
  * Initiate portfolio lightbox 
  */
//  const portfolioLightbox = GLightbox({
//    selector: '.portfokio-lightbox'
//  });

//  /**
//   * Portfolio details slider
//   */
//  new Swiper('.portfolio-details-slider', {
//    speed: 400,
//    autoplay: {
//      delay: 5000,
//      disableOnInteraction: false
//    },
//    pagination: {
//      el: '.swiper-pagination',
//      type: 'bullets',
//      clickable: true
//    }
//  });





// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
 //variable that will hold the href attr of the links in the menu
 var sections = [];
 //variable that stores the id of the section
 var id = false;
 //variable for the selection of the anchors in the navbar
 var $navbara = $('#navi a');
 
 $navbara.click(function(e){
   //prevent the page from refreshing
   e.preventDefault();
   //set the top offset animation and speed
   $('html, body').animate({
     scrollTop: $($(this).attr('href')).offset().top - 180
},500);
   hash($(this).attr('href'));
 });
 
 
 
 //select all the anchors in the navbar one after another
 $navbara.each(function(){
  // and adds them in the sections variable
   sections.push($($(this).attr('href')));
   
 })
 $(window).scroll(function(e){
   // scrollTop retains the value of the scroll top with the reference at the middle of the page
   var scrollTop = $(this).scrollTop() + ($(window).height()/2);
   //cycle through the values in sections array
   for (var i in sections) {
     var section = sections[i];
     //if scrollTop variable is bigger than the top offset of a section in the sections array then 
     if (scrollTop > section.offset().top){
       var scrolled_id = section.attr('id');
     }
   }
   if (scrolled_id !== id) {
     id = scrolled_id;
     $($navbara).removeClass('current');
     $('#navi a[href="#' + id + '"]').addClass('current'); 
   }
 })
})(jQuery);

hash = function(h){
 if (history.pushState){
   history.pushState(null, null, h);
 }else{
   location.hash = h;
 }
}


$(function() {

 $(".progress").each(function() {

   var value = $(this).attr('data-value');
   var left = $(this).find('.progress-left .progress-bar');
   var right = $(this).find('.progress-right .progress-bar');

   if (value > 0) {
     if (value <= 50) {
       right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
     } else {
       right.css('transform', 'rotate(180deg)')
       left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
     }
   }

 })

 function percentageToDegrees(percentage) {

   return percentage / 100 * 360

 }
 

});

/**
* Template Name: FlexStart - v1.4.0
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
	"use strict";
  
	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
	  el = el.trim()
	  if (all) {
		return [...document.querySelectorAll(el)]
	  } else {
		return document.querySelector(el)
	  }
	}
  
	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
	  if (all) {
		select(el, all).forEach(e => e.addEventListener(type, listener))
	  } else {
		select(el, all).addEventListener(type, listener)
	  }
	}
  
	/**
	 * Easy on scroll event listener 
	 */
	const onscroll = (el, listener) => {
	  el.addEventListener('scroll', listener)
	}
  
	/**
	 * Navbar links active state on scroll
	 */
	// let navbarlinks = select('#navbar .scrollto', true)
	// const navbarlinksActive = () => {
	//   let position = window.scrollY + 200
	//   navbarlinks.forEach(navbarlink => {
	//     if (!navbarlink.hash) return
	//     let section = select(navbarlink.hash)
	//     if (!section) return
	//     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
	//       navbarlink.classList.add('active')
	//     } else {
	//       navbarlink.classList.remove('active')
	//     }
	//   })
	// }
	// window.addEventListener('load', navbarlinksActive)
	// onscroll(document, navbarlinksActive)
  
	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
	  let header = select('#header')
	  let offset = header.offsetHeight
  
	  if (!header.classList.contains('header-scrolled')) {
		offset -= 10
	  }
  
	  let elementPos = select(el).offsetTop
	  window.scrollTo({
		top: elementPos - offset,
		behavior: 'smooth'
	  })
	}
  
	/**
	 * Toggle .header-scrolled class to #header when page is scrolled
	 */
	// let selectHeader = select('#header')
	// if (selectHeader) {
	//   const headerScrolled = () => {
	//     if (window.scrollY > 100) {
	//       selectHeader.classList.add('header-scrolled')
	//     } else {
	//       selectHeader.classList.remove('header-scrolled')
	//     }
	//   }
	//   window.addEventListener('load', headerScrolled)
	//   onscroll(document, headerScrolled)
	// }
  
	/**
	 * Back to top button
	 */
	// let backtotop = select('.back-to-top')
	// if (backtotop) {
	//   const toggleBacktotop = () => {
	//     if (window.scrollY > 100) {
	//       backtotop.classList.add('active')
	//     } else {
	//       backtotop.classList.remove('active')
	//     }
	//   }
	//   window.addEventListener('load', toggleBacktotop)
	//   onscroll(document, toggleBacktotop)
	// }
  
	/**
	 * Mobile nav toggle
	 */
	// on('click', '.mobile-nav-toggle', function(e) {
	//   select('#navbar').classList.toggle('navbar-mobile')
	//   this.classList.toggle('bi-list')
	//   this.classList.toggle('bi-x')
	// })
  
	/**
	 * Mobile nav dropdowns activate
	 */
	// on('click', '.navbar .dropdown > a', function(e) {
	//   if (select('#navbar').classList.contains('navbar-mobile')) {
	//     e.preventDefault()
	//     this.nextElementSibling.classList.toggle('dropdown-active')
	//   }
	// }, true)
  
	/**
	 * Scrool with ofset on links with a class name .scrollto
	 */
	// on('click', '.scrollto', function(e) {
	//   if (select(this.hash)) {
	//     e.preventDefault()
  
	//     let navbar = select('#navbar')
	//     if (navbar.classList.contains('navbar-mobile')) {
	//       navbar.classList.remove('navbar-mobile')
	//       let navbarToggle = select('.mobile-nav-toggle')
	//       navbarToggle.classList.toggle('bi-list')
	//       navbarToggle.classList.toggle('bi-x')
	//     }
	//     scrollto(this.hash)
	//   }
	// }, true)
  
	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	// window.addEventListener('load', () => {
	//   if (window.location.hash) {
	//     if (select(window.location.hash)) {
	//       scrollto(window.location.hash)
	//     }
	//   }
	// });
  
	/**
	 * Clients Slider
	 */
	// new Swiper('.clients-slider', {
	//   speed: 400,
	//   loop: true,
	//   autoplay: {
	//     delay: 5000,
	//     disableOnInteraction: false
	//   },
	//   slidesPerView: 'auto',
	//   pagination: {
	//     el: '.swiper-pagination',
	//     type: 'bullets',
	//     clickable: true
	//   },
	//   breakpoints: {
	//     320: {
	//       slidesPerView: 2,
	//       spaceBetween: 40
	//     },
	//     480: {
	//       slidesPerView: 3,
	//       spaceBetween: 60
	//     },
	//     640: {
	//       slidesPerView: 4,
	//       spaceBetween: 80
	//     },
	//     992: {
	//       slidesPerView: 6,
	//       spaceBetween: 120
	//     }
	//   }
	// });
  
	/**
	 * Porfolio isotope and filter
	 */
	window.addEventListener('load', () => {
	  let portfolioContainer = select('.portfolio-container');
	  if (portfolioContainer) {
		let portfolioIsotope = new Isotope(portfolioContainer, {
		  itemSelector: '.portfolio-item',
		  layoutMode: 'fitRows'
		});
  
		let portfolioFilters = select('#portfolio-flters li', true);
  
		on('click', '#portfolio-flters li', function(e) {
		  e.preventDefault();
		  portfolioFilters.forEach(function(el) {
			el.classList.remove('filter-active');
		  });
		  this.classList.add('filter-active');
  
		  portfolioIsotope.arrange({
			filter: this.getAttribute('data-filter')
		  });
		  aos_init();
		}, true);
	  }
  
	});
  
	/**
	 * Initiate portfolio lightbox 
	 */
	const portfolioLightbox = GLightbox({
	  selector: '.portfokio-lightbox'
	});
  
	/**
	 * Portfolio details slider
	 */
	new Swiper('.portfolio-details-slider', {
	  speed: 400,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false
	  },
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	  }
	});
  
	/**
	 * Testimonials slider
	 */
	// new Swiper('.testimonials-slider', {
	//   speed: 600,
	//   loop: true,
	//   autoplay: {
	//     delay: 5000,
	//     disableOnInteraction: false
	//   },
	//   slidesPerView: 'auto',
	//   pagination: {
	//     el: '.swiper-pagination',
	//     type: 'bullets',
	//     clickable: true
	//   },
	//   breakpoints: {
	//     320: {
	//       slidesPerView: 1,
	//       spaceBetween: 40
	//     },
  
	//     1200: {
	//       slidesPerView: 3,
	//     }
	//   }
	// });
  
	/**
	 * Animation on scroll
	 */
	function aos_init() {
	  AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false
	  });
	}
	window.addEventListener('load', () => {
	  aos_init();
	});
  
  })();

