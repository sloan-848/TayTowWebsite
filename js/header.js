/* 
  * To Title Case 2.1 – http://individed.com/code/to-title-case/
  * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 */

String.prototype.toTitleCase = function(){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return this.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

function addLine(destination, source){
	destination += source + "\n";
}
function fillHeader(currentPage){
  //Set up data
	var pages = ["index","events","photos","movieList","committees","minutes"];
  var pageDictionary = {};
  pageDictionary["index"] = "Home";
  pageDictionary["events"] = "Events";
  pageDictionary["photos"] = "Photos";
  pageDictionary["movieList"] = "Movie List";
  pageDictionary["committees"] = "Exec Board";
  pageDictionary["minutes"] = "Meeting Minutes";


	var head = "";
  var navbar = $( "#navbarGen" );
  navbar.className = "collapse navbar-collapse";

  var nav_ul = document.createElement("UL");
  nav_ul.className = "nav navbar-nav";
  
  for(var i = 0; i < pages.length; i++){
    var li = document.createElement("LI");
    var anchor = document.createElement("A");
    //Special Case for committees page
    if (pages[i] == "committees"){
      li.className = "dropdown";
      var dropdown = document.createElement("");
      dropdown.href = "committees.html";
      dropdown.className = "dropdown-toggle";
      dropdown.innerHTML = "Exec Board<b class=\"caret\"></b>";
      //Need to add "data-toggle="dropdown""
    } else {
      var li = document.createElement("LI");
      var anchor = document.createElement("A");
      anchor.href = pages[i] + ".html";
      anchor.innerHTML = pageDictionary[pages[i]];
    }

    //Check active page and modify accordingly
    if (pages[i] == currentPage) {
      console.log("Page " + pages[i] + " is active.");
      li.className = "active";
      anchor.href = "#";
    }

    //Finish linking
    li.appendChild(anchor);
    nav_ul.appendChild(li);
  }
  navbar.append(nav_ul);
}
