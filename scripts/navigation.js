 $(document).ready(function() {
	var allItems = [];
	(function() {
	  
	$.getJSON(  "navlinks.json", {
	    format: "json"
	  })
	    .done(function( data ) {	    	
	    	var topnav = "";
	    	var html = "";
			var html2 = "";
			var html3 = "";
	      	$.each( data.navitems, function(item){
	      				switch(this.section) {
      					case 0: 
	                 		topnav += "<li>";
	  							topnav += "<a href='" + this.url + "'>" + this.linktext + "</a>";
	   						topnav += "</li>\r";
	   						break;
	      				case 1: 
	                 		html += "<li>";
	  							html += "<a href='" + this.url + "'>" + this.linktext + "</a>";
	   						html += "</li>\r";
	   						break;
	   					case 2: 
	   						html2 += "<li>";
	  							html2 += "<a href='" + this.url + "'>" + this.linktext + "</a>";
	   						html2 += "</li>\r";
	   						break;
	   					case 3:
	   						html3 += "<li>";
	  							html3 += "<a href='" + this.url + "'>" + this.linktext + "</a>";
	   						html3 += "</li>\r";
								break;
	   					}
	             });
	             $("#section0").append(topnav);	             
	             $("#section1").append(html);
	             $("#section2").append(html2);
	             $("#section3").append(html3);
	      })
		    .fail(function( jqXHR, textStatus, error) {
	    		var err = textStatus + ", " + error;
	    		console.log( "Request Failed: " + err );
		    });
	    
	})();
		
});