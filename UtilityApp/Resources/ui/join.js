// Start of Current Window being opened from HOME.js
var currentWindow = Ti.UI.currentWindow;

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
	text: "Join Us",
	color:'#fff',
	font: {fontFamily:'Georgia', fontSize:23, fontWeight: 'bold'},
	shadowColor: '#000',
	shadowOffset: {x:2, y:2},
  	shadowRadius: 3,
	textAlign:'center'
});


// ********************
// MAIN BODY
// ********************

// Right Nav Button
var joinedTeams = Ti.UI.createButton({
	title: 'Teams',
	top:30,
	right: 15
});



// DROP DOWN MENU
var img = Ti.UI.createImageView({
    image : "http://png-5.findicons.com/files//icons/2198/dark_glass/128/1downarrow.png",
    height : 20,
    width  :20,
    right : 0
});


var selectedItem = Ti.UI.createLabel({
    text: "Select Date",
    color:"#000",
    font: {fontFamily:'Times', fontSize:12},
    width : 80,
    height : 35,
    top : 0
});
 
var viewMenu = Ti.UI.createView({
    borderWidth : 1,
    borderColor : "blue",
    height : 35,
    width : 150,
    top : 150,
    left:15,
    backgroundColor:'#fff'
});
viewMenu.addEventListener('click',function(e){
    viewContainer.show();
});
 
viewMenu.add(img);
viewMenu.add(selectedItem);
 
var arr = ["9/1/2014","9/2/2014","9/3/2014","9/4/2014","9/5/2014","9/6/2014"];
 
var viewContainer = Ti.UI.createScrollView({
    height : 150,
    width : 100,
    contentHeight : "auto",
    contentWidth : Ti.UI.SIZE,
    top : 185,
    left:15,
    visible : false,
    borderColor : "gray",
    layout : "vertical",
});
 
for (i=0;i<arr.length;i++){
    var item = Ti.UI.createLabel({
        text : arr[i],
        height : 20,
        width : 100,
        color:'#fff'
    });
    item.addEventListener('click',function(e){
        viewMenu.children[1].text=this.text;
        viewContainer.hide();
    });
    viewContainer.add(item);
}
 
currentWindow.add(viewMenu);
currentWindow.add(viewContainer);
// End OF Drop Down Menu




// *****************
// BUTTONS
// *****************

// Home Button
homeButton = Ti.UI.createLabel({
	text: "HOME",
	bottom:0,
	left:0,
	width:'50%',
	height:50,
	textAlign: 'center',
	color: "#fff",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#0B0B61",  // Changed the background color to show this is the page the user is on.
	opacity:0.9,
	borderColor:'#fff'
});

// Join Button
joinButton = Ti.UI.createLabel({
	text: "JOIN",
	bottom:0,
	right:0,
	width:'50%',
	height:50,
	textAlign: 'center',
	color: "#0B0B61",
	font: {fontFamily:'Times', fontSize:18, fontWeight: 'bold'},
	backgroundColor: "#A4A4A4",
	opacity:0.9,
	borderColor:'#fff'
});


// *****************
// FUNCTIONS
// *****************

// start of join function
function startHome(){
	
	currentWindow.close();

}


// ***************
// Event Listeners
// ***************

homeButton.addEventListener("click", startHome);





	
// ********************
// ADD TO WINDOW
// ********************

currentWindow.add(header, title, joinedTeams, homeButton, joinButton);
