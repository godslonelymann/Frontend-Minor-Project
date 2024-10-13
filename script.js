

const scroll = new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth: true
})


function Loading(){
    var t1 = gsap.timeline()

t1.to("#overlay-blue1",{
    top:"-100%",
    delay:0.2,
    duration:0.5,
    ease:"expo.out"
})
t1.from("#overlay-blue2",{
    top:"100%",
    delay:0.2,
    duration:0.5,
    ease:"expo.out"
}, "color-change")
t1.to("#loader h1", {
    color:"black",
    delay:0.3
}, "color-change")
t1.to("#loader h1 span", {
    color:"black",
    delay:0.3
}, "color-change")
t1.to("#loader",{
    opacity:0
})
 t1.to("#loader",{
      display:"none"
 })
}

Loading()



var Elem = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
var footer = document.querySelector("#footer h1")

Elem.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var bgimg = e.getAttribute("data-img")
       page2.style.backgroundImage = `url(${bgimg})`
    })

    e.addEventListener("mouseleave", function(){
        page2.style.backgroundImage = null
    })
})


footer.addEventListener("click", function(){
    scroll.scrollTo(0);
})
