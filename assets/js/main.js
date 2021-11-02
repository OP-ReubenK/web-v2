document.querySelector(".cart").addEventListener("click", (event) => {
    document.querySelector(".cartPopup").classList.toggle("open");
})

document.querySelector(".cartClose").addEventListener("click", (event) => {
    document.querySelector(".cartPopup").classList.toggle("open");
})

document.querySelector(".menu").addEventListener("click", (event) => {
    document.querySelector(".menuPopup").classList.toggle("open");
})

document.querySelector(".menuClose").addEventListener("click", (event) => {
    document.querySelector(".menuPopup").classList.toggle("open");
})

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.querySelector('#mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});
