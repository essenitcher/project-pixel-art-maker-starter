// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

 //Draw a table
 var rows, cols, table;
 
 rows = $("#input_height").val();
 cols = $("#input_width").val();

 //get the table
 table = $("#pixel_canvas");
 
 //empty the table
 table.empty();
 
 for(var r = 0; r < rows; r++){
	 table.append("<tr id=\"r" + r + "\"></tr>");
	 var curRow = $("#r" + r);
	 //Add row
	 for(var c = 0; c < cols; c++){
		 //add column
		  curRow.append("<td id=\"r" + r + "-" +c + "\"></td>");
	 }
 }
}

function paintSquare(){
	var color = $("#colorPicker").val();
	//if it has a color already, clicking it will remove it
	var style  = $(this).attr("style");
	if(style != null){
		//remove the attribute style
		$(this).removeAttr("style");
	}else{
		$(this).css("background-color", color);
	}
	
}


$(function(){
	$("#submit_button").click(makeGrid);
	$("#pixel_canvas").on('click', 'td', paintSquare);
});