//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){
    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium'; //missing camelCase
    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
	//add random color on mouseover
	$('table').mouseover(function(){
		
		var color = "rgb(";
		//generate random color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		}//missing closing brace
		$(this).css('color', color);
	});

	function clickme(){
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);