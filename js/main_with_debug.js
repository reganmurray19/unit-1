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

    //call helper functions to fill web page
    addColumns(cityPop);
    addEvents();
};
//function to populate columns in the table
function addColumns(cityPop){

    //iterate through table rows
    $('tr').each(function(i){

      //if the index is 0, append "City Size" to the header
    	if (i == 0){

    		$(this).append('<th>City Size</th>');

      //if it is not the header row, append row with
      //descriptor of the city size
    	} else {
    		var citySize;

        //conditional statements assigning city size descriptors
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function that updates webpage based on user interaction
function addEvents(){

  //function that causes changing colors when user
  //hovers the mouse over the table
	function mouseoverme(){
		var color = "rgb(";

    //loop that generates a random RGB color value
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";
		};

    //set the css color value to the random RGB color value
		$(this).css('color', color);
	 }
  };

 //attributes the mouseover function to the table
  $('table').on('mouseover',mouseoverme);

  //function that creates an alert when a click is applied
	function clickme(){
		alert('Hey, you clicked me!');
	};

  //attributes the click function to the table
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
