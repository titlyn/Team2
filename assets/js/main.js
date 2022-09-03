const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
    button.onclick = function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 600);
    }
})

var typed = new Typed(".input", {
    strings: ["and find your"],
    typeSpeed: 80,
    backSpeed: 80,
    loop:true
})