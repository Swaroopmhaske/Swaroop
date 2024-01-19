const scroll = new LocomotiveScroll({
    el: document.querySelector('#Main'),
    smooth: true
});




function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function() {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function() {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function() {
        loader.style.top = "-100%"
    }, 4200)
}


document.querySelector("#page5 button")
    .addEventListener("mouseover", function() {
        gsap.to("#collage img", {
            opacity: 1,
            duration: 1.5,
            ease: Power4.easeInOut
        });
    });
document.querySelector("#page5 button")
    .addEventListener("mouseleave", function() {
        gsap.to("#collage img", {
            opacity: 0,
            duration: 1.5,
            ease: Power4.easeInOut
        });
    });
// gsap.to(
//     "#page5", {
//         backgroundColor: "#000",

//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page5",
//             scroller: "#page4",
//             scrub: 2,
//         }
//     })
// gsap.to("#page5", {
//     backgroundColor: "#000",
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page5",
//         start: "top top",
//         end: "bottom top",
//         scroller: "#page4",
//         scrub: 2,
//     }
// });
gsap.registerPlugin(scrollTrigger);
gsap.to("#page5", {
    backgroundColor: "#000",
    duration: 2,
    scrollTrigger: {
        trigger: "#page5",
        start: "top top",
        end: "bottom top",
        scroller: "#page4",
        scrub: true,
        onEnter: () => {
            console.log("Entered #page5");
        },
        onLeave: () => {
            console.log("Left #page5");
        },
        onEnterBack: () => {
            console.log("Entered #page5 from the back");
        },
        onLeaveBack: () => {
            console.log("Left #page5 going back");
        },
    }
});


swiperAnimation()
page4Animation()
    // menuAnimation()
loaderAnimation()