
function toogleActiveBtn(className) {
    if (document.querySelector(className))
        document.querySelectorAll(className).forEach(
            e => e.addEventListener('click', function () {
                this.classList.toggle('active')
            })
        )
}


export function castomScroll(el) {
    const block = document.querySelectorAll(el);
    if (block) block.forEach((e) => new SimpleBar(e));
}


export function bgAppend() {
    const newDiv = document.createElement("div");
    document.body.classList.add("_lock");
    newDiv.classList.add("openShow");
    document.querySelector('body').appendChild(newDiv);
}
export function bgRemove() {
    document.body.classList.remove("_lock");
    if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
}





export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

isWebp();


