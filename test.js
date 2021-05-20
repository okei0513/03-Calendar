
var table_box = document.getElementById("table_box");

const list01 = ["日", "月", "火", "水", "木", "金", "土"]
console.log(list01);

const hyouji = [
    { month: "1月", year: "2021年" },
    { month: "2月", year: "2021年" },
    { month: "3月", year: "2021年" },
    { month: "4月", year: "2021年" },
    { month: "5月", year: "2021年" },
    { month: "6月", year: "2021年" },
    { month: "7月", year: "2021年" },
    { month: "8月", year: "2021年" },
    { month: "9月", year: "2021年" },
    { month: "10月", year: "2021年" },
    { month: "11月", year: "2021年" },
    { month: "12月", year: "2021年" },
];

//カレンダー内のタスク
//数字を押したらメモが出る・メモが閉じる
$(".memo_box1").hide();

//1日
$(".memo_css1").on("click", function () {
    $(".memo_box1").toggle();
});

//メモの保存
//保存
$(".save1").on("click", function () {
    const text = $(".text_area1").val();
    localStorage.setItem("memo", text);
});
//削除
$(".clear1").on("click", function () {
    localStorage.removeItem("memo");
    $(".text_area1").val("");
});
//取得
if (localStorage.getItem("memo")) {
    const text = localStorage.getItem("memo");
    $(".text_area1").val(text);
};

//2日

$(".memo_box2").hide();
$(".memo_css2").on("click", function () {
    $(".memo_box2").toggle();
});
//保存
$(".save2").on("click", function () {
    const text = $(".text_area2").val();
    localStorage.setItem("memo", text);
});
//削除
$(".clear2").on("click", function () {
    localStorage.removeItem("memo");
    $(".text_area2").val("");
});
//取得
if (localStorage.getItem("memo")) {
    const text = localStorage.getItem("memo");
    $(".text_area2").val(text);
};


//下の付箋テスト＿＿削除ボタン テスト中
//function getNewNote() {
//    return '<div class="note">' +
//        '<input type="text">' +
//        '<input class="delete-button" type="button" value="削除">' +
//        '</div>';
//}

//$('#add-button').on('click', function () {
//    var $note = $(getNewNote());
//    $note.draggable();
//    $note.children(".delete-button")
//        .on('click', function () {
//            $(this).parents('.note').remove();
//       });
//    $('#sticky-note-container').append($note);
//});

//下の付箋テスト＿＿追加するボタン テスト中
//function getNewNote() {
//    return '<div class="note">' +
//        '<input type="text">' +
//        '</div>';
//}

//$('#add-button').on('click', function () {
//    var note = getNewNote();
//    $('#sticky-note-container').append(note);
//});

