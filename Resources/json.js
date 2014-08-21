// DATA
var theData = {
	"team": {
		"information": [
			{
				"name": "Dallas Generals",
				"career": "Career:",
				"lws": 'Longest Win Streak: 5'
			},
			{
				"question": "The Tune Squad",
				"answer": "I use iMessage. The apple ID I use is 'jackb03@fullsail.edu'"
			},
			{
				"question": "Dallas Pirates",
				"answer": "Central Standard Time"
			},
			{
				"question": "Texas Cowgirls",
				"answer": "I always had a passion for web development and fell in love with the iPhone in 2007. Combine them together and you have mobile development. I want to learn everything there is about coding."
			},
			{
				"question": "Richardson Cowboys",
				"answer": "I thought I was doing well, but I still struggle a lot. Frameworks of coding and navigation windows seem to be my biggest issues."
			},
		]		
	}
};	

		
var currentWindow = Ti.UI.currentWindow;
 
var dataBorder = Ti.UI.createView({
	backgroundColor: '#fff',
	height: 1,
	top: 1
});
		
var myInformation = Ti.UI.createTableView({
	top: dataBorder.height + dataBorder.top,
	backgroundColor: "#000"
});


myInformation.style = Ti.UI.iPhone.TableViewStyle.GROUPED;


var infoSection = Ti.UI.createTableViewSection({
	headerTitle: "About Me Questions"
});



var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#2E2E2E",
			title: dataSource.title,
			barColor: '#1C1C1C',
			titleAttributes:  {
		        color:'#fff',
		        font: {fontFamily:'Times', fontSize:23},
		        shadow:{color:'#8b8be5', offset:{width:1,height:1}}
		   },
			borderWidth: 1,
			statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
	});
	
		var nav2 = Ti.UI.iOS.createNavigationWindow({
			window: detailWindow
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: '#fff',
			height: 1,
			top: 1
	});
	
		
		var career = Ti.UI.createLabel({
			text: dataSource.headingC,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 22, fontStyle: 'underline'},
			top: detailBorder.top + detailBorder.height + 75,
			textAlign: 'center',
			left: 15
			
		});
		
		var winStreak = Ti.UI.createLabel({
			text: dataSource.longWin,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 22, fontStyle: 'underline'},
			top: career.top + 5,
			textAlign: 'center',
			left: 15
			
		});
		
		
		
		var backButton = Ti.UI.createButton({
			title: " Back"
			
		});
		
	detailWindow.leftNavButton = backButton;
		
	
	var back = function(){
		nav2.close();
	};
	
	backButton.addEventListener("click", back);
	
	detailWindow.add(detailBorder, career, winStreak);
	nav2.open();
		
};


for(var i=0, j=theData.team.information.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: theData.team.information[i].name,
		headingC: theData.team.information[i].career,
		longWin: theData.team.information[i].lws,
		hasChild: true,
		backgroundColor: '#e8e8e8e',
		color: '#fff'
	});
	
	infoSection.add(theRow);
}


var myInfoSection = [infoSection];

myInformation.setData(myInfoSection);

myInformation.addEventListener("click", function(event){
	getDetail(event.source);
});


currentWindow.add(dataBorder, myInformation);




