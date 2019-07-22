function takeANumber(list, person) {
  list.push(person)
  var len = list.length;
  return `Welcome ${person} you are number ${len} in line.`
}