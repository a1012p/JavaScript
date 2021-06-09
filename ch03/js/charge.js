// var age = 7,charge;
var age = prompt("나이를 입력하시오", "10");
var charge;

if (age !== null) {
    if (age < 8) {
        document.write("미취학 아동입니다.");
        charge = 1000;
    }
    else if (age >= 8 && age < 14) {
        document.write("초등학생 입니다.");
        charge = 2000;
    }
    else if (age >= 14 && age < 20) {
        document.write("중,고등학생 입니다.");
        charge = 2500;
    }
    else {
        document.write("성인 입니다.")
        charge = 3000;
    }
    document.write("<br>입장료는 <span id='red'>" + charge + "</span>원 입니다.");
}
else {
    document.write("입력이 취소되었습니다.");
}