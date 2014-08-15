alert("Welcome to Jack Bonner's 'About Me App'!");

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

var nav = Titanium.UI.iOS.createNavigationWindow({
	window: mainWindow,
});

nav.open();

