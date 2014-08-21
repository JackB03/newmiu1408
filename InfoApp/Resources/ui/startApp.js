// Start Function
function StartApp(){


// Main Window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#000",
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
var teams = Ti.UI.createButton({
	title: 'Teams'
});


// Adding Questions button
mainWindow.rightNavButton = teams;


// Main Screen Image
var homeImage = Ti.UI.createImageView({
	image: "/images/JFLlogo_zps2ddf3b49.png",
	top: 75,
	width: 200,
	height: 250
	
});


// Bottom Bar
var bottomBar = Ti.UI.createLabel({
	text: "JFL FANTASY FOOTBALL",
	textAlign: 'center',
	color: "#fff",
	backgroundColor: "#2E2E2E",
	bottom: 0,
	height: 50,
	width: '100%'
});


var openWindow = function(){
	var newWindow = Ti.UI.createWindow({
			backgroundColor: "#000",
			title: 'Teams',
			barColor: '#1C1C1C',
			titleAttributes:  {
		        color:'#fff',
		        font: {fontFamily:'Times Roman', fontSize:28},
		        shadow:{color:'#5959c3', offset:{width:2,height:2}}
		   },
			borderWidth: 1,
			statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
			url: "/ui/teams.js"
	});
	nav.openWindow(newWindow);
};


// Event Listener
teams.addEventListener("click", openWindow);


// Add
mainWindow.add(homeImage, bottomBar);


// Open Nav Window
nav.open();




// End Of Function
}

exports.StartApp = StartApp;