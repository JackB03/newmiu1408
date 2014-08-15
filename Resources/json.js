
// DATA
var theData = {
	"personal": {
		"information": [
			{
				"question": "What is your name?",
				"answer": "Jack Bonner"
			},
			{
				"question": "What is your chat user name?",
				"answer": "I use iMessage. The apple ID I use is 'jackb03@fullsail.edu'"
			},
			{
				"question": "What is your time zone?",
				"answer": "Central Standard Time"
			},
			{
				"question": "Why are you in the MDP?",
				"answer": "I always had a passion for web development and fell in love with the iPhone in 2007. Combine them together and you have mobile development. I want to learn everything there is about coding."
			},
			{
				"question": "Comfortable with Javascript?",
				"answer": "I thought I was doing well, but I still struggle a lot. Frameworks of coding and navigation windows seem to be my biggest issues."
			},
			{
				"question": "Comfortable with Titanium?",
				"answer": "I'm very comfortable with Titanium. Titanium is interesting, but looking at some of the other software, it's not as good. But I like how easy it makes things for the developers."
			},
			{
				"question": "Favorite sports player?",
				"answer": "Peyton Manning. I named my son after him. He is probably the best player to ever play QB in NFL history. On top of that, he is a great person and role model. "
			},
			{
				"question": "Favorite sport?",
				"answer": "It depends on which time of the year it is. NFL is my favorite when NFL starts up. Soccer is my favorite when EPL league starts. And my favorite is baseball when my son is playing."
			},
			{
				"question": "Do you have a family?",
				"answer": "I have a wife of 10 years and 3 kids. "
			},
			{
				"question": "Where do you live?",
				"answer": "Rockwall, Tx. Smallest county in Texas and used to be 'country'. But not now. It has grown so much, especially since it's right by a major lake in North Texas."
			},
			{
				"question": "Favorite TV show?",
				"answer": "Game Of Thrones. Suits is pretty good as well."
			},
			{
				"question": "What work do you do?",
				"answer": "Full-time student. I'm lucky enough to have a wife that makes enough money to allow me to go back to school."
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
	
		
		var theAnswers = Ti.UI.createLabel({
			text: dataSource.desc,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 22, fontStyle: 'italic'},
			shadowColor: '#000',
			shadowOffset: {x:1, y:1},
			shadowRadius: 2,
			top: detailBorder.top + detailBorder.height + 75,
			textAlign: 'center',
			left: 15,
			right: 15
			
		});
		
		
		
		var backButton = Ti.UI.createButton({
			title: " Back"
			
		});
		
	detailWindow.leftNavButton = backButton;
		
	
	var back = function(){
		nav2.close();
	};
	
	backButton.addEventListener("click", back);
	
	detailWindow.add(detailBorder, theAnswers);
	nav2.open();
		
};


for(var i=0, j=theData.personal.information.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: theData.personal.information[i].question,
		desc: theData.personal.information[i].answer,
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
	// console.log(event.source.title);
});


currentWindow.add(dataBorder, myInformation);




