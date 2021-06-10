//숫자를 입력받아서 그 숫자까지 출력하는 프로그램
var i = 1;
do {
    var n = prompt("숫자를 입력하시오.", "1");
    if (n <= 0 && n !== null) alert("숫자는 1이상으로 입력하십시오");
    else break;
} while (true)
if (n !== null) {
    while (true) {
        document.write(i + '<br>');
        i++;
        if (i > n) {
            break;
        }
    }
}
else {
    document.write("입력을 취소했습니다.");
}