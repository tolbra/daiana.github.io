const countdown = () => {
    const countDate = new Date("May 20, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = now - countDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30.44; // Average month length in days

    const months = Math.floor(gap / month);
    const weeks = Math.floor((gap % month) / week);
    const days = Math.floor((gap % week) / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('months').innerText = months;
    document.getElementById('weeks').innerText = weeks;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

setInterval(countdown, 1000);
