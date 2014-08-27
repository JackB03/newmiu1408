function startHome(){

// Global Variables
var mainWin, mainImage, welcome, mainText, homeButton, joinButton;

// Main Window
mainWin = Ti.UI.createWindow({
	backgroundColor:'#1C1C1C',
	barColor: '#0B0B61',
	title: "The JFL",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});



// ********************
// MAIN BODY
// ********************

// Background Image
mainImage = Ti.UI.createImageView({
	image:'/images/JFLlogo.png',
	top:0,
	height: Titanium.UI.FILL,
	width:'100%',
	opacity:1.0
});

// Welcome Title
welcome = Ti.UI.createLabel({
	text: "Welcome To The JFL",
	top:100,
	width:'100%',
	height:50,
	textAlign: 'center',
	color: "#FE2E2E",
	font: {fontFamily:'Times', fontSize:23, fontWeight: 'bold'},
	backgroundColor: "#2E2E2E",
	opacity:0.9
});

// Text Below Title
mainText = Ti.UI.createLabel({
	text: "Please Join The JFL Today!",
	top:welcome.top + welcome.height + 0,
	width:'100%',
	height:25,
	textAlign: 'center',
	color: "#FE2E2E",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#2E2E2E",
	opacity:0.9
});




// *****************
// BUTTONS
// *****************

// Home Button
homeButton = Ti.UI.createLabel({
	text: "HOME",
	bottom:0,
	left:0,
	width:'50%',
	height:50,
	textAlign: 'center',
	color: "#0B0B61",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#A4A4A4",  // Changed the background color to show this is the page the user is on.
	opacity:0.9,
	borderColor:'#fff'
});

// Join Button
joinButton = Ti.UI.createLabel({
	text: "JOIN",
	bottom:0,
	right:0,
	width:'50%',
	height:50,
	textAlign: 'center',
	color: "#fff",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#0B0B61",
	opacity:0.9,
	borderColor:'#fff'
});




// *****************
// FUNCTIONS
// *****************

// start of join function
function startJoin(){

// Join Main Window
var newWin = Ti.UI.createWindow({
	backgroundColor:'#1C1C1C',
	barColor: '#0B0B61',
	title: "Join",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
	url:"/ui/join.js"
});

newWin.open();

}


// ***************
// Event Listeners
// ***************

joinButton.addEventListener("click", startJoin);



// ADD
// mainImage.add(buttonBar);
mainWin.add(mainImage, welcome, mainText, homeButton, joinButton);

// Open Window
mainWin.open();

	
// End of Functions	
}

// Exports to start the function
exports.startHome = startHome;
	
	
	
	
	
	
	
