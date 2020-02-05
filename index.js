function shout(string) {
  return 'Hello'.toUpperCase()
}

function whisper(string) {
  return 'Hello'.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma() {
  var mixedCase = "I love you Grandma."
  if (mixedCase.toLowerCase() === mixedCase) {
    return "I can't hear you!"
  }
  if (mixedCase.toUpperCase() === mixedCase) {
    return "YES INDEED!"
  }
  else {
    return "I love you, too."
  }
}
