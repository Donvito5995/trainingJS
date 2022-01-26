function rpsls(p1, p2){
  if (p1 === p2 ) return 'Draw!';
  if (p1 === 'scissors') {
    if ( p2 ==='paper' || p2 === 'lizard') return 'Player 1 Won!';
    return 'Player 2 Won!'
  }
  if (p1 === 'paper') {
    if ( p2 === 'rock' || p2 === 'spock') return 'Player 1 Won!';
    return 'Player 2 Won!'
  }
  if (p1 === 'rock') {
    if ( p2 === 'scissors' || p2 === 'lizard') return 'Player 1 Won!';
    return 'Player 2 Won!'
  }
  if (p1 === 'lizard') {
    if ( p2 === 'paper' || p2 === 'spock') return 'Player 1 Won!';
    return 'Player 2 Won!'
  }
  if (p1 === 'spock') {
    if ( p2 === 'scissors' || p2 === 'rock') return 'Player 1 Won!';
    return 'Player 2 Won!'
  }
}