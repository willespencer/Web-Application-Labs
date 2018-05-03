var scopes =
  'https://www.googleapis.com/auth/gmail.readonly '+
  'https://www.googleapis.com/auth/gmail.send';

function handleClientLoad() {
    // Loads the client library and the auth2 library together for efficiency.
    // Loading the auth2 library is optional here since `gapi.client.init` function will load
    // it if not already loaded. Loading it upfront can save one network request.
    gapi.load('client:auth2', initClient);
}

function initClient() {
    var scopes ='profile '+'https://www.googleapis.com/auth/gmail.readonly '+'https://www.googleapis.com/auth/gmail.send';
    // Initialize the client with API key and People API, and initialize OAuth with an
    // OAuth 2.0 client ID and scopes (space delimited string) to request access.
    gapi.client.init({
        apiKey: 'AIzaSyBuSSIMZoWDKTyTyhP2B9K83WUuaIBb_gg',
        discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
        clientId: '358136800659-u8teptrf4jcqkqnf3l60njunsqdcjhu6.apps.googleusercontent.com',
        scope: scopes
    }).then(function () {

    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    
    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

//IMPORTANT!!!!!!
function updateSigninStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
        makeApiCall();
        loadGmailApi();
    }
}

function handleAuthClick(event) {
    // Ideally the button should only show up after gapi.client.init finishes, so that this
    // handler won't be called before OAuth is initialized.
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function makeApiCall() {
    // Make an API call to the People API, and print the user's given name.
    gapi.client.people.people.get({
    resourceName: 'people/me'
    }).then(function(response) {
    console.log('Hello, ' + response.result.names[0].givenName);
    }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
    });
}

function loadGmailApi() {
    gapi.client.load('gmail', 'v1', function() {
        console.log("Loaded Gmail API");
    });
}


function sendEmail()
{
  var emailString = ""
  var memcheck = document.getElementById("memcheck").checked;
  var offcheck = document.getElementById("offcheck").checked;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if ((this.readyState == 4) && this.status == 200) {
      
      emailString = this.responseText;
      
      console.log("Got list of emails");
      console.log(emailString);
      
      var target = document.getElementById("target").value;
      
      emailString = emailString + target
      var subject = document.getElementById("subj").value;
      var body = document.getElementById("email").value;
      sendMessage(
        {
          'To': emailString,
          'Subject': subject
        },
        body,
        composeTidy
      );

      document.getElementById("subj").value = "";
      document.getElementById("target").value = "";
      document.getElementById("email").value = "";
      document.getElementById("memcheck").checked = false;
      document.getElementById("offcheck").checked = false;
      var output = document.getElementById("output")
     	output.innerHTML = "Successfully registered!"
     
      return false;
    }
     

  }
  var string = "admin.php?offcheck=" + offcheck +"&memcheck="+ memcheck;
  xhttp.open("GET", string, true);
  xhttp.send();
  
}

function sendMessage(headers_obj, message, callback)
{
  var email = '';

  for(var header in headers_obj)
    email += header += ": "+headers_obj[header]+"\r\n";

  email += "\r\n" + message;

  var sendRequest = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
    }
  });

  return sendRequest.execute(callback);
}

function composeTidy()
{
}