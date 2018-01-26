$(document).ready(function() {

    // function databasePush() {
    // }
    window.onload = function() { 
        var miner = ""  
        var queryURL= "https://api.ethermine.org/poolStats";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            
            // console.log("Current Pool Stats: " + response.data)
            $("#active-workers").append(response.data.poolStats.workers)
            $("#hash-rate").append(response.data.poolStats.hashRate)
            $("#active-miners").append(response.data.poolStats.miners)
            $("#blocks").append(response.data.poolStats.blocksPerHour + "/Hours")
            $("#price").append("btc:฿" + response.data.price.btc +  " usd: $" + response.data.price.usd);
            $("#last").append(response.data.minedBlocks[0].number);
            $("#top-miners").append(response.data.minedBlocks[0].miners);
            $.ajax({
                url: "api/Pool",
                method: "POST",
                data: response
            });
            for (var i = 0; i < response.data.minedBlocks.length; i++) {
                var minerbutton = $("<button>");
                minerbutton.addClass("btn btn-danger minerBtn");
                minerbutton.attr("data-id", response.data.minedBlocks[i].miner);
                minerbutton.css({ "background-color": "darkgrey", "shadow": "black" });
                minerbutton.text(response.data.minedBlocks[i].miner);
                // $("#top-miners").append(response.data.minedBlocks[i].miner + "<br>");
                console.log(response.data.minedBlocks[i].miner);
                $("#top-miners").append(minerbutton);
            }
        });
        $.ajax({
            method: "GET",
            url: "api/Pool"
        }).done(function(response) {
            for (var i = 0; i < response.length; i++) {
            // console.log("Pool History: " + response[i].id);
            }
        })
    };
    $(document).on("click", '.minerBtn', function () {
        var minerId = $(this).attr("data-id");
        console.log(minerId)
        localStorage.setItem("minerId", minerId);
        window.location = "/history/" + minerId;
    });    
   //graph from branch Jonathan
   // var paramminername111 = 7ba7CE9161638c1227c32CD6326eb040571D99c6;
   // var moment = require('moment'); //including moJment.js in this script (questionable)
   var queryURL = "api/Pool";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        // console.log(response);
        console.log(response[0].createdAt);
        var xArray = [];
        var yArray = [];
        var yArray2 = [];
        var yArray3 = [];
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);
            var time = new Date(response[i].createdAt);
            // console.log(time);
            yArray.push(response[i].hashRate);
            xArray.push(time);
            // yArray2.push(response[i].averageHashrate / 1000000);
            // yArray3.push(response[i].reportedHashrate / 1000000);
            // var time2 = new Date(1516737600);
            // time2.toString("MMM dd"); 
            // console.log(time2);
        };
        console.log(yArray);
        var trace1 = {
            x: xArray,
            y: yArray,
            name: 'Hashrate'
        }
        // var trace2 = {
        //     x: xArray,
        //     y: yArray2,
        //     name: 'average'
        // }
        // var trace3 = {
        //     x: xArray,
        //     y: yArray3,
        //     name: 'recorded'
        // }
        var data = [
            trace1,
            // trace2,
            // trace3,
        ];
        var layout = {
            title: 'Line plot of hashrates',
            // paper_bgcolor: 'rgb(255, 255, 255)',
            // plot_bgcolor: 'rgb(0, 0, 0)',
            xaxis: {
                title: 'Date'
            },
            yaxis: {
                title: 'Hashrate'
            }
        };

        //console.log(xArray);
        //console.log(response.data);
        //console.log(time);
        Plotly.newPlot('graph', data, layout);
    });
});