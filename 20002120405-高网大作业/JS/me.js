var ad = document.getElementById("ad");
var timer;
var gao = ad.offsetHeight;
console.log(gao);
window.setTimeout(function () {
    timer = setInterval(dh, 3);
}, 1000);

function dh() {
    if (gao >= 0)
        ad.style.height = gao-- + "px";
    else
        clearInterval(timer);
}