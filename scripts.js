/**
 * @author Annie P Waldman
 */

function addTeaDatatoPage(TeaData){
	//console log my tea data.
	console.log (TeaData);
	var myTeaDataDiv = $("<div>");
	//add first tea name of tea data to div.
	$(myTeaDataDiv).html(TeaData.myDreamTeas[0].name);
	//console logging (not putting in div) one of the tea names.
	console.log (TeaData.myDreamTeas[1].name);
	//add new tea data to page.
	$("#teaContainer").append(myTeaDataDiv);
}

//loading function teaDiv
function teaDiv(){
	//alerting me that I got to document ready and the function was loaded at document ready.
	console.log("I got to document ready!");
	//creating a new div.
	var myDiv = $("<div>");
	//putting some code in my div saying this is my new div
	$(myDiv).html("Adding a new div to the page.");
	//adding my div to tea container in my html
	$("#teaContainer").append(myDiv);
	//loading json tea_types
	$.get("tea_types.json", addTeaDatatoPage, "json");

}


//Adding document ready and also telling it to load teaDiv function.
$( document ).ready(teaDiv);

