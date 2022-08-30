const quoteTextArea = document.getElementById('quoteTextArea');

const today = new Date();
today.setDate(today.getDate());
document.getElementById("accessedYear").value = today.getFullYear();
document.getElementById("accessedMonth").value = ("0"+(today.getMonth()+1)).slice(-2);
document.getElementById("accessedDay").value = ("0"+today.getDate()).slice(-2);

window.onload = function () {
    const dataProviderButton = document.getElementById('dataProviderButton');
    dataProviderButton.onclick = function () {
        document.getElementById("dataProvider").value = document.getElementById('author').value;
    }

    const japaneseIPSJWebButton = document.getElementById('japaneseIPSJWebButton');
    japaneseIPSJWebButton.onclick = function () {
        console.log("japanese button clickecd");
        const text=createQuoteOfWebForIPSJ("，", "：", "．", "ほか", "（", "）", "（オンライン）", "入手先", "参照")
        quoteTextArea.innerHTML = text;
    }

    const englishIPSJWebButton = document.getElementById('englishIPSJWebButton');
    englishIPSJWebButton.onclick = function () {
        console.log("english button clickecd");
        const text=createQuoteOfWebForIPSJ(", ", ": ", ".", ", et al.", "(", ")", "(online)", "available from", "accessed ")
        quoteTextArea.innerHTML = text;
    }
}

function createQuoteOfWebForIPSJ(comma, colon, period, etAlii, openBrackets, closeBrackets, online, available, accessed){
    var text = "";
    const errorText = "著者(Webサイトの名称)・Wepページの題名・入手先・URLは必須です";
    //著者情報
    const author = document.getElementById('author').value;
    if (!author) {
        return errorText;
    }
    text = text + author;
    //Webページの題名
    const title = document.getElementById('webTitle').value;
    if (!title) {
        return errorText;
    }
    text = text + colon + title + comma;
    //Webページの名称
    const webName = document.getElementById('webName').value;
    if (webName) {
        text = text + webName + comma;
    }
    //入手先
    const dataProvider = document.getElementById('dataProvider').value;
    if (!title) {
        return errorText;
    }
    text = text  + dataProvider + online;
    //URL
    const webUrl = document.getElementById('webUrl').value;
    if (!webUrl) {
        return errorText;
    }
    text = text + comma+ available + "〈"  + webUrl + "〉" ;
    //発行年
    const accessedYear = document.getElementById('accessedYear').value;
    if (accessedYear) {
        text = text + openBrackets + accessed + accessedYear;
        const accessedMonth = document.getElementById('accessedMonth').value;
        if (accessedMonth) {
            text = text + "-" + accessedMonth;
            const accessedDay = document.getElementById('accessedDay').value;
            if (accessedDay) {
                text = text + "-" + accessedDay;
            }
        }
        text = text + closeBrackets;
    }

    text = text + period;
    return text;
}
