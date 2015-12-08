$(function() {
	//important set up for import Parse
	Parse.$ = jQuery;
	Parse.initialize("dhymIKr5ubNifHO8nnNOLiA2IQe1I9qIuq7Tv9FL", "hzMjPDXhaJ91HE0xbUDt0opgqiTt9FodPe1eZUgl");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();

	testObject.save(
	{
		foo:"bar"
	}).then(function(Object) {
		alert("Welcome to Billbo!!");
	}
	);


	$('.form-log').on('submit',function(login) {
		
		login.preventDefault();

		var data = $(this).serializeArray();
		username = data[0].value;
		password = data[1].value;

		Parse.User.logIn(username, password, {
			success: function(user) {
				alert('Hello! It is a great time to manage your account!');
				//do something if user logged in correctly
				//var query = new Parse.Query("Instachecks");

				var dataload=new Parse.Query(Parse.Object.extend("Instachecks"));
 				dataload.find({
		          success:function(results){

		          	  setTimeout(function() {
    					$('#carousel-example-generic').fadeOut('fast');
						}, 99);
		            

 						for (var i = 0; i < results.length; i++) { 
					        
					        var object = results[i];

				                (function($) {
				                    $('#load').append('<div class="imggp">' + '<img id="simg" src="' + object.get('img') + '">' + '</div>');

				                    $('#load').append('<div class="l1">' +' Visited on ' + object.get('createdAt') + '</div>'); 

				                	$('#load').append('<div class="l2">' + '<em>' + ' My Order: ' + '</em>' + '<li id="loadlist"> ' + object.get('item') + '</li> ' + '</div>'); 

 									$('#load').append('<div class="l3">' + ' Price: ' + '<strong>' + '$ ' + object.get('price') + '</strong>' + ' + ' + ' Tax: ' + '<strong>' + '$ ' + object.get('tax') + '</strong>' + '</div>');

 									$('#load').append('<div class="l4">' + ' Gratuity: ' + '<strong>' + '$ ' + object.get('tip') + '</strong>' + '</div>'); 

 									$('#load').append('<div class="l5">' + '<em>' + ' Total Paid: ' + '</em>' + '<strong>' + '$ ' + object.get('total') + '</strong>' + '</div>'); 


				                 })(jQuery);	

 								 } }, 

					error: function(object, error) {
						console.log(error);
					}
				});
			},

			error: function(object, error) {
				alert('Oops! Something goes wrong. Please check your user name or password again!');
			}
		});

	});
	
});