(function () {

  function createButton() {
    var button = document.createElement("button");
    button.classList.add("backToTop", "hidden");
    document.body.appendChild(button);
    return button;
  }

  var button = createButton();
  function animateScroll() {
    if(document.body.scrollTop > 0) {
      window.scrollBy(0, -5);
      setTimeout(animateScroll, 1);
    }
  }

  button.addEventListener("click", function(e) {
    e.stopPropagation();
    animateScroll();
    }, false);

  window.addEventListener("scroll", function(e) {
    if(document.body.scrollTop >= 100) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  }, false);

    $('.photo').magnificPopup({
        type: 'image'
        // other options
    });
    
})();