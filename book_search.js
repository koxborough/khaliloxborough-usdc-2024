/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    result.SearchTerm = searchTerm;

    for (let book of scannedTextObj) {
        for (let page of book.Content) {
            if (page.Text.includes(searchTerm)) {
                result.Results.push({
                   "ISBN": book.ISBN,
                   "Page": page.Page,
                   "Line": page.Line 
                });
            }
        }
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** START OF MY OWN EXAMPLE INPUT-OUTPUT OBJECTS */

/** Example input object with more than one book. */
const multipleBooksIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "My Book",
        "ISBN": "1234",
        "Content": [
            {
                "Page": 2,
                "Line": 3,
                "Text": "The start of my new book will begin with the second page"
            },
            {
                "Page": 5,
                "Line": 7,
                "Text": "Zombies love eating brains"
            }
        ]
    }
]

/** Example output object with more than one book from the results. */
const multipleBooksOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "1234",
            "Page": 2,
            "Line": 3
        }
    ]
}

/** Example output object with more than one result from a single book. */
const multipleResultsSameBookOut = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** START OF MY OWN UNIT TESTS */

/** Test for a positive match with more than one book in the scanned text. */
const test3result = findSearchTermInBooks("the", multipleBooksIn);
if (JSON.stringify(multipleBooksOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", multipleBooksOut);
    console.log("Received:", test3result);
}

/** Test for a positive match with case-sensitive information */
const test4resultpart1 = findSearchTermInBooks("the", multipleBooksIn);
const test4resultpart2 = findSearchTermInBooks("The", multipleBooksIn);
if (JSON.stringify(test4resultpart1) !== JSON.stringify(test4resultpart2)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Received (1):", test4resultpart1);
    console.log("Received (2):", test4resultpart2);
}

/** Test for a negative match. */
const test5result = findSearchTermInBooks("basketball", multipleBooksIn);
if (test5result.Results.length === 0) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", []);
    console.log("Received:", test5result.Results);
}

/** Test for a negative match which has a case-insensitive match. */
const test6result = findSearchTermInBooks("canadian", twentyLeaguesIn);
if (test6result.Results.length === 0) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", []);
    console.log("Received:", test6result.Results);
}

/** Test for a positive match in one book multiple times. */
const test7result = findSearchTermInBooks("and", multipleBooksIn);
if (JSON.stringify(multipleResultsSameBookOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", multipleResultsSameBookOut);
    console.log("Received:", test7result);
}