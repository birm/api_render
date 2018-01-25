// include translate.js first
var doc = {records:{
  dog: {
    name: 'Woofkers',
    img: 'img/woofkers_1.png',
    nicknames: ["scruffy", "fluffy"]
  },
  cat: {
    name: 'Meowlia',
    img: 'img/meowlia_4.jpg',
    phrase: 'Love to meow',
    cat_score: 5,
    nicknames: [{formal: "Sir Whiskers", informal: "Meowssss"}, {formal: "Arch Duke Whiskers", informal: "Kittennnnn"}]
  }
}
}

var rules = {
style: "css/style.css",
records:{
  dog: {
    name: 'h1',
    img: 'img>src',
    nicknames: "p"
  },
  cat: {
    name: 'h1',
    phrase: 'p',
    cat_score: 'span',
    img: 'img>src',
    nicknames: {
      formal: "b",
      informal: "i"
    }
  }
}
}

run(doc, rules)
