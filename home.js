const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
var a = new Date();
var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";
var r = weekdays[a.getDay()];

if (r === weekdays[0]) {
  word = "Phenomenon";
} else if (r === weekdays[1]) {
  word = "Antonym";
} else if (r === weekdays[2]) {
  word = "Exhausted";
} else if (r === weekdays[3]) {
  word = "Irritability";
} else if (r === weekdays[4]) {
  word = "Nod";
} else if (r === weekdays[5]) {
  word = "Develop";
} else if (r === weekdays[6]) {
  word = "Betray";
}
// Api url 
const urls = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
console.log(word);
fetch(urls)
// Fetching data
  .then((resp) => resp.json())

  .then((data) => {
    console.log(data);

    let speech =
    //
      data[0].meanings[0].partOfSpeech || data[0].meanings[1].partOfSpeech;

    let phonetic = data[0].phonetic;
    let definition =
    // definition fo the word 
      data[0].meanings[0].definitions[0].definition ||
      data[0].meanings[0].definitions[1].definition;
    let example =
    // Example using the word of the day 
      data[0].meanings[0].definitions[0].example ||
      data[0].meanings[0].definitions[1].example ||
      data[0].meanings[0].definitions[2].example;
    let audio =
    // For audio 
      data[0].phonetics[0].audio ||
      data[0].phonetics[1].audio ||
      data[0].phonetics[2].audio;

    console.log(speech);
    // showing 
    result.innerHTML = `
        <div class="word rounded-5">
        <h1 class="text-center">Word Of The Day</h1>
      <h4>${word}</h4>
      <button onclick="playSound()">
        <i class="fa-solid fa-volume-high "></i>
      </button>
     
     <div class="details">
     
     <div class="col1 pe-3"> <p>${speech}</p></div>
     <div class="col2"> <p>${phonetic}</P></div>
 
     </div>
     <p class="meaning"><strong>Meaning =></strong>${data[0].meanings[0].definitions[0].definition}</p>
     <p class="example"><strong>Example =></strong> ${example}</p></div>`;

    sound.setAttribute("src", `${audio}`);
  })
  .catch(() => {
    // Catching for any problems 
    result.innerHTML = `<h3>No result Found`;
  });

function playSound() {
  // For soind
  sound.play();
}
