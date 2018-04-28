
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  var uppercase = string
  var lowercase = string
  if(uppercase.toUpperCase === string){
    console.log("YES INDEED!")
    return "YES INDEED!"
  }
  else if(lowercase.toLowerCase === string){
    console.log("I can't hear you!")
    return "I can't hear you!"
  }
  else if(string === "I love you, Grandma."){
    console.log("I love you, too.")
    return "I love you, too."
  }
}

sayHiToGrandma("hello")
