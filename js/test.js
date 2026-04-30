// const result = document.getElementById("result");
// const hours = new Date().getHours();

// if (hours >= 13 && hourts < 17) {
//   result.textContent = "안녕";
//   result.className = "daytime";
// } else {
//   result.textContent = "잠잔다";
//   result.className = "nighttime";
// }

function add(a, b) {
  return a + b;
}

let rec = add(3, 6);
// 여기까지 함수 원형

// 1.
const add = function (a, b) {
  return a + b;
};

// 2.
const add = (a, b) => {
  return a + b;
};

// 3.
const add = (a, b) => a + b;

const sayHello = () => console.log("welcome");

// 매개변수가 같을 때에는 소괄호 까지도 생략이 됩니다.
const double = (x) => x * 2;
const double = (x) => x * 2;
