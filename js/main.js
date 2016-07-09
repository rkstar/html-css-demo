var greetings = [
  "merry xmas!",
  "i <3 santa",
  "better be good...",
  "rudolph is real",
  "hi mom!"
]

function getRandomGreeting(){
  var max = greetings.length - 1
  var min = 0
  var idx = Math.floor(Math.random() * (max - min + 1) + min)

  return greetings[idx]
}

function switchGreeting(){
  var p = document.getElementById('greeting_words')
  p.innerHTML = getRandomGreeting()
}