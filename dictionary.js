// 
const url1 = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const heading = document.getElementById("wordHeading");

btn.addEventListener("click", () => {
  // Taking input
  let inpWord = document.getElementById("inp-word").value;

  console.log(inpWord);
  const url2 = url1 + inpWord;

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/thesaurus?word=" + inpWord,
    headers: { "X-Api-Key": "3tbIyhQrxCdB1UWGIlW2xg==rk2T9t3OF3jyk5WA" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);

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
      // catching for any problems
      heading.innerHTML = `<h3>No result Found</h3>`;
    });
});
function playSound() {
  // playing sound 
  sound.play();
}
