$("#log").click(function(event){

		var name = $("#usr").val();

		var password = $("#pwd").val();

		var json = $.getJSON( "js/data.json", function() {
  			console.log( "success" );
		});


		$.getJSON('js/data.json', function(data){

			if (name == data.user && password == data.pass) {
		   	alert("Welcome to Billbo! It is a great time to manage your account!");
		   }

		   else {
		   	alert("Oops! Something goes wrong. Please check your user name or password again!");
		   }
		});


});