var buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var offset = button.classList.contains("next") ? 1 : -1;
    var slides = document.querySelectorAll("li");

    var activeSlide = document.querySelector("[data-active]");
    var newIndex = Array.from(slides).indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }

    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
