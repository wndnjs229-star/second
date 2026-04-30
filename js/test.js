// const result = document.getElementById("result");

// function oldAdd(a, b) {
//   return a + b;
// }

// const newAdd = (a, b) => a + b;
// // ` ` 백틱은 문자의 열과 자바스크립트의 문자를 연결시킬 때 사용한다.
// // 자바스크립트에서 사용하고, html과 연결시킬때 사용한다.
// // 변수가 들어가던 안들어가던 백틱 사용은 무조건 필요로 한다.
// result.innerHTML = `
// <p> 기존함수: ${oldAdd(5, 3)} </p>
// <p> 새로운 함수: ${newAdd(5, 3)} </p>
// `;

const scores = [85, 92, 78, 96, 88, 73, 93];
const highScores1 = scores.filter((score) => score >= 90);

console.log(highScores1);

function (score) {
  return score >= 90;
}
// 배열의 이름은 전체가 전부가 아니다. 시작의 위치부터 걸러내야한다.
// 각 칸마다 하나씩 꺼내어 너가 인식하고 그 인식된 값을 90과 비교하라
// 변수가 담겨야 한다. 함수가 있어야 비교를 할 수 있다.

// score => score >= 90
// 매개변수
// score는 재료인데 filter 함수가 처리할 데이터이다(여기서는 하나의 점수)
// => 이 재료를 가지고 우측의 행동을 진행하라
// score >= 90 재료가 90이상인지 확인하여 걸러내라

// 필터링 과정 (거름망 통과)
// 컴퓨터는 scores 배열에 들어있는 7개의 점수를 하나씩 꺼내어 조건문(score)
