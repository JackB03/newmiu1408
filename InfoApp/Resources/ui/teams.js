// DATA
var theData = {
	"team": {
		"information": [
			{
				"name": "Dallas Generals",
				"career": "CAREER",
				"lws": 'Longest Win Streak: 5',
				"tp": 'Total Points: 4,581',
				"bcf": 'Best Conference Finish: 1st',
				"bof": 'Best Overall Finish: 1st',
				"season": 'SINGLE SEASON',
				"mw": 'Most Wins: 9',
				"his": 'Highest Score: 145',
				"cw": 'Conference Wins: 5',
				"pw": 'Playoff Wins: 4',
				"rating": "TEAM RATING",
				"star": '',
				"about": "ABOUT THE OWNER",
				"ownerInfo": 'The owner, Jack Bonner, has owned this team since the beginning of the league, back in 2010. He is also the League Commissioner. His most successful team was in 2010, when each was allowed to keep 5 players each year. His best pickup, in the draft, was Arian Foster. Foster became the top running back for the year and lead them to the Super Bowl, winning in fashion. Mr. Bonner is still a believer in the old-school ways of having 3 solid running backs.',
				"history": 'HISTORY OF THE TEAM',
				"teamInfo": 'Since 2010, the Generals have been the highest scoring team each season. They have reached the Super Bowl twice(2010, 2012) and winning one of them. They are the leader in trophy points and considered one of the best teams ever. They are known for relying on the running backs to win games and score points. In 2013, however, they failed to make it to the playoffs and having a losing season.'
			},
			{
				"name": "The Tune Squad"
				
			},
			{
				"name": "Dallas Pirates"
				
			},
			{
				"name": "Texas Cowgirls"
			},
			{
				"name": "Richardson Cowboys"
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
	headerTitle: "JFL Teams"
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
			font: {fontFamily: "helvetica", fontSize: 18, fontWeight: 'bold'},
			top: detailBorder.top + detailBorder.height + 15,
			textAlign: 'center',
			left: 15
			
		});
		
		var winStreak = Ti.UI.createLabel({
			text: dataSource.longWin,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: career.top + 22,
			textAlign: 'center',
			left: 15
			
		});
		
		var totalPoints = Ti.UI.createLabel({
			text: dataSource.totalP,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: winStreak.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var bestConference = Ti.UI.createLabel({
			text: dataSource.bestConF,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: totalPoints.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var overall = Ti.UI.createLabel({
			text: dataSource.bestOvF,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: bestConference.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var singleSeason = Ti.UI.createLabel({
			text: dataSource.headingS,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 18, fontStyle: 'italic'},
			top: overall.top + 22,
			textAlign: 'center',
			left: 15
			
		});
		
		var mostWins = Ti.UI.createLabel({
			text: dataSource.mostWin,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: singleSeason.top + 22,
			textAlign: 'center',
			left: 15
			
		});
		
		var highScore = Ti.UI.createLabel({
			text: dataSource.hS,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: mostWins.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var confWins = Ti.UI.createLabel({
			text: dataSource.confW,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: highScore.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var playoffWins = Ti.UI.createLabel({
			text: dataSource.playW,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: confWins.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var teamRating = Ti.UI.createLabel({
			text: dataSource.headingTR,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 18, fontStyle: 'italic'},
			top: playoffWins.top + 25,
			textAlign: 'center',
			left: 15
			
		});
		
		// Team Rating Star
		var star = Ti.UI.createLabel({
			text: dataSource.rating,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: teamRating.top + 12,
			textAlign: 'center',
			left: 15
			
		});
		
		var aboutOwner = Ti.UI.createLabel({
			text: dataSource.abo,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 18, fontStyle: 'italic'},
			top: star.top + 72,
			textAlign: 'center',
			// left: 15
			
		});
		
		var ownerInfo = Ti.UI.createLabel({
			text: dataSource.aboInfo,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 10, fontStyle: 'italic'},
			top: aboutOwner.top + 19,
			textAlign: 'center',
			left: 10,
			right: 10
			
		});
		
		var historyTeam = Ti.UI.createLabel({
			text: dataSource.hott,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 18, fontStyle: 'italic'},
			top: ownerInfo.top + 102,
			textAlign: 'center',
			// left: 15
			
		});
		
		var teamInfo = Ti.UI.createLabel({
			text: dataSource.hottInfo,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 10, fontStyle: 'italic'},
			top: historyTeam.top + 19,
			textAlign: 'center',
			left: 10,
			right: 10
			
		});
		
		
		
		var backButton = Ti.UI.createButton({
			title: " Back"
			
		});
		
	detailWindow.leftNavButton = backButton;
		
	
	var back = function(){
		nav2.close();
	};
	
	backButton.addEventListener("click", back);
	
	detailWindow.add(detailBorder, career, winStreak, totalPoints, bestConference, overall, singleSeason, mostWins, highScore, confWins, playoffWins, teamRating, star, aboutOwner, ownerInfo, historyTeam, teamInfo);
	nav2.open();
		
};


for(var i=0, j=theData.team.information.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: theData.team.information[i].name,
		headingC: theData.team.information[i].career,
		longWin: theData.team.information[i].lws,
		totalP: theData.team.information[i].tp,
		bestConF: theData.team.information[i].bcf,
		bestOvF: theData.team.information[i].bof,
		headingS: theData.team.information[i].season,
		mostWin: theData.team.information[i].mw,
		hS: theData.team.information[i].his,
		confW: theData.team.information[i].cw,
		playW: theData.team.information[i].pw,
		headingTR: theData.team.information[i].rating,
		rating: theData.team.information[i].star,
		abo: theData.team.information[i].about,
		aboInfo: theData.team.information[i].ownerInfo,
		hott: theData.team.information[i].history,
		hottInfo: theData.team.information[i].teamInfo,
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




