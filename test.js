
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

$("#save").on("click", function () {
    const text = $("#text_area").val();//データ保存
    localStorage.setItem("memo", text);
});

$("#clear").on("click", function () {
    localStorage.removeItem("memo");//データ削除
    $("#text_area").val("");
});

if (localStorage.getItem("memo")) {
    const text = localStorage.getItem("memo");//データ取得
    $("#text_area").val(text);
};


//下の付箋テスト＿＿削除ボタン
function getNewNote() {
    return '<div class="note">' +
        '<input type="text">' +
        '<input class="delete-button" type="button" value="削除">' +
        '</div>';
}

$('#add-button').on('click', function () {
    var $note = $(getNewNote());
    $note.draggable();
    $note.children(".delete-button")
        .on('click', function () {
            $(this).parents('.note').remove();
        });
    $('#sticky-note-container').append($note);
});

//下の付箋テスト＿＿追加するボタン
function getNewNote() {
    return '<div class="note">' +
        '<input type="text">' +
        '</div>';
}

$('#add-button').on('click', function () {
    var note = getNewNote();
    $('#sticky-note-container').append(note);
});