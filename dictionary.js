const url1 = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const heading = document.getElementById("wordHeading");

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
        pronounciation.innerHTML = `<strong> Pronounciation:</strong>   ${data[0].phonetic}`
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

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/thesaurus?word=" + inpWord,
    headers: { "X-Api-Key": "3tbIyhQrxCdB1UWGIlW2xg==rk2T9t3OF3jyk5WA" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      list.innerHTML = `<li>${result.synonyms[0]}</li> <li>${result.synonyms[1]}</li> <li>${result.synonyms[2]}</li> <li>${result.synonyms[3]}</li> <li>${result.synonyms[4]}</li>`
    },
    error: function ajaxError(jqXHR)
    {
      console.error('Error: ', jqXHR.responseText);
    }

      word.innerHTML =
        result.synonyms.length === 0
          ? "Not Found "
          : result.synonyms.filter((item, index) => index < 5);

      // synonyms.innerHTML = `${result.synonyms[0]}, ${result.synonyms[1]}, ${result.synonyms[2]}, ${result.synonyms[3]}, ${result.synonyms[4]}`
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });

  fetch(url2)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      heading.innerHTML = `<div class="h">
    <h3>${inpWord}</h3>
        <p>${data[0].meanings[0].definitions[0].definition}</p>
        </div>`;
    })
    .catch(() => {
      heading.innerHTML = `<h3>No result Found</h3>`;
    });
});
function playSound() {
  sound.play();
}
