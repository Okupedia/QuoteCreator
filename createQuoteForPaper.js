var text = "";
var quoteTextArea = document.getElementById('quoteTextArea');

var japanesePaperButton = document.getElementById('japaneseIPSJPaperButton');
japanesePaperButton.onclick = function () {
    console.log("japanese button clickecd");
    text=createQuoteForIPSJPaper("，", "：", "．", "ほか", "（", "）", "（オンライン）", "入手先")
    quoteTextArea.innerHTML = text;
}

var englishPaperButton = document.getElementById('englishIPSJPaperButton');
englishPaperButton.onclick = function () {
    console.log("english button clickecd");
    text=createQuoteForIPSJPaper(", ", ": ", ".", ", et al.", "(", ")", "(online)", "available from")
    quoteTextArea.innerHTML = text;
}


function createQuoteForIPSJPaper(comma, colon, period, etAlii, openBrackets, closeBrackets, online, available){
    var text = "";
    var errorText = "第一著者・標題・掲載雑誌は必須です";
    //著者情報
    var author = document.getElementById('author1').value;
    if (!author) {
        alert("第一著者が空欄です");
        text=errorText;
        return text;
    }
    text = text + author;
    author = document.getElementById('author2').value;
    if (author) {
        text = text + comma + author;
        author = document.getElementById('author3').value;
        if (author) {
            text = text + comma + author;
        }
    }
    if (document.getElementById('authorNumCheck').checked) {
        text = text + etAlii;
    }
    //タイトル
    var title = document.getElementById('title').value;
    text = text + colon + title + comma;
    if (!title) {
        alert("標題が空欄です");
        text=errorText;
        return text;
    }
    //雑誌名
    var papreName = document.getElementById('papreName').value;
    if (!papreName) {
        alert("掲載雑誌名が空欄です");
        text=errorText;
        return text;
    }
    if (document.getElementById('italicTitleCheck').checked) {
        text = text + "<i>" + papreName + "</i>";
    }else{
        text = text + papreName;
    }
    //巻数と号数
    var turn = document.getElementById('turn').value;
    if (turn) {
        text = text + comma + "Vol." + turn;
    }
    var vol = document.getElementById('vol').value;
    if (vol) {
        text = text + comma + "No." + vol;
    }
    //ページ
    var startPage = document.getElementById('startPage').value;
    var endPage = document.getElementById('endPage').value;
    if(startPage && endPage){
        text = text + comma + "pp." + startPage + "-" + endPage;
    }
    //URL
    var papre_url = document.getElementById('paperUrl').value;
    if (papre_url) {
        text = text + online + comma+ available + "〈"  + papre_url + "〉" ;
    }
    //発行年
    var publishedYear = document.getElementById('publishedYear').value;
    if (publishedYear) {
        text = text + openBrackets + publishedYear + closeBrackets;
    }

    text = text + period;
    return text;
}
