function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#Main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#Main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#Main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#Main").style.transform ? "transform" : "fixed"
    });






    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();


}

init()

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
document.querySelector("#botto")
    .addEventListener("mouseover", function() {
        gsap.to("#page5", {
            backgroundColor: "#fff",

        });
    });
document.querySelector("#page4")
    .addEventListener("mouseleave", function() {
        gsap.to("#page5", {
            backgroundColor: "#fff",

        });
    });
document.querySelector("#page6")
    .addEventListener("mouseleave", function() {
        gsap.to("#page5", {
            backgroundColor: "#fff",

        });
    });

document.querySelector("#page6")
    .addEventListener("mouseover", function() {
        gsap.to("#page5", {
            backgroundColor: "#EFEAE0",

        });
    });

// function changeOpacity(opacityValue) {
//     var image = document.querySelector('.reason1 img');
//     image.style.opacity = opacityValue;
// }
// function changeBackground(image) {
//     document.body.style.backgroundImage = "url('" + image + "')";
// }
// swiperAnimation()
function changeBackground(imageUrl, targetElementId) {
    var targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        targetElement.style.backgroundImage = "url('" + imageUrl + "')";
        targetElement.style.backgroundSize = 'cover'; // Cover the entire targetElement
    targetElement.style.backgroundRepeat = 'no-repeat'; // Do not repeat the image
    targetElement.style.backgroundPosition = 'center'
    }
}
document.getElementById('no').addEventListener('mousemove', function(e) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});


// menuAnimation()
loaderAnimation()