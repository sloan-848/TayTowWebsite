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
	var pages = ["index","events","movieList","committees","minutes"];
  var pageDictionary = {};
  pageDictionary["index"] = "Home";
  pageDictionary["events"] = "Events";
  pageDictionary["movieList"] = "Movie List";
  pageDictionary["committees"] = "Exec Board";
  pageDictionary["minutes"] = "Meeting Minutes";
   
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
      anchor.href = "#";
      anchor.className = "dropdown-toggle";
      anchor.innerHTML = "Exec Board<b class=\"caret\"></b>";
      anchor.setAttribute('data-toggle', 'dropdown');

      var dropdown = document.createElement("UL");

      dropdown.className = "dropdown-menu";
      var positions = ["president", "treasurer", "vice", "webmaster", "public", "special", "community", "recreation", "sustainability", "diversity", "senator", "blackrep", "ra"];
      var positionDict = {};
      positionDict["president"] = "President";
      positionDict["treasurer"] = "Treasurer";
      positionDict["vice"] = "Vice President";
      positionDict["webmaster"] = "Webmaster";
      positionDict["public"] = "Public Relations";
      positionDict["special"] = "Special Events";
      positionDict["community"] = "Community Service";
      positionDict["recreation"] = "Recreation Manager";
      positionDict["sustainability"] = "Sustainability Chair";
      positionDict["diversity"] = "Diversity Chair";
      positionDict["senator"] = "RHAC Senator";
      positionDict["blackrep"] = "BSA Representative";
      positionDict["ra"] = "RA Representative";

      for (var j = 0; j < positions.length; j++){
        var innerLI = document.createElement("LI");
        var innerAnchor = document.createElement("A");
        innerAnchor.innerHTML = positionDict[positions[j]];
        if (currentPage == "committees") {
          innerAnchor.href = "#" + positions[j];
        } else {
          innerAnchor.href = "committees.html#" + positions[j];
        }
        innerLI.appendChild(innerAnchor);
        dropdown.appendChild(innerLI);
        console.log(positionDict[positions[j]]);
      }

      li.appendChild(dropdown);

    } else {
      anchor.href = pages[i] + ".html";
      anchor.innerHTML = pageDictionary[pages[i]];
    }

    //Check active page and modify accordingly
    if (pages[i] == currentPage) {
      li.className = "active";
      anchor.href = "#";
    }

    //Finish linking
    li.appendChild(anchor);
    nav_ul.appendChild(li);
  }
  navbar.append(nav_ul);
}
