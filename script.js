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
var whatService = {
    id: "whatService",
    title: "どんなサービス？",
    content: "弊社クラウドテックでは、他社と比べても母数の大きい600万のデータベースからフリーランスの方をご提案可能です。<br>またエージェントとしての知見もありますので、市況感や、他社さんがどのように活用されているか等もお伝え出来ます。"
}
var busyNow = {
    id: "busyNow",
    title: "忙しいのでまた今度",
    content: "ありがとうございます、O月とかって少し落ち着いていますでしょうか？<br>ではまたO月に改めさせていただきます。<br>本日サービス資料だけメールで送付させていただいてもよろしいでしょうか？<br>(アドレス・担当名確認)"
}
var busyNowAnoter = {
    id: "busyNowAnoter",
    title: "忙しいのでまた今度(別バージョン)",
    content: "月末忙しいですよね〜、すみません！来月の初めとかっていかがでしょうか？<br>※前提上記を挟ませない様、一息で言い切る<br>∟また「話してて取れそうだけど取れない」状況では「お電話対応の御礼メール→調整」<br>に持ち込むのも有効"
}
var notNow = {
    id: "notNow",
    title: "すぐには困っていない",
    content: "ありがとうございます。今回ご連絡差し上げたのは、すぐに使っていただきたい訳ではなく<br>現在の採用手法との比較検討材料としてサービスのご紹介をさせていただきたいのですが…"
}
var notNowAnother = {
    id: "notNowAnother",
    title: "すぐには困っていない(別バージョン)",
    content: "ありがとうございます。<br>他社様でも求人前にどういったスキルセットを持った人材がいるのか、その費用感までご参考にして頂くケースも多かったので、是非一度こちらのご紹介も含めて…(日時打診)"
}
var usingAnotherService = {
    id: "usingAnotherService",
    title: "既に他社を使っている",
    content: "すぐに使っていただきたいわけではなくて、現在の採用手法との比較検討材料として<br>是非サービスのご紹介とご挨拶させていただきたいなと思っているのですが<br>今週とか来週で30分ほどオンラインでお時間頂くことは可能でしょうか？"
}
var aboutContract = {
    id: "aboutContract",
    title: "契約面について",
    content: "弊社業務委託でのご紹介になります。<br>準委任契約でご登録していただいている個人事業主様をご紹介という形になります。"
}
var recruitmentWell = {
    id: "recruitmentWell",
    title: "採用は順調に進んでいる",
    content: "順調でいらっしゃるんですね！<br>クラウドテックは最短3日で稼働開始の実績もあるので、<br>不測の事態に備えて、一度サービスをご説明するお時間頂ければと思うのですが(日時打診へ)"
}
var notRecruitment = {
    id: "notRecruitment",
    title: "採用の予定はない",
    content: "ありがとうございます、今後募集を再開される時期とか、よく募集される時期ってありますか？<br>→是非御社の今後の採用計画に当社のサービスも加えていただきたく<br>→度サービスのご紹介とご挨拶を今週とか来週で30分ほどオンラインで<br>お時間頂くことは可能でしょうか？"
}
var onlyFullTime = {
    id: "onlyFullTime",
    title: "正社員しか無理",
    content: "ありがとうございます、それで申しますと弊社登録の人材は正社員への切り替え雇用も可能になっておりまして<br>実際に登録の3割以上の方が正社員への登用を希望されております。<br>他社様でも試用期間としてフリーランス、その後登用と言った事例は多くございますので<br>是非その点含めたサービスのご紹介とご挨拶を今週とか来週で30分ほどオンラインでお時間頂くことは可能でしょうか？"
}
var notTrustPerformance = {
    id: "notTrustPerformance",
    title: "パフォーマンスが信頼できない",
    content: "御社とフリーランスの方で秘密保持契約も結ばせていただくので、パフォーマンスについては正社員の方と差異はないと思います。<br>また当社のサポートも万全ですので、是非一度その点含めたサービスのご紹介とご挨拶を今週とか来週で30分ほどオンラインでお時間頂くことは可能でしょうか？"
}
var wantingNiche = {
    id: "wantingNiche",
    title: "OOの人材が欲しい(ニッチな需要の求人の場合)",
    content: "・ありがとうございます。弊社人材DBの中にはそういった人材も登録されている<br>可能性はございます。ただ勤務体系の部分で、弊社基本フルリモートを希望されるワーカーさんが多かったのですがこの辺りはいかがでしょうか？<br><br>※本来週5での稼働も厳しいが、上記ケースだとまずは勤務体系確認が優先"
}
var howMuch = {
    id: "howMuch",
    title: "「幾らなの？」<br>※聞かれた時のみ",
    content: "ありがとうございます、それで申し上げますと月間どれくらいで稼働して貰いたい等ご希望等はございますでしょうか？<br>※1人月20万円からが判断基準になる"
}
var costNG = {
    id: "costNG",
    title: "費用的にNG",
    content: "①御社の予算ってお伺いしてもよろしいでしょうか？<br>→ありがとうございます、予算に合わせた方ご紹介可能なので是非一度サービスのご紹介とご挨拶を、今週とか来週で30分ほどオンラインでお時間頂くことは可能でしょうか？<br><br>②ありがとうございます。<br>結論登録頂いているワーカーさんの経験に応じて金額は変わって参りますので、当日は御社のニーズに紐づく人材が幾らかをお伝えさせて頂きます。<br><br>※手数料質問も来る。その場合【手数料％は伝えてはいけない】<br>公開してないんですが大体他社様3割前後。"
}
var reasonCost = {
    id: "reasonCost",
    title: "なぜその費用で紹介可能なのか",
    content: "稼働時間の調整で可能になってきます。<br>例えば、週5の50万の人材を週2～3で25万も可能になっております。<br>是非一度サービスのご紹介とご挨拶を今週とか来週で30分ほどオンラインで<br>お時間頂くことは可能でしょうか？"
}
var howMuchFee = {
    id: "howMuchFee",
    title: "紹介料金は幾ら？",
    content: "紹介料金いくらご紹介自体は料金はかからず、ご参画・ご稼働のタイミングで<br>請求が発生する形となります。<br>派遣のような形をイメージしていただけると良いかと思います。"
}
var payingSite = {
    id: "payingSite",
    title: "支払いサイクルはどうなってる？",
    content: "ありがとうございます。<br>クラウドテックとしては基本30日サイトで提供させて頂いております。<br>(月末に支払い頂く形)<br>但し弊社グループの人材サービスも複数展開しておりますので、そちらであれば変更可能でございます。<br>（直接契約できるテックダイレクトとかワーカーと相談し変更可能）"
}

// 表示する要素の配列
var elements = {
    "whatService": whatService,
    "busyNow": busyNow,
    "busyNowAnoter": busyNowAnoter,
    "notNow": notNow,
    "notNowAnother": notNowAnother,
    "usingAnotherService": usingAnotherService,
    "aboutContract": aboutContract,
    "recruitmentWell": recruitmentWell,
    "notRecruitment": notRecruitment,
    "onlyFullTime": onlyFullTime,
    "notTrustPerformance": notTrustPerformance,
    "wantingNiche": wantingNiche,
    "howMuch": howMuch,
    "costNG": costNG,
    "reasonCost": reasonCost,
    "howMuchFee": howMuchFee,
    "payingSite": payingSite,
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

    