let currentPageIndex;
let navElements;
let prevButton;
let nextButton;
let submitButton;

function init() {

    currentPageIndex = 0;
    navElements = Array.from(document.getElementsByClassName('nav'));

    prevButton = document.getElementById("prevButton");
    nextButton = document.getElementById("nextButton");
    submitButton = document.getElementById("submitButton");

    showProperDiv();
}

function showProperDiv() {
    
    for(let i = 0; i < navElements.length; i++) {

        if(i == currentPageIndex) {
            navElements[i].style.display = "";
        } else {
            navElements[i].style.display = "none";
        }        
    }

    if(currentPageIndex == 0) {
        prevButton.style.display = "none";
        nextButton.style.display = "";
        submitButton.style.display = "none";
    } else if (currentPageIndex == (navElements.length - 1)) {
        prevButton.style.display = "";
        nextButton.style.display = "none";
        submitButton.style.display = "";  
    } else {
        prevButton.style.display = "";
        nextButton.style.display = "";
        submitButton.style.display = "none";  
    }
}

function nextPage() {
    currentPageIndex++;
    showProperDiv();
}

function prevPage() {
    currentPageIndex--;
    showProperDiv();
}

function beforeSubmit() {
}
