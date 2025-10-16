const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {
  const val = password.value;
  let score = 0;

  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[@$!%*?&]/.test(val)) score++;

  if (score === 0) {
    strength.textContent = "";
  } else if (score <= 1) {
    strength.textContent = "كلمة المرور ضعيفة 😕";
    strength.style.color = "red";
  } else if (score === 2) {
    strength.textContent = "كلمة المرور متوسطة 🙂";
    strength.style.color = "orange";
  } else {
    strength.textContent = "كلمة المرور قوية 🔒";
    strength.style.color = "green";
  }
});
