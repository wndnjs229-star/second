// 키보드 입력 방식을 반드시 알아야 한다.
// prompt()

// 1부터 사용자로부터 입력받은 정수까지의 정수의 합계를 입력하시오

while (1) {
  let input = parseInt(prompt("정수 입력하시오!!!"));
  if (input === 7) {
    console.log("7이 입력되었으니 종료합니다");
    break;
  }
  let tot = 0;
  for (i = 1; i <= input; i++) {
    tot = tot + i;
  }
  comsole.log(tot);
}
