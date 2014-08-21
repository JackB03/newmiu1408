
var DPMoreWindow = Ti.UI.currentWindow;

var moreBorder = Ti.UI.createView({
	backgroundColor: '#A4A4A4',
	height: 1,
	top: 1
});

var rosterHeader = Ti.UI.createLabel({
	text: "STAR PLAYERS",
	color: "#B40404",
	shadowColor:'#000', 
	shadowOffset:{width:3,height:3},
	top: moreBorder.top + moreBorder.height + 0,
	textAlign: 'center',
	height: 35,
	width: '100%',
	backgroundColor: "#A4A4A4"
});

// Roster Table
var sectionQB = Ti.UI.createTableViewSection({ headerTitle: 'Quarterback'});
sectionQB.add(Ti.UI.createTableViewRow({ title: 'Mathew Stafford', backgroundColor: '#585858', color:"#fff"}));

var sectionRB = Ti.UI.createTableViewSection({ headerTitle: 'Running Back' });
sectionRB.add(Ti.UI.createTableViewRow({ title: 'Marshawn Lynch', backgroundColor: '#585858', color:"#fff" }));

var sectionWR = Ti.UI.createTableViewSection({ headerTitle: 'Wide Receiver' });
sectionWR.add(Ti.UI.createTableViewRow({ title: 'Demaryius Thomas', backgroundColor: '#585858', color:"#fff" }));

var sectionTE = Ti.UI.createTableViewSection({ headerTitle: 'Tight End' });
sectionTE.add(Ti.UI.createTableViewRow({ title: 'Rob Gronkowski', backgroundColor: '#585858', color:"#fff" }));


var table = Ti.UI.createTableView({
  data: [sectionQB, sectionRB, sectionWR, sectionTE],
  height: 267,
  top: rosterHeader.top + rosterHeader.height + 0
});



// Location Label
var locationHeader = Ti.UI.createLabel({
	text: "LOCATION",
	color: "#B40404",
	shadowColor:'#000', 
	shadowOffset:{width:3,height:3},
	bottom: 100,
	textAlign: 'center',
	height: 35,
	width: '100%',
	backgroundColor: "#A4A4A4"
});


// Location Of Team
var Map = require('ti.map');

var mapview = Map.createView({
    mapType: Map.HYBRID_TYPE,
    region: {latitude:32.747722, longitude:-97.092615}, 
    animate:true,
    regionFit:true,
    height: 100,
    width:"100%",
    bottom: 0
    
});


// Team Song
var player = Ti.Media.createSound({
	url:"http://www.ultimateflagfootballleague.com/media/Ted_Nugent_-_Strangle_Hold_1_.mp3", 
	volume: 0.1
	});
player.play();



DPMoreWindow.add(moreBorder, rosterHeader, table, locationHeader, mapview);
