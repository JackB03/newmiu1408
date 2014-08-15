// Start Function
function StartApp(){
	
alert("Welcome to Jack Bonner's 'About Me App'!");

// Main Window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#1C1C1C",
	barColor: '#1C1C1C',
	title: "Home",
	titleAttributes:  {
        color:'#fff',
        font: {fontFamily:'Roboto', fontSize:24},
        shadow:{color:'#5959c3', offset:{width:2,height:2}}
   },
	borderWidth: 1,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

// Navigation Window
var nav = Titanium.UI.iOS.createNavigationWindow({
	window: mainWindow
});


// Button - to - Questionss
var questions = Ti.UI.createButton({
	title: 'About Me'
});


// Adding Questions button
mainWindow.rightNavButton = questions;


var infoScreen = Ti.UI.createLabel({
	text: "Jack Bonner" + "  " + 'MIU1408',
	backgroundColor: "#5959c3",
	top: 150,
	height: 125,
	width: 225,
	borderWidth: 1,
	borderColor: '#e8e8e8',
	textAlign: 'center',
	color: '#fff'
});


var openWindow = function(){
	var newWindow = Ti.UI.createWindow({
			backgroundColor: "#000",
			title: 'Questions',
			barColor: '#1C1C1C',
			titleAttributes:  {
		        color:'#fff',
		        font: {fontFamily:'Times Roman', fontSize:28},
		        shadow:{color:'#5959c3', offset:{width:2,height:2}}
		   },
			borderWidth: 1,
			statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
			url: "json.js"
	});
	nav.openWindow(newWindow);
};


// Event Listener
questions.addEventListener("click", openWindow);


// Add
mainWindow.add(infoScreen);


// Open Nav Window
nav.open();




// End Of Function
}

exports.StartApp = StartApp;