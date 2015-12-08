$(function() {

	Parse.$= jQuery;

 	//initialize( applicationId, javaScriptKey, masterKey ) 
	Parse.initialize("dhymIKr5ubNifHO8nnNOLiA2IQe1I9qIuq7Tv9FL", "hzMjPDXhaJ91HE0xbUDt0opgqiTt9FodPe1eZUgl");
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	//  testObject.save({foo: "bar2"}).then(function(object) {
	//   alert("welcome");
	// }); 

	$("#signUp").on("submit",function(e){
		e.preventDefault();
	var data = $(this).serializeArray();
	username = data[0].value;
	password = data[1].value;
	name = data[2].value;
	console.log(username, password, name);

		var user = new Parse.User();
		user.set("username", username);
		user.set("password", password);
		user.set("name", name);

		// other fields can be set just like with Parse.Object
		user.signUp(null, {
		  success: function(user) {
		    // Hooray! Let them use the app now.
		    alert('Welcome!');
		    window.location = "index.html";
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
		});

	});

});

