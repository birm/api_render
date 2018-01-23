// include translate.js first
var doc = {records:{
  dog: {
    name: 'Woofkers',
    img: 'img/woofkers_1.png'
  },
  cat: {
    name: 'Meowlia',
    img: 'img/meowlia_4.jpg',
    phrase: 'Love to meow',
    cat_score: 5
  }
}
}

var rules = {
style: "css/style.css",
records:{
  dog: {
    name: 'h1',
    img: 'img>src'
  },
  cat: {
    name: 'h1',
    phrase: 'p',
    cat_score: 'span',
    img: 'img>src'
  }
}
}

run(doc, rules)
