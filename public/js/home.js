$(document).ready(function() {

    window.onload = function() { 
    var miner = ""  
    var queryURL= "https://api.ethermine.org/poolStats";

    $.ajax({
        url: queryURL,
        method: 'GET'
        }).done(function(response) {
          for(var i = 0; i< response.data.length; i++){
            // $("#active-workers").append(response.data[i].activeWorkers)  
        }
        console.log(response.data)
        $("#active-workers").append(response.data.poolStats.workers)
        $("#hash-rate").append(response.data.poolStats.hashRate + "/Hours")
        $("#active-miners").append(response.data.poolStats.miners)
        $("#blocks").append(response.data.poolStats.blocksPerHour + "/Hours")
        $("#price").append("btc: " + response.data.price.btc + "    usd: " + response.data.price.usd);
        $("#last").append(response.data.minedBlocks[0].number);

        // $("#active-workers").append(response.data.poolStats.workers)
        // $("#active-workers").append(response.data.poolStats.workers)
        // $("#active-workers").append(response.data.poolStats.workers)
        });
        
    }
});