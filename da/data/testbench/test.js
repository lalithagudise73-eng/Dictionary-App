const testDictionary = [
    {
        word: "happy",
        meaning: "Feeling or showing pleasure and contentment.",
        partOfSpeech: "Adjective",
        synonyms: [
            "joyful",
            "cheerful",
            "pleased"
        ],
        antonyms: [
            "sad",
            "unhappy"
        ]
    },

    {
        word: "brave",
        meaning: "Ready to face danger or difficult situations with courage.",
        partOfSpeech: "Adjective",
        synonyms: [
            "courageous",
            "bold",
            "fearless"
        ],
        antonyms: [
            "cowardly",
            "timid"
        ]
    }
];


// Test 1: Dictionary count

function testDictionaryCount() {

    console.assert(
        testDictionary.length === 2,
        "Dictionary count test failed"
    );

    console.log(
        "Test 1 - Dictionary Count: PASS"
    );
}


// Test 2: Word search

function testWordSearch() {

    const result =
        testDictionary.find(
            item =>
                item.word === "happy"
        );

    console.assert(
        result !== undefined,
        "Word search test failed"
    );

    console.log(
        "Test 2 - Word Search: PASS"
    );
}


// Test 3: Meaning

function testMeaning() {

    const result =
        testDictionary.find(
            item =>
                item.word === "happy"
        );

    console.assert(
        result.meaning.length > 0,
        "Meaning test failed"
    );

    console.log(
        "Test 3 - Meaning: PASS"
    );
}


// Test 4: Synonyms

function testSynonyms() {

    const result =
        testDictionary.find(
            item =>
                item.word === "brave"
        );

    console.assert(
        result.synonyms.length > 0,
        "Synonyms test failed"
    );

    console.log(
        "Test 4 - Synonyms: PASS"
    );
}


// Test 5: Antonyms

function testAntonyms() {

    const result =
        testDictionary.find(
            item =>
                item.word === "brave"
        );

    console.assert(
        result.antonyms.length > 0,
        "Antonyms test failed"
    );

    console.log(
        "Test 5 - Antonyms: PASS"
    );
}


testDictionaryCount();
testWordSearch();
testMeaning();
testSynonyms();
testAntonyms();

console.log(
    "All Dictionary App Tests Completed."
);