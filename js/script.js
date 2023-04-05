$(document).ready(function () {
  $("#profile__ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  const bars = document.querySelectorAll(".progress__bar");
  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
    // console.log(bar);
  });

  //counter

  // const counters = document.querySelectorAll(".counter");
  // console.log(counters);

  // function runounter() {
  //   counters.forEach((counter) => {
  //     counter.innerText = 0;

  //     let target = +counter.dataset.count;
  //     let steo = target / 1

  //     let countIt = function(){
  //       let displayedCount = + counter.innerText;
  //       if(displayedCount<target){
  //           counter.innerText = displayedCount + 100;
  //           setTimeout(countIt,1);
  //       }else{
  //           counter.innerText = target;
  //       }

  //     }
  //     countIt()
  //   });
  // }

  // runounter()

  // let countSection = document.querySelector('.counter__section');

  // const sectionObserver = new sectionObserver(function(entries){
  //   if(entries[0].isIntersecting){
  //       console.log('intersection...')
  //   }
  // })

  //Work section (img filter)

  var $wrapper = $(".portfolio__wrapper");

  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });
  let links = document.querySelectorAll(".tabs a");

  links.forEach((link) => {
    let selector = link.dataset.filter;


    link.addEventListener("click", function (e) {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  //Magnify

  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });

  //Slider

  $('.slider').slick({
      arrows:false,
      autoplay:true
  });
});
