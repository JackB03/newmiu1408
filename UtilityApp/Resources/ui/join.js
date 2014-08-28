// Start of Current Window being opened from HOME.js
var currentWindow = Ti.UI.currentWindow;

var header = Ti.UI.createLabel({
	top:0,
	height:20,
	width:'100%',
	backgroundColor:'#0B0B61'
});

var title = Ti.UI.createLabel({
	top:header.top + header.height + 0,
	height:45,
	width:'100%',
	backgroundColor:'#0B0B61',
	text: "Join Us",
	color:'#fff',
	font: {fontFamily:'Georgia', fontSize:23, fontWeight: 'bold'},
	shadowColor: '#000',
	shadowOffset: {x:5, y:5},
  	shadowRadius: 3,
	textAlign:'center'
});


// ********************
// MAIN BODY
// ********************

// Right Nav Button
var joinedTeams = Ti.UI.createButton({
	title: 'Teams',
	top:30,
	right: 15
});

// ************
// Text Fields
// ************

// First Name
var firstTextField = Titanium.UI.createTextField({
	backgroundColor:'#fff',
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	suppressReturn: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText: 'First Name',
    top: 120,
    left: 15,
    width: 120, height : 35,
    autocorrect: true
});

// Last Name
var lastTextField = Titanium.UI.createTextField({
	backgroundColor:'#fff',
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	suppressReturn: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText: 'Last Name',
    top: 120,
    right: 15,
    width: 150, height : 35,
    autocorrect: true
});


// DATE Text Field
var dateTextField = Titanium.UI.createTextField({
	backgroundColor:'#fff',
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	suppressReturn: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText: 'mm/dd/year',
    top: lastTextField.top + lastTextField.height + 25,
    left: 15,
    width: 150, height : 35,
    autocorrect: true
});


// Email Text Field
var emailTextField = Titanium.UI.createTextField({
	backgroundColor:'#fff',
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	suppressReturn: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText: 'E-Mail',
    top: dateTextField.top + dateTextField.height + 25,
    left: 15,
    width: 290, height : 35,
    autocorrect: true
});


// User Team Name
var teamTextField = Titanium.UI.createTextField({
	backgroundColor:'#fff',
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	suppressReturn: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText: 'Team Name',
    top: emailTextField.top + emailTextField.height + 25,
    left: 15,
    width: 290, height : 35,
    autocorrect: true
});


// *****************
//     BUTTONS
// *****************

// Send Button
var sendButton = Ti.UI.createLabel({
	text: "SEND",
	top:teamTextField.top + teamTextField.height + 35,
	left:35,
	right: 35, 
	height:45,
	textAlign: 'center',
	color: "#000",
	font: {fontFamily:'Georgia', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#31B404",  
	opacity:1.0,
	borderColor:'#fff'
});


// Home Button
var homeButton = Ti.UI.createLabel({
	text: "HOME",
	bottom:0,
	left:0,
	width:'50%',
	height:50,
	textAlign: 'center',
	color: "#fff",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#0B0B61",  // Changed the background color to show this is the page the user is on.
	opacity:0.9,
	borderColor:'#fff'
});

// Join Button
var joinButton = Ti.UI.createLabel({
	text: "JOIN",
	bottom:0,
	right:0,
	width:'50%',
	height:50,
	textAlign: 'center',
	color: "#0B0B61",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#A4A4A4",
	opacity:0.9,
	borderColor:'#fff'
});




// *****************
// FUNCTIONS
// *****************

// start of join function
function startHome(){
	
	currentWindow.close();

}


// Go to Joined Teams Page
function startTeams(){
	var teamWin = Ti.UI.createWindow({
	backgroundColor:'#1C1C1C',
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
	url:"/ui/teams.js"
});

teamWin.open();

}



// ***************
// Event Listeners
// ***************

// Send Button EL -- Added Control and Confirmations for the User! 
sendButton.addEventListener('click', function(e){
  var dialog = Ti.UI.createAlertDialog({
    cancel: 1,
    buttonNames: ['Cancel', 'Confirm'],
    message: 'Would You Like To Submit Your Team?',
    title: 'Submit'
  });
  dialog.addEventListener('click', function(e){
    if (e.index === e.source.cancel){
    	alert('Thank You! Your Team Has Been Submitted For Review.');
    } else {
      var cancelDialog = Ti.UI.createAlertDialog({
    		cancel: 1,
   			buttonNames: ['Yes', 'No'],
   	 		message: 'Are you sure you want cancel your submission?',
    		title: 'Cancel Submission'
  		});
  		cancelDialog.addEventListener('click', function(e){
    if (e.index === e.source.cancel){
      alert('Please Submit Your Team');
    } else {
    	alert("You Have Cancelled Your Submission");
    } 
    
  });
  cancelDialog.show();
  }
  
  });
  dialog.show();
});
// End Of Send Button EL



// Home Button Event Listener
homeButton.addEventListener("click", startHome);


// Joined Teams Event Listener
joinedTeams.addEventListener("click", startTeams);





	
// ********************
// ADD TO WINDOW
// ********************

currentWindow.add(header, title, joinedTeams, firstTextField, lastTextField, dateTextField, emailTextField, teamTextField, sendButton, homeButton, joinButton);
