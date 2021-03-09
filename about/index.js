var slide_number = 1

setInterval(myMethod, 500000);

function myMethod() {
    slide_number = slide_number + 1
    if (slide_number >= 5) {
        slide_number = 1
    }
    var slide = "slide-" + slide_number + "-radio"
    console.log(slide);
    document.getElementById(slide).checked = true
}