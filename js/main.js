var is_dark_mode = "light";
function dark_mode() {
  let list = ["--header-col", "--header-bgcol", "--card-bgcol",
    "--innercode-bgcol", "--code-bgcol", "--font-col",
    "--title-col", "--background-img", "--dark-mode-bgcol", "--footer-col", "--background-col", "innercode-col"];
  list.forEach((e) => {
    let a = getComputedStyle(document.documentElement).getPropertyValue(e);
    let b = getComputedStyle(document.documentElement).getPropertyValue(e + "-rev");
    document.documentElement.style.setProperty(e, b);
    document.documentElement.style.setProperty(e + "-rev", a);
  });
  is_dark_mode = (is_dark_mode == "light" ? "dark" : "light");
  localStorage.setItem("dark-mode", is_dark_mode);
  if (is_dark_mode == "dark") {
    $(".ui.dropdown").addClass('inverted')
    $(".ui.dropdown>.menu").addClass('inverted')
  }
  else {
    $(".ui.dropdown").removeClass('inverted')
    $(".ui.dropdown>.menu").removeClass('inverted')
  }
}

let x = localStorage.getItem("dark-mode");
if (!x) x = "light", localStorage.setItem("dark-mode", x);
if (x == "dark") dark_mode();

$(document)
.ready(function() {
  $('.ui.accordion').accordion()
  $('.ui.dropdown').dropdown({on: 'click', action: 'nothing'})
  if (is_dark_mode == "dark") {
    $(".ui.dropdown").addClass('inverted')
    $(".ui.dropdown>.menu").addClass('inverted')
  }
  else {
    $(".ui.dropdown").removeClass('inverted')
    $(".ui.dropdown>.menu").removeClass('inverted')
  }
})

window.addEventListener('hexo-blog-decrypt', () => {
  $(document)
  .ready(function() {
    $('.ui.accordion').accordion()
    $('.ui.dropdown').dropdown({on: 'click', action: 'nothing'})
  })
})