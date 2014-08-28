// DATA
var theData = {
	"team": {
		"information": [
			{
				"name": "Dallas Generals"
			},
			{
				"name": "Richardson Cowboys"
			},
			{
				"name": "Dallas Pirates"
			},
			{
				"name": "Texas Cowgirls"
			},
			{
				"name": "Dallas Reloaded"
			},
			{
				"name": "Atlanta Anteaters"
			},
		]		
	}
};	


var teamWindows = Ti.UI.currentWindow;

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
	text: "Joined  Teams",
	color:'#fff',
	font: {fontFamily:'Georgia', fontSize:21, fontWeight: 'bold'},
	shadowColor: '#000',
	shadowOffset: {x:5, y:5},
  	shadowRadius: 3,
	textAlign:'center'
});

var backButton = Ti.UI.createButton({
	title: "Back",
	top: 30,
	left: 15
});


var myInformation = Ti.UI.createTableView({
	top: title.height + title.top,
	backgroundColor: "#000",
	
});


myInformation.style = Ti.UI.iPhone.TableViewStyle.GROUPED;


var infoSection = Ti.UI.createTableViewSection({
	headerTitle: "Teams That Joined JFL"
});


// Loop for Joined Teams
for(var i=0, j=theData.team.information.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: theData.team.information[i].name,
		backgroundColor: '#e8e8e8e',
		color: '#000'
	});
	infoSection.add(theRow);
}

var myInfoSection = [infoSection];

myInformation.setData(myInfoSection);


// Functions
var back = function(){
		teamWindows.close();
	};
	

// Event Listeners
backButton.addEventListener("click", back);

// Add to Window
teamWindows.add(header, title, backButton, myInformation);
