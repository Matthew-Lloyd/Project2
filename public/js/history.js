$(document).ready(function() {

    window.onload = function() { 
    var miner = ""  
    var queryURL= "https://api.ethermine.org/miner/" + "0x871e7fB3df7Ad4c3de798cfAF459a2FECDC2A7aE" + "/history";

    $.ajax({
        url: queryURL,
        method: 'GET'
        }).done(function(response) {
            console.log(response)
            });

    }
});