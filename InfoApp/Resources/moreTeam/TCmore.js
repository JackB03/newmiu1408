
var TCMoreWindow = Ti.UI.currentWindow;

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
sectionQB.add(Ti.UI.createTableViewRow({ title: 'Cam Newton', backgroundColor: '#585858', color:"#fff"}));

var sectionRB = Ti.UI.createTableViewSection({ headerTitle: 'Running Back' });
sectionRB.add(Ti.UI.createTableViewRow({ title: 'Eddie Lacy', backgroundColor: '#585858', color:"#fff" }));

var sectionWR = Ti.UI.createTableViewSection({ headerTitle: 'Wide Receiver' });
sectionWR.add(Ti.UI.createTableViewRow({ title: 'Vincent Jackson', backgroundColor: '#585858', color:"#fff" }));

var sectionTE = Ti.UI.createTableViewSection({ headerTitle: 'Tight End' });
sectionTE.add(Ti.UI.createTableViewRow({ title: 'Vernon Davis', backgroundColor: '#585858', color:"#fff" }));


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
    region: {latitude:32.925648, longitude:-96.636373},
    animate:true,
    regionFit:true,
    height: 100,
    width:"100%",
    bottom: 0
    
});


// Team Song
var player = Ti.Media.createSound({
	url:"http://www.tumblr.com/audio_file/semilunate/42309024080/tumblr_mhpype7sm51riu0s6?plead=please-dont-download-this-or-our-lawyers-wont-let-us-host-audio", 
	volume: 0.1
	});
player.play();



TCMoreWindow.add(moreBorder, rosterHeader, table, locationHeader, mapview);
