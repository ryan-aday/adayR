d3.json('https://data.cityofnewyork.us/resource/ihfw-zy9j.json').then(function(data){
    average(data);
    median(data);
    averageMale(data);
});

function average(dem, type){
    var list = [];
    for(var i = 0; i < dem.length; i ++){
	list.push(parseFloat(dem[i].black_per));
    }
    console.log(list);
    var avg = list.reduce(function(t, c, i){
	if(i == list.length -1){return t/list.length;}
	return t + c;
    });
    document.getElementById("avg").innerHTML = "Average % of Black Students in NYC Schools: " + avg +"%";;
    console.log(avg);
};

function median(dem){
    var list = [];
    for(var i = 0; i < dem.length; i ++){
	list.push(parseFloat(dem[i].black_per));
    }
    //quickselect
    list.sort(function(a, b){
	return a -b
    });
    console.log(list);
    med = list[list.length/2];

    document.getElementById("med").innerHTML = "Median % of Black Students in NYC Schools: " + med +"%";;
    console.log(med);
};

function averageMale(dem, type){
    var list = [];
    for(var i = 0; i < dem.length; i ++){
	list.push(parseFloat(dem[i].male_per));
    }
    console.log(list);
    var avgM = list.reduce(function(t, c, i){
	if(i == list.length -1){return t/list.length;}
	return t + c;
    });
    document.getElementById("avgM").innerHTML = "Average % of Male Students in NYC Schools: " + avgM +"%";;
    console.log(avgM);
};
