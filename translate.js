
/*
Render a tag; if it contains '>', then it's an attr in a self closing tag.
*/
function render(content, tag, classlist){
  if (tag.indexOf(">") >= 0){
    return "<div class='" + classlist.join(" ") + "'><" + tag.split(">")[0] + " " + tag.split(">")[1] + "='" + content + "'/></div>"
  }
  else{
    return "<div class='" + classlist.join(" ") + "'" + "><" + tag + ">" + content +  "</" + tag + "></div>";
  }
}

/*
Translate a json document to html/xml using provided rules
*/
function translate(doc, rules, classlist){
  var result = "";
  for(var rule_key in rules){
      var work_doc = doc[rule_key]
      if (work_doc){
        classlist = classlist.concat(rule_key);
        // if it's a string, render
        if (typeof rules[rule_key] === 'string' || rules[rule_key] instanceof String){
          result = result + "<br/>" + render(work_doc, rules[rule_key], classlist);
        }
        else {
          result = result + translate(work_doc, rules[rule_key], classlist);
        }
        // remove newest class now that we're done with it.
        classlist.pop();
      }
  }
  return result;
}

// test

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

translate(doc, rules, [])
