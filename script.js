let currentPageIndex;

function init() {
    currentPageIndex = 0;
    showProperDiv();
}

function showProperDiv() {
    if(currentPageIndex == 0) {
        document.getElementById("div1").style.display = "";
        document.getElementById("div2").style.display = "none";
        document.getElementById("prevButton").style.display = "none";
        document.getElementById("nextButton").style.display = "";
        document.getElementById("submitButton").style.display = "none";
    } else {
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "";      
        document.getElementById("prevButton").style.display = "";
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "";
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