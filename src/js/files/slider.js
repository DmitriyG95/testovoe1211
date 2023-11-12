

let sliders = document.querySelectorAll("._swiper");
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains("swiper-bild")) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add("swiper-slide");
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement("div");
            slider_wrapper.classList.add("swiper-wrapper");
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = "";
            slider.appendChild(slider_wrapper);
            slider.classList.add("swiper-bild");
        }
    }
    sliders_bild_callback();
}
function sliders_bild_callback(params) { }


/*
if (document.querySelector('.swiper-offer')) {
    new Swiper(".swiper-offer", {
        slidesPerView: 1,
        slidesPerView: "auto",
        spaceBetween: 8,
        loop: true,
        loopAdditionalSlides: 10,
        navigation: {
            nextEl: ".swiper-offer .next",
            prevEl: ".swiper-offer .prev",
        },


        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                // autoplay: false,
            },
            1280: {
                // allowTouchMove: false,
                // autoplay: false,
            },
        }
    });
}
*/