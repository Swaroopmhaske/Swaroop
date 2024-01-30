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



// function loaderAnimation() {
//     var loader = document.querySelector("#loader")
//     setTimeout(function() {
//         loader.style.top = "-100%"
//     }, 4200)
// }


document.querySelector("#page5 button")
    .addEventListener("mouseover", function() {
        gsap.to("#collage video", {
            opacity: 1,
            duration: 1,
            ease: Power4.easeInOut
        });
    });
document.querySelector("#page5 button")
    .addEventListener("mouseleave", function() {
        gsap.to("#collage video", {
            opacity: 0,
            duration: 1,
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
document.querySelector(".yes")
    .addEventListener("mouseleave", function() {
        gsap.to("#gif", {
            opacity: 0,

        });
    });

document.querySelector(".yes")
    .addEventListener("click", function() {
        gsap.to("#gif", {
            opacity: 1,

        });

    });
document.querySelector(".yes")
    .addEventListener("mouseover", function() {
        gsap.to("#gif2", {
            opacity: 0,

        });

    });
document.querySelector("#no")
    .addEventListener("mouseover", function() {
        gsap.to("#gif2", {
            opacity: 1,

        });
    });
document.querySelector("#no")
    .addEventListener("mouseleave", function() {
        gsap.to("#gif2", {
            opacity: 0,
            duration: 2.5,

        });
    });
document.getElementById('no')
    .addEventListener('mousemove', function(e) {
        var x = Math.random() * (500) - 30; // Random value between -300 and 200
        var y = Math.random() * window.innerHeight;

        this.style.left = x + 'px';
        this.style.top = y + 'px';
    });


document.querySelector("#How img")
    .addEventListener("mouseover", function() {
        gsap.to("#cha", {
            opacity: 1,

        });
    });
document.querySelector("#How img")
    .addEventListener("mouseleave", function() {
        gsap.to("#cha", {
            opacity: 0,

        });
    });
document.querySelector("#msg img")
    .addEventListener("mouseover", function() {
        gsap.to("#cha3", {
            opacity: 1,


        });
    });
document.querySelector("#msg img")
    .addEventListener("mouseleave", function() {
        gsap.to("#cha3", {
            opacity: 0,

        });
    });
document.querySelector("#genreal img")
    .addEventListener("mouseover", function() {
        gsap.to("#cha2", {
            opacity: 1,


        });
    });
document.querySelector("#genreal img")
    .addEventListener("mouseleave", function() {
        gsap.to("#cha2", {
            opacity: 0,

        });
    });

function changeBackground(imageUrl, targetElementId) {
    var targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        targetElement.style.backgroundImage = "url('" + imageUrl + "')";
        targetElement.style.backgroundSize = 'cover'; // Cover the entire targetElement
        targetElement.style.backgroundRepeat = 'no-repeat'; // Do not repeat the image
        targetElement.style.backgroundPosition = 'center'
    }
}
// document.getElementById('no').addEventListener('mousemove', function(e) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     this.style.left = x + 'px';
//     this.style.top = y + 'px';

// });


window.onload = function() {
    gsap.utils.toArray(".last").forEach(function(elem) {
        ScrollTrigger.create({
            trigger: elem,
            scroller: "#page9",
            start: "top 80%",
            end: "bottom 20%",

            onEnter: function() {
                gsap.fromTo(
                    elem, { y: 100, autoAlpha: 0 }, {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeave: function() {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function() {
                gsap.fromTo(
                    elem, { y: -100, autoAlpha: 0 }, {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: function() {
                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
    });
};
// menuAnimation()
loaderAnimation()