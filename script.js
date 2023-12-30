const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconanimation()
{

    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function()
{
    // alert("Rook Jaa Bhai")
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave",function()
{
    gsap.to(playbtn,
        {
            scale:0,
            opacity:0
        })
})


videocon.addEventListener("mousemove",function(dets)
{
    gsap.to(playbtn,
        {
            left:dets.x-50,
            top:dets.y-80

        })
})

}

videoconanimation()

function lodingAnimation()
{

    gsap.from("#page1 h1",
{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.4
}) 
}
   gsap.from("#page1 #video-container",
{
    scale:0.8,
    opacity:0,
    delay:1.8,
    duration:1.5,
    stagger:0.3
})


lodingAnimation()

document.addEventListener("mousemove",function(dets)
{
gsap.to("#cursor",
{
    left:dets.x,
    top:dets.y
})
}
)

// document.querySelector("#child1").addEventListener("mouseenter",function()
// {
//      gsap.to("#cursor",
//      {
//         transform:'translate(-50%,-50%)scale(1)'
//      })
// })


// document.querySelector("#child1").addEventListener("mouseleave",function()
// {
//      gsap.to("#cursor",
//      {
//         transform:'translate(-50%,-50%)scale(0)'
// })


var a = document.querySelectorAll(".child")
// console.log(a)
document.querySelectorAll(".child")
a.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function()
    {
        gsap.to("#cursor",
            {
                 transform:'translate(-50%,-50%)scale(1)'
              })
    }
    )
})

document.querySelectorAll(".child")
a.forEach(function(elem)
{
    elem.addEventListener("mouseleave",function()
    {
        gsap.to("#cursor",
            {
                 transform:'translate(-50%,-50%)scale(0)'
              })
    }
    )
})

