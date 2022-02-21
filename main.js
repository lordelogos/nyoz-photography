// remove page preloader
var loader = document.querySelector('#preloader');

window.addEventListener('load', () => {
    loader.style.display = "none";
    hero.paused(false)
})


gsap.registerPlugin(ScrollTrigger);

let hero = gsap.timeline({paused: true},{ defaults: {ease: "power4.inOut", duration: 2}, scrollTrigger: {trigger: 'header', toggleActions: 'play none none none' }})

hero.from('.float-text-right', {opacity: 0, y: '100px', duration: 2})
.from('.float-text-left h1', {opacity: 0, y: '100px'}, "-=2")
.from('.float-text-left p', {opacity: 0, y: '100px', duration: 2}, "-=1.8");

let seg1 = gsap.timeline({ defaults: {ease: "power4.inOut", duration: 2}, scrollTrigger: {trigger: '.segment-1', toggleActions: 'play none none none' }})

seg1.from('.segment-1 .image', {opacity: 0, x: "-150px"})
.from('.segment-1 .text', {opacity: 0, x: "150px"}, "-=2")

let seg2 = gsap.timeline({ defaults: {ease: "power4.inOut", duration: 2}, scrollTrigger: {trigger: '.segment-2', toggleActions: 'play none none none' }})

seg2.from('.segment-2 .text', {opacity: 0, x: '-150px'})

let stack = gsap.timeline({ defaults: {ease: "power4.inOut", duration: 2}, scrollTrigger: {trigger: '.segment-2', toggleActions: 'play pause resume reset'}})

stack.to('#stack1', {keyframes: [ 
    {x:-20, duration: .5, delay: 2},
    {x: "100vw", duration: 1.5 },
  ]})
  .to('#stack2', {keyframes: [ 
    {x:-20, duration: .5},
    {x: "100vw", duration: 1.5},
  ]})
  .to('#stack3', {keyframes: [ 
    {x:-20, duration: .5},
    {x: "100vw", duration: 1.5},
  ]})
  .to('#stack4', {keyframes: [ 
    {x:-20, duration: .5},
    {x: "100vw", duration: 1.5},
  ]})

  let foot = gsap.timeline({ defaults: {ease: "power4.inOut", duration: 2}, scrollTrigger: {trigger: '.footer', toggleActions: 'play none none none' }});

  foot.from('.footer-outline, .footer-review', {transform: 'scale(0)'})
  .from('.footer-group', {opacity: 0, y: 100}, "-=1.6")