let tl=gsap.timeline();


function time()
{
    let a=0;
    let ele=document.querySelector("#loader h1");
    setInterval(function(){
     a=a+Math.floor((Math.random())*15);
        if(a<100){
           
           ele.innerHTML=a+" %";
            
        }
        else{
        a=100;
           ele.innerHTML=a+" %";
        }
  
    },150)
}
tl.to("#loader h1",{
    delay:0.5,
    duration:1.5,
    onStart:time(),
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5,
    
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"50", 
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})