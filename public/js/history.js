// const _ =  require('lodash');

$(document).ready(function() {

    window.onload = function() { 
    var miner = localStorage.getItem("minerId");  
    var queryURL= "https://api.ethermine.org/miner/" + miner + "/history";

    $.ajax({
        url: queryURL,
        method: 'GET'
        }).done(function(response) {
            $("#graph").append("\n" + response.data[143].activeWorkers);
            $("#active-workers").append(response.data[143].activeWorkers);
            $("#shares").append(response.data[143].validShares);
            $("#hash-rates").append(response.data[143].averageHashrate);
            $("#stale-shares").append(response.data[143].staleShares);
            console.log(response.data[143]); 
        });
    };
});