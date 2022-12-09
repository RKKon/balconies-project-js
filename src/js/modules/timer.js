'strict mode'

const timer = (deadline) => {

  const getRemainingTime = (endTime) => {
    let seconds, minutes, hours, days;
    const total = Date.parse(endTime) - Date.parse(new Date()); // get amount of milliseconds in end time
   
    if (total <= 0) {
      seconds = 0;
      minutes = 0;
      hours = 0;
      days = 0;
    } else {
      seconds = Math.floor((total / 1000) % 60);
      minutes = Math.floor((total / (1000 * 60)) % 60);
      hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      days = Math.floor(total / (1000 * 60 * 60 * 24));
    }
    return {total, seconds, minutes, hours, days};
  }
  getRemainingTime(deadline);

  const setTimer = (endTime) => {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const timeInterval = setInterval(updateTimer, 1000);

    function updateTimer()  {
      const timer = getRemainingTime(endTime);

      const getZeroForTimer = (num) => {
        if (num >= 0 && num < 10) {
          return `0${num}`;
        } else {return num;}
      }

      seconds.innerHTML = getZeroForTimer(timer.seconds);
      minutes.innerHTML = getZeroForTimer(timer.minutes);
      hours.innerHTML = getZeroForTimer(timer.hours);
      days.innerHTML = getZeroForTimer(timer.days);

      if (timer.total <= 0) {clearInterval(timeInterval);}
    }
    updateTimer();
  }
  setTimer(deadline);

}
export default timer;