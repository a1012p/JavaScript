var count = 0;
var num = prompt("배수입력","0");
for (var i = 1; i <= 100; i++) {
    if (i % num === 0) {
        document.write(i + ", ");
        count++;
    }
}
document.write("<p>"+num+"의 배수의 개수: " + count + "</p>");
document.getElementById("title").innerHTML =num + "의 배수 찾기";
