var goBack = document.querySelector('.goBack');
var body = document.querySelector('body');
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= body.offsetTop + 5) {
        goBack.style.display = 'block';
    } else {
        goBack.style.display = 'none';
    }
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})