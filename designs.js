
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
	//Getting color
	var color = $("#colorPicker").val();
	//Applying it to the TD
	$(this).css("background-color", color);
}


$(function(){
	//Adding listeners to events
	$("#submit_button").click(makeGrid);
	$("#pixel_canvas").on('click', 'td', paintSquare);
});