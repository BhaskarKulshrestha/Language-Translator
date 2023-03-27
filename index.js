const apiKey = "5a4e6dbb45d528b7e255";
const translateBtn = document.getElementById("translate-btn");
const sourceLangSelect = document.getElementById("source-lang");
const targetLangSelect = document.getElementById("target-lang");
const textToTranslate = document.getElementById("text-to-translate");
const translatedText = document.getElementById("translated-text");

translateBtn.addEventListener("click", () => {
    const sourceLang = sourceLangSelect.value;
    const targetLang = targetLangSelect.value;
    const text = encodeURIComponent(textToTranslate.value);
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            translatedText.innerText = data.responseData.translatedText;
        })
        .catch(error => {
            console.log(error);
            translatedText.innerText = "An error occurred while translating the text. Please try again later,Sorry for the Inconvinenece";
        });
});
