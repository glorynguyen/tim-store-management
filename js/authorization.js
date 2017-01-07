// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response, resolve, reject) {
  debugger
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI(resolve, reject);
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        unLoggedUser(true);
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        unLoggedUser(true);
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState(resolve, reject) {
  document.resolve = resolve;
  document.reject = reject;
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response, resolve, reject);
  });
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '1724083217804216',
        cookie: true, // enable cookies to allow the server to access 
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.5' // use graph api version 2.5
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI(resolve, reject) {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        /*if (response.id === "1012554222125674") {
          debugger*/
            if (document.resolve) {
              document.resolve();
            }
            console.log('Successful login for: ' + response.name);
            var status = document.getElementById('status');
            if (status) {
              /*status.innerHTML =
                'Thanks for logging in, ' + response.name + '!';*/
            }
            unLoggedUser(false);
        /*} else {
            document.getElementById('status').innerHTML =
                'User invalid';
            unLoggedUser(true);
        }*/
    });
}

function unLoggedUser(isTrue) {
    var nav = document.getElementById("myNavbar");
    if (nav) {
        if (isTrue) {
            nav.style.visibility = 'hidden';
            if (window.location.href !== "http://glorynguyen.github.io/") {
              window.location = 'http://glorynguyen.github.io/';
            }
        } else {
            nav.style.visibility = 'inherit';
        }
    }
}