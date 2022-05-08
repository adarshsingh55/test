versatile = [
  {
    name: "uniform",
    description: "Girls wearing any kind of uniform.",
    is_nsfw: false,
    tag_id: 11,
  },
  {
    name: "maid",
    description:
      "Cute womans or girl employed to do domestic work in their working uniform.",
    is_nsfw: false,
    tag_id: 13,
  },
  {
    name: "waifu",
    description: "A female anime/manga character.",
    is_nsfw: false,
    tag_id: 12,
  },
  {
    name: "marin-kitagawa",
    description:
      "One of two main protagonists (alongside Wakana Gojo) in the anime and manga series My Dress-Up Darling.",
    is_nsfw: false,
    tag_id: 5,
  },
  {
    name: "mori-calliope",
    description:
      "Mori Calliope is an English Virtual YouTuber (VTuber) associated with hololive as part of its first-generation English branch of Vtubers.",
    is_nsfw: false,
    tag_id: 14,
  },
  {
    name: "raiden-shogun",
    description:
      "Genshin Impact's Raiden Shogun is a fierce lady in the Genshin ranks.",
    is_nsfw: false,
    tag_id: 15,
  },
  {
    name: "oppai",
    description: "Girls with large breasts",
    is_nsfw: false,
    tag_id: 7,
  },
  {
    name: "selfies",
    description: "A photo-like image of a waifu.",
    is_nsfw: false,
    tag_id: 10,
  },
]
 
let slect = document.getElementById("car");
let text = document.getElementById("text");
// var html = slect.innerHTML

versatile.forEach((element) => {
  let html = slect.innerHTML;
  slect.innerHTML =
    html + `  <option value="${element.name} ">${element.name} </option> `;
});

function greet() {
  var value = text.value;
  console.log(value);
  var val = slect.value;
  console.log(val);
  return value, val;
}

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", greet);
fetchbtn.addEventListener("click", buttonHandler);
function buttonHandler() {
  let val = slect.value;
  const xhr = new XMLHttpRequest();

    // open xhr object (getting the jeson file nothing change😎😎)
    xhr.open(
      "get",
      `https://api.waifu.im/random/?selected_tags=${val}`,
      "true"
    );

    xhr.onprogress = function () {
      console.log("every thiong is fine");
    };
    xhr.onload = function () {
      if (this.status === 200) {
        // quates = this.responseText ,
        parsed = JSON.parse(this.responseText);
        console.log(parsed, typeof parsed);
        let printit = document.getElementById("fetchcont");
        let img = parsed.images[0].url;
        console.log(img);
        let url = parsed["images"][0].url;
        console.log(url);
        var print = `<img class="img"  src=" ${url}" alt="not found">`;
        console.log(typeof print, print);
        // let to =JSON.stringify.print
        // console.log(print)
        console.log("every thing is good");
        setTimeout(() => {
          printit.innerHTML = printit.innerHTML + print;
          console.log(url);
        }, 2000);
      } else {
        console.log("some problem has occered");
      }
    };
    xhr.send();
  }
