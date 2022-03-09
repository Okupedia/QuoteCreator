var paperButton = document.getElementById('paperButton');
paperButton.onclick = function () {
    document.getElementById("createHTMLFrame").src = "createQuoteForPaper.html";
}

var webButton = document.getElementById('webButton');
webButton.onclick = function () {
    document.getElementById("createHTMLFrame").src = "createQuoteForWeb.html";
}