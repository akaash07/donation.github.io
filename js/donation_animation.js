const heading= document.querySelector(".heading");
const description= document.querySelector(".description");
const payButton= document.querySelector(".payment");
const container= document.querySelector(".form");
const timeline= new TimelineMax({delay : 0.1});

window.onload = ()=>{
  if(window.innerWidth<600){
    timeline.fromTo(container, 0.3,{width:"0%", opacity:0}, {width:"80%" , opacity:1});
  }
  else {
    timeline.fromTo(container, 0.3,{width:"0%", opacity:0}, {width:"50%" , opacity:1});
  }
  timeline.fromTo(heading, 0.3, {y:-30, opacity:0}, {y:0, opacity:1});
  timeline.fromTo(description, 0.3, { opacity:0}, { opacity:1});
  timeline.fromTo(payButton, 0.5, {opacity:0}, { opacity:1});
}
