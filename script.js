var greeting = {
    id: "greeting",
    title: "ご挨拶",
    content: "お世話になっております。<br>クラウドワークスの千葉です。"
}
var dateFix = {
    id: "dateFix",
    title: "日程調整",
    content: "お忙しいと思いますが、来週4/15日の週で30分ほどお時間をいただけないでしょうか？"
}
var closing = {
    id: "closing",
    title: "クロージング",
    content: "4/15の14:00よりお時間をいただきます。追ってメールをお送りいたします。"
}
// 表示する要素の配列
var elements = {
    "greeting": greeting,
    "dateFix": dateFix,
    "closing": closing,

    // "担当変更",
    // "ヒアリング",

    // "質問"
};

function expandElement(arg) {
    var hiddenElement = document.getElementById("hiddenElement");
    if (hiddenElement.style.display === "none" || hiddenElement.style.display === "") {
        hiddenElement.style.display = "block";
    }

    var seletedContents = elements[arg.id];
    var selectedContent = seletedContents["content"];

    var hiddenElementContent = selectedContent;
    hiddenElementContent += '<div class="close-button" id="close-button" onclick="closeElement()">&times;</div>'; 
    hiddenElement.innerHTML = hiddenElementContent; 

}
function closeElement() {
    hiddenElement.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {

    // 要素を表示するためのHTML文字列を作成
    var htmlString = [];
    Object.values(elements).forEach(function(element) {
        htmlString +=  
        '<div class="button-content" onclick="expandElement(' + "this" + ')" id="' + element["id"] +'">'
        + element["title"]
        + "</div>"
        + '';
    });

    // HTML要素に表示
    var contentDiv = document.getElementById("sales-button-area");
    contentDiv.innerHTML = htmlString;
});
    