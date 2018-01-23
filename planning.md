// core rules

style is it's own tag, and it just loads all of the strings in a list, or just one

each field should be independent of depth, so you can match the schema of the json

a string renders the full text of the field within a tag of the string name,
unless it contains ->, in which case it's within an attr.
that is dog_name:p makes <p>dog_name</p> and dog_name:img->src makes <img src="dog_name"></img>

a dict resolves further, dog:{dog_name:p, dog_img:img->src} resolves dog

rendering is done in the order of the rules file

sample response from api:

records:{
  dog: {
    name: 'Woofkers',
    img: 'img/woofkers_1.png'
  },
  cat: {
    name, 'Meowlia',
    img: 'img/meowlia_4.jpg',
    phrase: 'Love to meow',
    cat_score: 5
  }
}

sample rules for above

records:{
  dog: {
    name: 'h1',
    img: 'img->src'
  },
  cat: {
    name: 'h1',
    phrase: 'p',
    cat_score: 'span',
    img: 'img->src'
  }
}

elements should have class for each thing in hierarchy, e.g. cat_score span
should have classes records, cat, and cat_score
