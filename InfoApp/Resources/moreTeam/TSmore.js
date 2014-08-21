
var TSMoreWindow = Ti.UI.currentWindow;

var moreBorder = Ti.UI.createView({
	backgroundColor: '#fff',
	height: 1,
	top: 1
});

// Location Of Team
var Map = require('ti.map');

var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {latitude:32.77318, longitude:-96.695137},
    animate:true,
    regionFit:true,
    height: 200,
    width:200,
    top: 5,
    right: 5
    
});




TSMoreWindow.add(moreBorder, mapview);
