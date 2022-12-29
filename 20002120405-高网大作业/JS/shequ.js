//DOM代码写在body的最后，或者onload函数里
var tab = document.querySelector(".tab");
var tt = tab.getElementsByClassName("tt")[0];
var span = tt.querySelectorAll("span");
var tc = tab.querySelectorAll(".tc");

// console.log(tab,tt,span,tc);

for (var i = 0; i < span.length; i++) {

    span[i].index = i;

    span[i].onmouseover = function () {
        for (var j = 0; j < span.length; j++) {
            span[j].classList.remove("cur");
            tc[j].style.display = "none";
        }

        this.classList.add("cur");
        tc[this.index].style.display = "block";
    }
}
