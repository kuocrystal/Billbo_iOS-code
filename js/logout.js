$(function() {

	Parse.$= jQuery;

 	//initialize( applicationId, javaScriptKey, masterKey ) 
	Parse.initialize("dhymIKr5ubNifHO8nnNOLiA2IQe1I9qIuq7Tv9FL", "hzMjPDXhaJ91HE0xbUDt0opgqiTt9FodPe1eZUgl");
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	//  testObject.save({foo: "bar2"}).then(function(object) {
	//   alert("welcome");
	// }); 

	$('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
        }

        // do redirect
        //window.location.replace("Sign_In.html");
        // or

        window.location = "index.html";
    });

});

