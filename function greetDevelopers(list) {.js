function greetDevelopers(list) {
  var kek = list;
  kek.forEach((item) => item.greeting = 'Hi ' + item.firstName + ', what do you like the most about ' + item.language);
  return kek;
}
function greetDevelopers(list) {
  for (var i = 0; i < list.length; i++) {
    list[i]['greeting'] = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?';
  }
  return list;
}