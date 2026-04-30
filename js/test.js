const result = document.getElementById("result");
const hours = new Date().getHours();

if (hours >= 13 && hourts < 17) {
  result.textContent = "안녕";
  result.className = "daytime";
} else {
  result.textContent = "잠잔다";
  result.className = "nighttime";
}
