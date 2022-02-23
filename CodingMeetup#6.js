function findSenior(list) {
  let max  = Math.max(...list.map(k=>k.age))
  return list.filter(k=>k.age === max)
  // thank you for checking out the Coding Meetup kata :)
}