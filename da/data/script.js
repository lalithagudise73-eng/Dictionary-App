let dictionary = [];


// Load dictionary data

fetch("data/dictionary.json")
    .then(response => response.json())
    .then(data => {

        dictionary = data;

    })
    .catch(error => {

        console.error(
            "Error loading dictionary:",
            error
        );

    });


// Search word

function searchWord() {

    const input =
        document
            .getElementById("wordInput")
            .value
            .trim()
            .toLowerCase();


    if (input === "") {

        showMessage(
            "Please enter a word."
        );

        return;
    }


    const entry =
        dictionary.find(
            item =>
                item.word.toLowerCase() === input
        );


    if (!entry) {

        showMessage(
            "Word not found in the dictionary."
        );

        return;
    }


    displayWord(entry);
}


// Display word information

function displayWord(entry) {

    document.getElementById(
        "word"
    ).innerText =
        entry.word;


    document.getElementById(
        "meaning"
    ).innerText =
        entry.meaning;


    document.getElementById(
        "partOfSpeech"
    ).innerText =
        entry.partOfSpeech;


    document.getElementById(
        "synonyms"
    ).innerText =
        entry.synonyms.join(", ");


    document.getElementById(
        "antonyms"
    ).innerText =
        entry.antonyms.join(", ");


    document.getElementById(
        "example"
    ).innerText =
        entry.example;
}


// Display message

function showMessage(message) {

    document.getElementById(
        "word"
    ).innerText = message;


    document.getElementById(
        "meaning"
    ).innerText = "--";


    document.getElementById(
        "partOfSpeech"
    ).innerText = "--";


    document.getElementById(
        "synonyms"
    ).innerText = "--";


    document.getElementById(
        "antonyms"
    ).innerText = "--";


    document.getElementById(
        "example"
    ).innerText = "--";
}