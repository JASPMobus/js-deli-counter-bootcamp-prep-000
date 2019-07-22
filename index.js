function takeANumber(list, person) {
  list.push(person)
  var len = list.length;
  return `Welcome, ${person}. You are number ${len} in line.`
}