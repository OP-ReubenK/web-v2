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


mouseCircle = document.querySelector('#mouse-circle');

let links = document.querySelectorAll(".hover");

links.forEach(link =>{

    link.addEventListener("mouseover", event =>{

        mouseCircle.style.backdropFilter = "invert(100%)";

    })

})

links.forEach(link =>{

    link.addEventListener("mouseout", event =>{

        mouseCircle.style.backdropFilter = "invert(0%)";

    })

})


fetch('https://api.unsplash.com/search/photos?client_id=OrrzZqBn3r88laW2SdFxIes6Q8aAxa76qT__CdZuThE&query=venison')
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data);
});

