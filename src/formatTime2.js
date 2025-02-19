export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
  
export const formatTime2 = (time) => {
  const seconds = time%60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minutes = Math.floor(time/60)%60;
  const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hours = Math.floor(time/3600);
  const displayHours = hours < 10 ? `0${hours}` : `${hours}`;
  return `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
};

