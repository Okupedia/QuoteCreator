var text = "";
var quoteTextArea = document.getElementById('quoteTextArea');

var today = new Date();
today.setDate(today.getDate());
document.getElementById("accessedYear").value = today.getFullYear();
document.getElementById("accessedMonth").value = ("0"+(today.getMonth()+1)).slice(-2);
document.getElementById("accessedDay").value = ("0"+today.getDate()).slice(-2);

var dataProviderButton = document.getElementById('dataProviderButton');
dataProviderButton.onclick = function () {
    document.getElementById("dataProvider").value = document.getElementById('author').value;
}

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
        return errorText;
    }
    text = text + author;
    //Webページの題名
    var title = document.getElementById('webTitle').value;
    if (!title) {
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
        return errorText;
    }
    text = text  + dataProvider + online;
    //URL
    var webUrl = document.getElementById('webUrl').value;
    if (!webUrl) {
        return errorText;
    }
    text = text + comma+ available + "〈"  + webUrl + "〉" ;
    //発行年
    var accessedYear = document.getElementById('accessedYear').value;
    if (accessedYear) {
        text = text + openBrackets + accessed + accessedYear;
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
