
var text = "";
var quoteTextArea = document.getElementById('quoteTextArea');

var japaneseIPSJWebButton = document.getElementById('japaneseIPSJWebButton');
japaneseIPSJWebButton.onclick = function () {
    console.log("japanese button clickecd");
    text=createQuoteOfWebForIPSJ("，", "：", "．", "ほか", "（", "）", "（オンライン）", "入手先", "参照")
    quoteTextArea.innerHTML = text;
}

var englishIPSJWebButton = document.getElementById('englishIPSJWebButton');
englishIPSJWebButton.onclick = function () {
    console.log("english button clickecd");
    text=createQuoteOfWebForIPSJ(", ", ": ", ".", ", et al.", "(", ")", "(online)", "available from", "accessed ")
    quoteTextArea.innerHTML = text;
}


function createQuoteOfWebForIPSJ(comma, colon, period, etAlii, openBrackets, closeBrackets, online, available, accessed){
    var text = "";
    var errorText = "著者(Webサイトの名称)・Wepページの題名・入手先・URLは必須です";
    //著者情報
    var author = document.getElementById('author').value;
    if (!author) {
        alert("著者が空欄です");
        return errorText;
    }
    text = text + author;
    //Webページの題名
    var title = document.getElementById('webTitle').value;
    if (!title) {
        alert("Webページの題名が空欄です");
        return errorText;
    }
    text = text + colon + title + comma;
    //Webページの名称
    var webName = document.getElementById('webName').value;
    if (webName) {
        text = text + webName + comma;
    }
    //入手先
    var dataProvider = document.getElementById('dataProvider').value;
    if (!title) {
        alert("Webページの入手先が空欄です");
        return errorText;
    }
    text = text  + dataProvider + online;
    //URL
    var webUrl = document.getElementById('webUrl').value;
    if (!webUrl) {
        alert("URLが空欄です");
        return errorText;
    }
    text = text + comma+ available + "〈"  + webUrl + "〉" ;
    //発行年
    var accessedYear = document.getElementById('accessedYear').value;
    if (accessedYear) {
        text = text + openBrackets + accessed + accessedYear + closeBrackets;
        var accessedMonth = document.getElementById('accessedMonth').value;
        if (accessedMonth) {
            text = text + "-" + accessedMonth;
            var accessedDay = document.getElementById('accessedDay').value;
            if (accessedDay) {
                text = text + "-" + accessedDay;
            }
        }
        text = text + closeBrackets;
    }

    text = text + period;
    return text;
}
