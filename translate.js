
/*
Render a tag; if it contains '>', then it's an attr in a self closing tag.
*/
function render(content, tag, classlist){
  if (tag.index_of(">") >= 0){
    return "<" + tag.split("<")[0] + " " + "class='" + classlist.join(" ") + "'" + tag.split("<")[1] + "='" + content + "'/>"
  }
  else{
    return "<" + tag + "class='" + classlist.join(" ") + "'" + ">" + content +  "</" + tag + ">";
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
