$(document).ready(function() {
    window.onload = function() { 
    var miner = ""  
    var queryURL= "https://api.ethermine.org/poolStats";

    $.ajax({
        url: queryURL,
        method: 'GET'
        }).done(function(response) {
        
        console.log(response.data)
        $("#active-workers").append(response.data.poolStats.workers)
        $("#hash-rate").append(response.data.poolStats.hashRate)
        $("#active-miners").append(response.data.poolStats.miners)
        $("#blocks").append(response.data.poolStats.blocksPerHour + "/Hours")
        $("#price").append("btc:฿" + response.data.price.btc +  " usd: $" + response.data.price.usd);
        $("#last").append(response.data.minedBlocks[0].number);
        $("#top-miners").append(response.data.minedBlocks[0].miners);

        for(var i = 0; i< response.data.minedBlocks.length; i++){
                var minerbutton = $("<button>");
                minerbutton.addClass("btn btn-danger");
                minerbutton.attr("data-id", response.data.minedBlocks[i].miner);
                minerbutton.text(response.data.minedBlocks[i].miner);
                // $("#top-miners").append(response.data.minedBlocks[i].miner + "<br>");
                console.log(response.data.minedBlocks[i].miner);
                $("#top-miners").append(minerbutton);
            }
        });     
    }
});