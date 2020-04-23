const langBtns = document.querySelectorAll('input[name="lang"]');
const audios = document.querySelectorAll(".announcers")[0];
const audioTracks = audios.getElementsByTagName("audio");
showLT();
for (let i = 0; i < langBtns.length; i++) {
  langBtns[i].addEventListener("change", (e) => {
    $.ajax({
      type: "post",
      url: my_ajax_obj.ajax_url,
      data: {
        _ajax_nonce: my_ajax_obj.nonce,
        action: "showVoices",
        lang: e.target.value,
      },
      success: function (data) {
        audios.innerHTML = data;

        const kalba = document.querySelectorAll("." + e.target.value)[0];
        const moteris = kalba.querySelectorAll(".moteris")[0];
        const moterisAudio = moteris.getElementsByTagName("audio");
        const vyras = kalba.querySelectorAll(".vyras")[0];
        const vyrasAudio = vyras.getElementsByTagName("audio");

        if (moterisAudio.length < 1) {
          moteris.style.cssText = "display: none; width: initial";
          vyras.style.cssText = " width:100%";
          for (let z = 0; z < vyrasAudio.length; z++) {
            vyrasAudio[z].style.width = "100%";
          }
        } else if (vyrasAudio.length < 1) {
          vyras.style.cssText = "display: none; width: initial";
          moteris.style.cssText = " width:100%";
          for (let z = 0; z < moterisAudio.length; z++) {
            moterisAudio[z].style.width = "100%";
          }
        }

        if (gender != null) onGenderRadioChange((e = null), gender);

        resetAudioIfPlaying();
      },
    });
  });
}
const radiosGender = document.getElementsByName("gender");

let gender = null;

for (let i = 0; i < radiosGender.length; i++) {
  radiosGender[i].addEventListener("change", onGenderRadioChange);
}

function onGenderRadioChange(e, g) {
  for (let i = 0; i < audioTracks.length; i++) {
    if (audioTracks[i].paused == false) audioTracks[i].load();
  }

  if (e == null) gender = g;
  else gender = e.target.value;

  for (let i = 0; i < audios.children.length; i++) {
    if (audios.children[i].style.display != "none") {
      if (gender == "vyras") {
        audios.children[i].querySelectorAll(".vyras")[0].style.display =
          "block";
        audios.children[i].querySelectorAll(".vyras")[0].style.width = "100%";
        audios.children[i].querySelectorAll(".moteris")[0].style.display =
          "none";
      } else {
        audios.children[i].querySelectorAll(".vyras")[0].style.display = "none";
        audios.children[i].querySelectorAll(".moteris")[0].style.display =
          "block";
        audios.children[i].querySelectorAll(".moteris")[0].style.width = "100%";
      }
    }
  }
}

function showLT() {
  $.ajax({
    type: "post",
    url: my_ajax_obj.ajax_url,
    data: {
      _ajax_nonce: my_ajax_obj.nonce,
      action: "showVoices",
      lang: "lietuviu",
    },
    success: function (data) {
      audios.innerHTML = data;
      resetAudioIfPlaying();
    },
    error: function (data) {
      alert("Error!");
    },
  });
}

function resetAudioIfPlaying() {
  for (let i = 0; i < audioTracks.length; i++) {
    audioTracks[i].onplay = function () {
      for (let z = 0; z < audioTracks.length; z++) {
        if (
          audioTracks[z].paused == false &&
          audioTracks[z] != audioTracks[i]
        ) {
          audioTracks[z].pause();
        }
      }
    };
  }
}
