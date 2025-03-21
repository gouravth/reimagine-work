
function swiperanimation(){

    gsap.from(".compare-section-comments-child2", {
        scrollTrigger: {
    
            trigger: "#compare-section",
             
            start: "top 10%",
             
            // markers:true,
    
             
            
       duration:2,
            
             
        },
         scale:0,
         ease:Expo.ease,
    
        // strokeDashoffset:0,
        
    })
    gsap.from("#people-says", {
        scrollTrigger: {
    
            trigger: "#compare-section",
             
            start: "top 05%",
             
            // markers:true,
    
             
            
       duration:1.5,
       delay:-2,
            
             
        },
         scale:0,
         opacity:0,
         ease:Expo.ease,
    
        // strokeDashoffset:0,
        
    })


    
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".ri-arrow-right-s-line",
      prevEl: ".ri-arrow-left-s-line",
    },
  });
 }
 swiperanimation()

 gsap.from(".text1 h1",{
  opacity:0,
  x:-100,
  duration:1,
  delay:0.5,
  stagger:0.5

})
gsap.from(".text2 h1",{
  opacity:0,
  x:-100,
  duration:1.2,
  delay:1,
  stagger:0.5

})