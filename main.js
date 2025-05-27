//Завдання 1
//Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин,
//таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

const timer = document.querySelector(".timer");
const btnStart = document.querySelector(".btn-start");

let intervalId;
timer.textContent = "1:00"; 
btnStart.addEventListener("click", function () {
  let fullTime = 60; 

  intervalId = setInterval(function () {
    fullTime--;

    if (fullTime === 30) {
      alert("Залишилось менше половини часу!");
    }
    if (fullTime <= 0) {
      clearInterval(intervalId);
      timer.textContent = "Пакєдава";
      return;
    }

    const hours = Math.floor(fullTime / 60);
    const minutes = fullTime % 60;
    timer.innerHTML = `
        <p class="minutes">
         ${hours}:${minutes}
        </p>`;
  }, 1000 * 60);
});

//Завдання 2
//Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні
// 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію,
// наприклад, робити кнопку почати знову активною.

const secundomer = document.querySelector(".secundomer");
const startBtn = document.querySelector(".btn");

let interval;
secundomer.textContent = "30:00";
startBtn.addEventListener("click", function () {
  let time = 30 * 1000; 
  startBtn.disabled = true; // блокуємо кнопку

  interval = setInterval(function () {
    time -= 10; 

    if (time <= 10 * 1000) {
      secundomer.classList.add("animate");
    }

    if (time <= 0) {
      clearInterval(interval);
      startBtn.disabled = false; 
      secundomer.textContent = "Час вийшов!";
      return;
    }

    const totalSec = Math.floor(time / 1000);
    const milisec = Math.floor((time % 1000) / 10);
    secundomer.innerHTML = `
       <p class="minutes">
         ${totalSec}:${milisec}
        </p>`;
  }, 10); // оновлення кожні 10 мс
});
