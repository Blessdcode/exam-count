const countdown = () => {
    const countDate = new Date("December 4, 2023 00:00:00").getTime();

    const now = new Date().getTime();
    const gap = countDate - now
    // console.log(gap)

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the above

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);



    // console.log(textSecond)

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.seconds').innerHTML = textSecond;
    const countdown= document.querySelector('.countdown')

     if (gap < 0) {
      clearInterval(countdown);
      countdown.innerHTML = `<h4 class="expired">Omo exams don end, see you next semester!!!</h4>`;
    }
}

setInterval(countdown, 1000)


