/**
 * @author Annie P Waldman
 */

//loading function teaDiv
function teaDiv(){
	//alerting me that I got to document ready and the function was loaded at document ready.
	console.log("I got to document ready!");

	var myDiv = $("<div>");
	//creating a new div.
	$(myDiv).html("This is my new div");
	//putting some code in my div saying this is my new div
	//adding my div to tea container in my html
	$("#teaContainer").append(myDiv);

	//loading json tea_types
	$.get("tea_types.json", loadedJSON, "json");

}



//Adding document ready and also telling it to load teaDiv function.
$( document ).ready(teaDiv);