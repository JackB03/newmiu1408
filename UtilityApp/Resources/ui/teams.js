// DATA
var theData = {
	"team": {
		"information": [
			{
				"name": "Dallas Generals",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/290140787_zps3449a705.jpg"
			},
			{
				"name": "Richardson Cowboys",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/d77854f1-9b76-4bd6-ada2-c38e9132c6e7_zps3791788a.jpg"
			},
			{
				"name": "Dallas Pirates",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/3ea8802d-f4d9-4d4e-b930-911ce306139e_zps09dda45d.jpg"
			},
			{
				"name": "Texas Cowgirls",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/txcowgirls_zpsfd77a346.jpg"
			},
			{
				"name": "Dallas Reloaded",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/photo_zps6287d8fd.jpg"
			},
			{
				"name": "Atlanta Anteaters",
				"image": "http://www.eonline.com/eol_images/Entire_Site/2014127/rs_560x374-140227134354-1024.Tamandua-baby-Staten-Island-Zoo.2.ms.022714_copy.jpg"
			},
			{
				"name": "The Tune Squad",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/IMG_0138_zpsf4bf54e9.jpeg"
			},
			{
				"name": "Arlington Longhorns",
				"image": "http://i483.photobucket.com/albums/rr200/JackB03/30f93d3d-183d-402f-9929-ebeba6a4b6b4_zps36052758.jpg"
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

var searchBar = Ti.UI.createSearchBar({
	hintText: "Search Here",
	barColor: "#000",
	autocorrect:true
});
searchBar.setShowCancel(true, { animated: true });

var myInformation = Ti.UI.createTableView({
	top: title.height + title.top,
	backgroundColor: "#000",
	search:searchBar,
	filterAttribute:"searchFilter"
});


myInformation.style = Ti.UI.iPhone.TableViewStyle.GROUPED;


var infoSection = Ti.UI.createTableViewSection({
	headerTitle: "Teams That Joined JFL"
});


// Function for Team Images
var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#000",
			title: dataSource.title,
			barColor: '#0B0B61',
			titleAttributes:  {
		        color:'#fff',
		        font: {fontFamily:'Georgia', fontSize:21, fontWight: 'bold'},
		        shadow:{color:'#000', offset:{width:5,height:5}}
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
	
	
		var teamImage = Ti.UI.createImageView({
			image: dataSource.img,
			top: detailBorder.top + detailBorder.height + 100,
			height: 200,
			width: 200
});

		var backButton = Ti.UI.createButton({
			title: 'Back'
		});
		
		detailWindow.leftNavButton = backButton;


		var back = function(){
			nav2.close();
		};
	
	backButton.addEventListener("click", back);
		
		// Add to Window
	detailWindow.add(detailBorder, teamImage);
	nav2.open();
};

// Loop for Joined Teams
for(var i=0, j=theData.team.information.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: theData.team.information[i].name,
		img:theData.team.information[i].image,
		backgroundColor: '#e8e8e8e',
		color: '#fff',
		searchFilter:theData.team.information[i].name
	});
	
	infoSection.add(theRow);
}

var myInfoSection = [infoSection];

myInformation.setData(myInfoSection);

// ************
// Functions
// ************

var back = function(){
		teamWindows.close();
	};
	
	
	
// ****************
// Event Listeners
// ****************

// Back Button
backButton.addEventListener("click", back);

// Team Name -- to -- Image
myInformation.addEventListener("click", function(event){
	getDetail(event.source);
});

// ***************
// Add to Window
// ***************
teamWindows.add(header, title, backButton, myInformation);
