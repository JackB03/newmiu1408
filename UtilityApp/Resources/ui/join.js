// Start of Current Window being opened from HOME.js
var currentWindow = Ti.UI.currentWindow;




// ********************
// MAIN BODY
// ********************

var fruit = [ 'Bananas', 'Strawberries', 'Mangos', 'Grapes' ];

var column1 = Ti.UI.createPickerColumn();

for(var i=0, ilen=fruit.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow();
    
  var label = Ti.UI.createLabel({
    color:'red',
    font:{fontSize:12,fontWeight:'bold'},
    text: fruit[i],
    textAlign:'center'
  });
  
  row.add(label);
  column1.addRow(row);
}


var picker = Ti.UI.createPicker({
  top:50,
  height:50,
  width:200,
  columns: [column1],
  selectionIndicator: true
});






	
// ********************
// ADD TO WINDOW
// ********************

currentWindow.add(picker);
