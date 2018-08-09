var speed = 200;
var running = true;

function selectRightAnswer(){
    if($(document.getElementById("Bastian Baker")).length == 1){
        $(document.getElementById("Bastian Baker")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Pegasus")).length == 1){
        $(document.getElementById("Pegasus")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Stade de Suisse (Bern)")).length == 1){
        $(document.getElementById("Stade de Suisse (Bern)")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("1000 Tonnen")).length == 1){
        $(document.getElementById("1000 Tonnen")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("BSC Young Boys")).length == 1){
        $(document.getElementById("BSC Young Boys")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Seine grosse Nase")).length == 1){
        $(document.getElementById("Seine grosse Nase")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("8. September 2018")).length == 1){
        $(document.getElementById("8. September 2018")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("2014")).length == 1){
        $(document.getElementById("2014")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Kodaline")).length == 1){
        $(document.getElementById("Kodaline")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("6. September 2018")).length == 1){
        $(document.getElementById("6. September 2018")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("40’000")).length == 1){
        $(document.getElementById("40’000")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Texte schreiben und rappen")).length == 1){
        $(document.getElementById("Texte schreiben und rappen")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Luna Wedler")).length == 1){
        $(document.getElementById("Luna Wedler")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Die fünfte")).length == 1){
        $(document.getElementById("Die fünfte")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Aloe Blacc")).length == 1){
        $(document.getElementById("Aloe Blacc")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Shootingstar Berlinale 2018")).length == 1){
        $(document.getElementById("Shootingstar Berlinale 2018")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Cyril")).length == 1){
        $(document.getElementById("Cyril")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("gewinnen")).length == 1){
        $(document.getElementById("gewinnen")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("15")).length == 1){
        $(document.getElementById("15")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Tuk Tuk")).length == 1){
        $(document.getElementById("Tuk Tuk")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("XTRA-Circle")).length == 1){
        $(document.getElementById("XTRA-Circle")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("im Radio, auf der Website und über Social Media")).length == 1){
        $(document.getElementById("im Radio, auf der Website und über Social Media")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Twitter")).length == 1){
        $(document.getElementById("Twitter")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("500")).length == 1){
        $(document.getElementById("500")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("40")).length == 1){
        $(document.getElementById("40")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("La Cintura")).length == 1){
        $(document.getElementById("La Cintura")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Sein Mami")).length == 1){
        $(document.getElementById("Sein Mami")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("One Republic")).length == 1){
        $(document.getElementById("One Republic")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("1000")).length == 1){
        $(document.getElementById("1000")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Mis Huus dis Huus")).length == 1){
        $(document.getElementById("Mis Huus dis Huus")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Um 17 Uhr")).length == 1){
        $(document.getElementById("Um 17 Uhr")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("…der unter freiem Himmel stattfindet.")).length == 1){
        $(document.getElementById("…der unter freiem Himmel stattfindet.")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Dimitri Vegas & Like Mike")).length == 1){
        $(document.getElementById("Dimitri Vegas & Like Mike")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Anke Engelke")).length == 1){
        $(document.getElementById("Anke Engelke")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("E-Mail")).length == 1){
        $(document.getElementById("E-Mail")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Pink")).length == 1){
        $(document.getElementById("Pink")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Berlin")).length == 1){
        $(document.getElementById("Berlin")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("70 Meter")).length == 1){
        $(document.getElementById("70 Meter")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Eine komplett weisse Garderobe")).length == 1){
        $(document.getElementById("Eine komplett weisse Garderobe")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Im Privatjet")).length == 1){
        $(document.getElementById("Im Privatjet")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Energy Air findet trotzdem statt")).length == 1){
        $(document.getElementById("Energy Air findet trotzdem statt")).prop("checked", true).trigger("click");
    }
    else if($(document.getElementById("Deutschland")).length == 1){
        $(document.getElementById("Deutschland")).prop("checked", true).trigger("click");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function play(){
    running = true;
    while(running){
        while($("#next-question").length > 0){
            selectRightAnswer();
            await sleep(speed);
            $("#next-question").trigger("click");
            await sleep(speed);
        }
        await sleep(speed);
        $(".tickets").find(".game-button-slot").trigger("click");
        await sleep(speed);
        $(".pulse").trigger("click");
        await sleep(speed);
        if($(".game-button").length == 1){
            $(".game-button").trigger("click");
        }
        await sleep(speed);
    }
}

function stop(){
    running = false;
}
