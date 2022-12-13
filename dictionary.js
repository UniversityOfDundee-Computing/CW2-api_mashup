const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  console.log(inpWord);
  const urls = url + inpWord;
  fetch(urls)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      wordHeading.innerHTML = `
        ${inpWord}`
        definition.innerHTML = `
        ${data[0].meanings[0].definitions[0].definition}
        `
      //     result.innerHTML =`
      //     <div class="word">
      //   <h3>${inpWord}</h3>
      //   <button onclick="playSound()">
      //     <i class="fa-solid fa-volume-high"></i>
      //   </button>
      // </div>
      // <div class="details">
      //   <p>${data[0].meanings[0].partOfSpeech}</p>
      //   <p>${data[0].phonetic}</P>
      // </div>
      // <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
      // <p class="example">${data[0].meanings[0].definitions[0].example }</p>`;
      // sound.setAttribute("src", `${data[0].phonetics[0].audio}`);

    })
    .catch(() => {
      result.innerHTML = `<h3>No result Found</h3>`
    });
})
function playSound() {
  sound.play();
}

// // Fetching synonyms from Thesaurus API
const apiKey = "+taw17yO8Pmwz7NBacivWA==7sUyXhtQVrv8kYsl";
const thesaurusUrl = "https://api-ninjas.com/api/thesaurus";
let word;

const cors = require("cors");
app.use(cors());

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  word = inpWord;
  const thesaurusUrlWithKey = `${thesaurusUrl}?key=${apiKey}&word=${word}`;
  fetch(thesaurusUrlWithKey)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let synonyms = data.synonyms;
      let synonymsList = synonyms.split(",");
      console.log(synonymsList);
      let output = "";
      synonymsList.forEach((synonym) => {
        output += `<li>${synonyms}</li>`
      })
      list.innerHTML = output;
    })
    .catch(() => {
      result.innerHTML = `<h3>No synonyms Found</h3>`
    });
})
