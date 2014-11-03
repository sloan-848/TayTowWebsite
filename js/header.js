function addLine(destination, source){
	destination += source + "\n";
}
function fillHeader(page){
	var head = "";
  var navbar = $( "#navbarGen" );
  navbar.className = "collapse navbar-collapse";

  var nav_ul = document.createElement("UL");
  nav_ul.className = "nav navbar-nav";
  navbar.appendChild(nav_ul);
  
	var pages = ["index","events","photos","movieList","committees","minutes"];
  for(var i = 0; i < len(pages); i++){
    var li = document.createElement("LI");
    li.innerHTML = pages[i];
    //The page is active
    if(page == pages[i]){
      li.className = "active";
      li.href = "#";
    } else if (page[i] == "committees"){
      li.className = "dropdown";
      var dropdown = document.createElement("");
      if (page == "committees"){
        dropdown.href = "#";
        dropdown.className = "dropdown-toggle";
        

      li.innerHTML = '<li class="dropdown"> \
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Exec Board<b class="caret"></b></a> \
                      <ul class="dropdown-menu"> \
                        <li><a href="committees.html#president">President</a></li> \
                        <li><a href="committees.html#treasurer">Treasurer</a></li> \
                        <li><a href="committees.html#vice">Vice President</a></li> \
                        <li><a href="committees.html#webmaster">Webmaster</a></li> \
                        <li><a href="committees.html#special">Special Events</a></li> \
                        <li><a href="committees.html#community">Community Service</a></li> \
                        <li><a href="committees.html#recreation">Recreation</a></li> \
                        <li><a href="committees.html#sustainability">Sustainability</a></li> \
                        <li><a href="committees.html#senator">RHAC Senator</a></li> \
                        <li><a href="committees.html#public">Public Relations</a></li> \
                        <li><a href="committees.html#diversity">Diversity</a></li> \
                        <li><a href="committees.html#blackrep">BSA Representative</a></li> \
                        <li><a href="committees.html#ra">RA Representative</a></li> \
                        </ul> \
                        </li>'
      
    } else {
      li.href = pages[i] + ".html";
    }
    nav_ul.appendChild(li);
  }
  addLine(head,'<div class="collapse navbar-collapse">');

	if(page == "committees"){
    addLine(head,'<li class="dropdown">');
    addLine(head,'<a href="#" class="dropdown-toggle" data-toggle="dropdown">Exec Board<b class="caret"></b></a>');
		addLine(head,'<ul class="dropdown-menu">');
   	addLine(head,'<li><a href="committees.html#president">President</a></li>');
		addLine(head,'<li><a href="committees.html#treasurer">Treasurer</a></li>');
		addLine(head,'<li><a href="committees.html#vice">Vice President</a></li>');
		addLine(head,'<li><a href="committees.html#webmaster">Webmaster</a></li>');
		addLine(head,'<li><a href="committees.html#special">Special Events</a></li>');
		addLine(head,'<li><a href="committees.html#community">Community Service</a></li>');
		addLine(head,'<li><a href="committees.html#recreation">Recreation</a></li>');
    addLine(head,'<li><a href="committees.html#sustainability">Sustainability</a></li>');
		addLine(head,'<li><a href="committees.html#senator">RHAC Senator</a></li>');
		addLine(head,'<li><a href="committees.html#public">Public Relations</a></li>');
		addLine(head,'<li><a href="committees.html#diversity">Diversity</a></li>');
		addLine(head,'<li><a href="committees.html#blackrep">BSA Representative</a></li>');
		addLine(head,'<li><a href="committees.html#ra">RA Representative</a></li>');
		addLine(head,'</ul>');
		addLine(head,'</li>');
	} else {
    addLine(head,'<li class="dropdown">');
    addLine(head,'<a href="#" class="dropdown-toggle active" data-toggle="dropdown">Exec Board<b class="caret"></b></a>');
		addLine(head,'<ul class="dropdown-menu">');
   	addLine(head,'<li><a href="#president">President</a></li>');
		addLine(head,'<li><a href="#treasurer">Treasurer</a></li>');
		addLine(head,'<li><a href="#vice">Vice President</a></li>');
		addLine(head,'<li><a href="#webmaster">Webmaster</a></li>');
		addLine(head,'<li><a href="#special">Special Events</a></li>');
		addLine(head,'<li><a href="#community">Community Service</a></li>');
		addLine(head,'<li><a href="#recreation">Recreation</a></li>');
    addLine(head,'<li><a href="#sustainability">Sustainability</a></li>');
		addLine(head,'<li><a href="#senator">RHAC Senator</a></li>');
		addLine(head,'<li><a href="#public">Public Relations</a></li>');
		addLine(head,'<li><a href="#diversity">Diversity</a></li>');
		addLine(head,'<li><a href="#blackrep">BSA Representative</a></li>');
		addLine(head,'<li><a href="#ra">RA Representative</a></li>');
		addLine(head,'</ul>');
		addLine(head,'</li>');
	}	

	if(page == "minutes"){
		addLine(head,'<li class="active"><a href="#">Meeting Minutes</a></li>');
	} else {
		addLine(head,'<li><a href="minutes.html">Meeting Minutes</a></li>');
	}

	addLine(head,'</ul>');
	addLine(head,'</div><!--/.nav-collapse -->');
	addLine(head,'</div>');
	addLine(head,'</div>');
	document.getElementById("navbarGen").innerHTML = head;
		/*
			Need to iterate through each page, and check if it is the current page.
			If it is, make it the active page, and change the href="#"

			Need special case for committees because of dropdown
			
		if(currentPage == page){
			addLine(head,'li class="active"><a href="#">	
            <li class="active"><a href="#">Home</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="photos.html">Photos</a></li>
            <li><a href="movieList.html">Movie List</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Exec Board<b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="committees.html#president">President</a></li>
                    <li><a href="committees.html#treasurer">Treasurer</a></li>
                    <li><a href="committees.html#vice">Vice President</a></li>
                    <li><a href="committees.html#webmaster">Webmaster</a></li>
                    <li><a href="committees.html#special">Special Events</a></li>
                    <li><a href="committees.html#community">Community Service</a></li>
                    <li><a href="committees.html#recreation">Recreation</a></li>
                    <li><a href="committees.html#sustainability">Sustainability</a></li>
                    <li><a href="committees.html#senator">RHAC Senator</a></li>
                    <li><a href="committees.html#public">Public Relations</a></li>
                    <li><a href="committees.html#diversity">Diversity</a></li>
                    <li><a href="committees.html#blackrep">BSA Representative</a></li>
                    <li><a href="committees.html#ra">RA Representative</a></li>
                </ul>
            </li>
            <li><a href="minutes.html">Meeting Minutes</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
		*/
		
}
