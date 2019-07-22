function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var serving = line[0]
    line.unshift()
    return "Currently serving "
  }
}