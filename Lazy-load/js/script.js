$(document).ready(() => {
  $(document).on('scroll', () => {
    var image = $(".lazy-img img");
    url = image.data("url");
    image.attr("src", url);

    if (isOnScreen($(".lazy-img"))) {
      $("article").css("background-color", "red");
    } else {
      $("article").css("background-color", "");
    }
  })
})

function isOnScreen(element) {
  let win = $(window);

  let screenTop = win.scrollTop();
  let screenBottom = screenTop + win.height();

  let elementTop = element.offset().top;
  let elementBottom = elementTop + element.height();

  return elementBottom > screenTop && elementTop < screenBottom;
}
