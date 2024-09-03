$(document).ready(function () {
    $('.toggle').click(function () {
        $('nav').slideToggle();
    });
})

function toTop() {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth",
        })
}
