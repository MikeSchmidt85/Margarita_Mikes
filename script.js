
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const happyHour = "15 Mar 2022 12:00";

function countdown() {
    const birthdayDate = new Date(happyHour);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    hoursEl.innerHTML = (hours);
    minsEl.innerHTML = (mins);
    secsEl.innerHTML = (secs);
}

//This calls the function above
countdown();

//This counts downs every 1000 milliseconds
setInterval(countdown, 1000);