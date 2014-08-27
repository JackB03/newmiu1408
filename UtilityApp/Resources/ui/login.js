// start of function
function startLogin(){

// Global Variables
var mainWin;


// Main Window
mainWin = Ti.UI.createWindow({
	backgroundColor:'#1C1C1C',
	barColor: '#0B0B61',
	title: "Home",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

// Nvaigation Window
navWin = Titanium.UI.iOS.createNavigationWindow({
	window: mainWin
});
	
	
// Open Window
navWin.open();
	
// End of Functions	
}

// Exports to start the function
exports.startLogin = startLogin;