const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민수', score: 78 },
  { name: '정수진', score: 96 },
];

const renderStudents = (studentList) => {
  const container = document.getElementById('studentList');
  container.innerHTML = studentList
    .map(
      (student) => `
    <div class="student-card ${student.score >= 90 ? 'high-score' : ''}">
    <h3>${student.name}</h3>
    <p>점수: ${student.score}점</p>
    <p>등급: ${getGrade(student.score)}</p>
    </div>
    `,
    )
    .join('');
};

const getGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'D';
};

// 보너스 점수 추가 이벤트
document.getElementById('addBonusBtn').addEventListener('click', () => {
  // 모든 학생에게 5점 추가 (단, 100점 초과 불가)
  students.forEach((student) => {
    student.score = Math.min(student.score + 5, 100);
  });
  renderStudents(students);
});

renderStudents(students);

// students 배열: 이름 & 점수
// {~~~~~~} : 객체이다
// renderStudent() 함수 : 학생 명단을 참고하여 브라우저 화면에 그려준다
// studentList라는 재료를 넣으면 화면에 표시해준다
// 이 상황은 '조리기구'에 비유할 수 있다.

// map 명단을 하나씩 확인하여 HTML 태그로 변경하는 과정
// ${student.score >= 90 ? 'high-score' : ''}
// 너의 점수가 90점 이상이니?
// true: high-score(CSS) 배경색이 변경된다
// false: 아무것도 설정하지 않는다

// join: 위에서 map을 실행하면 여러 세트의 HTML 태그가 만들어지는데
// 그 것들을 모두 하나로 결합한다

// 이 코드는 "학생 명단을 하나씩 훑으면서(map),
// 점수에 따라 색칠 공부를 좀 하고(삼항 연산자)
// 예쁜 HTML 카드를 "
