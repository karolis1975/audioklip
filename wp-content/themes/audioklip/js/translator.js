const talk = document.querySelectorAll(".talk");
const talk_right = document.querySelectorAll(".talk_right");

talk.forEach(el => {
  el.addEventListener("animationend", animation);
});
/*setTimeout(timeoutas, 2000);
function timeoutas() {
  talk_right.forEach(rht => {
    rht.style.animation = "fade 1s 0.5s linear";
  });
}*/
function animation(e) {
  if (e.target.getAttribute("id") === "talk1") {
    e.target.style.display = "none";
    document.querySelector("#talk3").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk2") {
    e.target.style.display = "none";
    document.querySelector("#talk4").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk3") {
    e.target.style.display = "none";
    document.querySelector("#talk5").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk4") {
    e.target.style.display = "none";
    document.querySelector("#talk6").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk5") {
    e.target.style.display = "none";
    document.querySelector("#talk7").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk6") {
    e.target.style.display = "none";
    document.querySelector("#talk8").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk7") {
    e.target.style.display = "none";
    document.querySelector("#talk9").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk8") {
    e.target.style.display = "none";
    document.querySelector("#talk10").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk9") {
    e.target.style.display = "none";
    document.querySelector("#talk11").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk10") {
    e.target.style.display = "none";
    document.querySelector("#talk12").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk11") {
    e.target.style.display = "none";
    document.querySelector("#talk13").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk12") {
    e.target.style.display = "none";
    document.querySelector("#talk14").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk13") {
    e.target.style.display = "none";
    document.querySelector("#talk15").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk14") {
    e.target.style.display = "none";
    document.querySelector("#talk16").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk15") {
    e.target.style.display = "none";
    document.querySelector("#talk17").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk16") {
    e.target.style.display = "none";
    document.querySelector("#talk18").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk17") {
    e.target.style.display = "none";
    document.querySelector("#talk19").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk18") {
    e.target.style.display = "none";
    document.querySelector("#talk20").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk19") {
    e.target.style.display = "none";
    document.querySelector("#talk1").style.display = "inline-block";
  } else if (e.target.getAttribute("id") === "talk20") {
    e.target.style.display = "none";
    document.querySelector("#talk2").style.display = "inline-block";
  }
}
