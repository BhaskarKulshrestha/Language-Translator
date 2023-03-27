<h1>Language Translator Project Documentation</h1>
<h2>Introduction.</h2>
    The Language Translator project is a simple web application that allows users to translate text between English, Hindi, French , German and Spanish using the MyMemory API. This project demonstrates how to integrate an API into a web application and how to use JavaScript to handle user input and API responses.

<h2>Features</h2>

### The Language Translator project allows users to:

- Select the source and target languages from a dropdown menu.
- Enter the text to be translated in a textarea input field.
- Click a "Translate" button to initiate the translation.
- See the translated text displayed in a white box.
  
<h2>Technology Used</h2>

- HTML: For building the basic structure and content of the web page.  
- CSS: For styling the web page and making it more visually appealing.  
- JavaScript: For handling user input and making API requests.  
- MyMemory API: For translating text between different languages.
  
<h2>Prerequisites</h2>
To run the Language Translator project, you will need:

- A modern web browser such as Google Chrome, Firefox, or Safari.
- An internet connection.
  
<h2>Getting Started</h2>

To get started with the Language Translator project, follow these steps:

- Clone the project repository to your local machine or download the ZIP file.
- Open the index.html file in your web browser.
- Select the source and target languages from the dropdown menus.
- Enter the text to be translated in the textarea input field.
- Click the "Translate" button to initiate the translation.
- See the translated text displayed in the white box below the input field.
  
<h2>API integration</h2>
The Language Translator project uses the MyMemory API to translate text between different languages. The API key is provided as a constant variable in the JavaScript code:

```.js
const apiKey = "347c51fe4fdce44d799d";
```

The API endpoint URL is constructed using the source and target languages selected by the user, as well as the text to be translated:

```.js
const sourceLang = sourceLangSelect.value;
const targetLang = targetLangSelect.value;
const text = encodeURIComponent(textToTranslate.value);
const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}&key=${apiKey}`;
```

<h2>Conclusion</h2>
The Language Translator project demonstrates how to integrate an API into a web application using JavaScript. By following the steps outlined in this documentation, you can easily set up and run the project on your local machine and start translating text between different languages.

-------------------------------------------------------------------------------------
*Check it Out : https://bhaskarkulshrestha.github.io/Language-Translator/*

**OR**

*Check it Out : https://thelanguagetranslator1.netlify.app/*

-------------------------------------------------------------------------------------
