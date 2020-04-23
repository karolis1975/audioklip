if (localStorage.getItem("x") == "yes") {
  setTimeout(function() {
    var hash = "#section1";

    if ($(hash).offset() != null) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
    localStorage.setItem("x", "no");
  }, 500);
}

$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      if ($(hash).offset() != null) {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      } else {
        localStorage.setItem("x", "yes");
        let linkas = window.location.pathname.split("/");
        console.log(linkas);
        if (linkas[1] == "en") window.location = "/en";
        else window.location = "/";
      }
      const html = document.getElementsByTagName("html")[0];
      const bodyBlack = document.querySelectorAll(".bodyBlack")[0];
      bodyBlack.style.display = "none";
      html.classList.remove("stopScroll");

      const menu = document.querySelectorAll(".mobileMenu")[0];
      const menuUl = menu.getElementsByTagName("ul")[0];
      if (
        window.matchMedia("(orientation: landscape)").matches &&
        window.innerWidth <= 860
      )
        menuUl.style.right = "-100%";
      else menuUl.style.right = "-250px";
    }
  });
});
