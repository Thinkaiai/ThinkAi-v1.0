

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

 

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToogleButton.classList.toggle('bi-list');
    mobileNavToogleButton.classList.toggle('bi-x');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Hero Slider
   */
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 700,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

   /**
   * blogs slider
   */
  //  new Swiper('.blogsSec-slider', {
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
  //       spaceBetween: 20
  //     },

  //     1200: {
  //       slidesPerView: 3,
  //       spaceBetween: 20
  //     }
  //   }
  // });

  

  

  /**
   * Open and close the search form.
   */
  const searchOpen = document.querySelector('.js-search-open');
  const searchClose = document.querySelector('.js-search-close');
  const searchWrap = document.querySelector(".js-search-form-wrap");

  searchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.add("active");
  });

  searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.remove("active");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });


  // JavaScript code for filtering posts by category

// Function to show posts based on the selected category
function filterPosts(category) {
  const posts = document.querySelectorAll('#blogs #containers #start #article ');
  
  posts.forEach(post => {
    if (category === 'all' || post.textContent.includes(category)) {
      post.closest('article').style.display = 'block';
    } else {
      post.closest('article').style.display = 'none';
    }
  });
}

// Event listener for category selection
const categoryFilter = document.getElementById('category-filter'); // Assuming you have a select element with id 'category-filter'
categoryFilter.addEventListener('change', function() {
  const selectedCategory = categoryFilter.value;
  filterPosts(selectedCategory);
});

// Initial filter to show all posts
filterPosts('all');




 






  

});
//  contact form 
var btn =document.getElementById('btn');

btn.addEventListener('click',function(e){
  e.preventDefault()
  
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var body = 'name: '+name +'<br/> email: ' + email +'<br/> subject:'
  +subject + '<br/> message: '+message;


  Email.send({
    SecureToken : "21ce13da-80bc-4f1a-babe-71466ff61a82",
    To : 'ajakumarsaw0173@gmail.com',
    From : "ajaykumar18447@gmail.com",
    Subject : "contact message",
    Body : body
}).then(
  message => alert(message)
);
})

// end of contact form

//==================== dark mode========================

    var icon =document.getElementById("icon");

    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");

      if(document.body.classList.contains("dark-theme")){
        icon.src = "/assets/img/indeximg/sun.png";
      }else{
        icon.src = "/assets/img/indeximg/moon.png";
      }
    }

    // ================image change================================
   
    document.addEventListener('DOMContentLoaded', function() {
      var img = document.getElementById('img1');
      var originalSrc = img.src;
      var hoverSrc = img.getAttribute('data-hover-src');
  
      img.addEventListener('mouseover', function() {
          img.src = hoverSrc;
      });
  
      img.addEventListener('mouseout', function() {
          img.src = originalSrc;
      });
  });

    document.addEventListener('DOMContentLoaded', function() {
      var img = document.getElementById('img2');
      var originalSrc = img.src;
      var hoverSrc = img.getAttribute('data-hover-src');
  
      img.addEventListener('mouseover', function() {
          img.src = hoverSrc;
      });
  
      img.addEventListener('mouseout', function() {
          img.src = originalSrc;
      });
  });
    document.addEventListener('DOMContentLoaded', function() {
      var img = document.getElementById('img3');
      var originalSrc = img.src;
      var hoverSrc = img.getAttribute('data-hover-src');
  
      img.addEventListener('mouseover', function() {
          img.src = hoverSrc;
      });
  
      img.addEventListener('mouseout', function() {
          img.src = originalSrc;
      });
  });
    document.addEventListener('DOMContentLoaded', function() {
      var img = document.getElementById('img4');
      var originalSrc = img.src;
      var hoverSrc = img.getAttribute('data-hover-src');
  
      img.addEventListener('mouseover', function() {
          img.src = hoverSrc;
      });
  
      img.addEventListener('mouseout', function() {
          img.src = originalSrc;
      });
  });







 


