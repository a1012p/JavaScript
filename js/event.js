//상세 설명 보기를 클릭 - 텍스트 보이기
var text;
function showText()
{
    text = document.getElementById("desc");
    text.style.display = "block";
    var button = document.getElementById("btn");
    button.style.display = "none";
}

//상세 설명 닫기 클릭 - 텍스트 숨기기
function hideText()
{
    text = document.getElementById("desc");
    text.style.display ="none";
    document.getElementById("btn").style.display = "block";
}