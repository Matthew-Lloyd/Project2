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
            // console.log(response.data[143]); 
            
          
        });//ending of first ajax calls
        var miner = localStorage.getItem("minerId");  
        var queryURL= "https://api.ethermine.org/miner/" + miner + "/history";
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .done(function (response) {
              var xArray = [];
              var yArray = [];
              var yArray2 = [];
              var yArray3 = [];
              for (var i = 0; i < response.data.length; i++) {
       
                // console.log(data);
               
                var time = new Date(response.data[i].time * 1000);
               //  console.log(time);
                yArray.push(response.data[i].currentHashrate / 1000000);
                // xArray.push(time);
                xArray.push(time);
                yArray2.push(response.data[i].averageHashrate / 1000000);
                yArray3.push(response.data[i].reportedHashrate / 1000000);
               //  console.log(xArray);
               //  console.log(yArray);
               //  console.log(yArray2);
               //  console.log(yArray3);
                // var time2 = new Date(1516737600);
                // time2.toString("MMM dd"); 
                // console.log(time2);
              };
              var trace1 = {
                x: xArray,
                y: yArray,
                name: 'current'
              }
       
              var trace2 = {
                x: xArray,
                y: yArray2,
                name: 'average'
              }
       
              var trace3 = {
                x: xArray,
                y: yArray3,
                name: 'recorded'
              }
       
              var data = [
                trace1, 
                trace2, 
                trace3,
             ];
       
              var layout = {
                title: 'Line plot of hashrates',
                paper_bgcolor: 'rgb(255, 223, 0)',
                plot_bgcolor: 'rgb(255, 255, 255)',
                xaxis: {
                  title: 'Date'
                },
                yaxis: {
                  title: 'Hashrate'
                }
              };
             
              // console.log(xArray);
           //    console.log(response.data);
              //  console.log(time);
              Plotly.newPlot('graph', data, layout);
            });
    };
});