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
    line.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(line) {
  if(line.length===0) {
    return "There is nobody waiting to be served!"
  }
  
  else {
    var ret = "The line is currently:"
    
    for(let i=1;i<=line.length;i++) {
      ret = ret + 
    }
  }
}