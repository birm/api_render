
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
          result = result + render(work_doc, rules[rule_key], classlist);
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

function run(doc, rules){
  var style = "";
  if (rules.style){
    style = '<link rel="stylesheet" href="' + rules.style + '">'
  }
  return "<html>" + style + translate(doc, rules, []) + "</html>";
}

// test
