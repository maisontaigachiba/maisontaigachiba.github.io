var companyName = "＜企業名＞";

var greeting = {
    id: "greeting",
    title: "ご挨拶",
    content: "お世話になっております。<br><span id='output'></span>の千葉です。"
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

    //企業名を表示する処理
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = companyName;
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

function displayText() {
    companyName = document.getElementById("inputField").value;
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = companyName;
}

document.addEventListener("DOMContentLoaded", function() {
    // テキストフィールドとボタンを取得
    var inputField = document.getElementById("inputField");
    var submitButton = document.getElementById("submitButton");

    // テキストフィールドに入力があるかどうかをチェックし、ボタンの有効/無効を切り替える
    function checkInput() {
        if (inputField.value.trim() !== "") {
        submitButton.disabled = false; // 入力がある場合はボタンを有効にする
        } else {
        submitButton.disabled = true; // 入力がない場合はボタンを無効にする
        }
    }

    // テキストフィールドの入力が変更されたときにチェックを実行
    inputField.addEventListener("input", checkInput);
});

    