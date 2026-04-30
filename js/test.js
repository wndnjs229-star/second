const result = document.getElementById("result");

function oldAdd(a, b) {
  return a + b;
}

const newAdd = (a, b) => a + b;
// ` ` 백틱은 문자의 열과 자바스크립트의 문자를 연결시킬 때 사용한다.
// 자바스크립트에서 사용하고, html과 연결시킬때 사용한다.
// 변수가 들어가던 안들어가던 백틱 사용은 무조건 필요로 한다.
result.innerHTML = `
<p> 기존함수: ${oldAdd(5, 3)} </p>
<p> 새로운 함수: ${newAdd(5, 3)} </p>
`;
