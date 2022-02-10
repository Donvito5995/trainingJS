var whatTimeIsIt = function(angle) {
  // Your code here
 mins = angle  * 2;
  hours = Math.floor(mins / 60);
  minutes = Math.floor(mins % 60);
  if(hours == 0){hours = '12'}if(hours < 10){hours = '0' + hours}if(minutes < 10){minutes = '0' +minutes}
  return hours + ':' + minutes
}