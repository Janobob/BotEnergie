var speed = 200;
var running = true;

var answerArray = [
    "One Republic",
    "1300",
    "gewinnen",
    "XTRA-Circle",
    "Twitter",
    "E-Mail",
    "2014",
    "450 Tonnen",
    "70 Meter",
    "Die sechste",
    "Lo & Leduc",
    "im Radio, auf der Website und über Social Media",
    "40’000",
    "Energy Air findet trotzdem statt",
    "Im Privatjet",
    "Stade de Suisse, Bern",
    "Bastian Baker",
    "60",
    "Um 17 Uhr",
    "250",
    "Alvaro Soler",
    "14",
    "...der unter freiem Himmel stattfindet.",
    "Averdeck",
    "Sein Mami",
    "Eine komplett weisse Garderobe",
    "BSC Young Boys",
    "7. September 2019"
];

function selectRightAnswer(){
    answerArray.forEach(function(answer) {
        if($(document.getElementById(answer)).length == 1){
            $(document.getElementById(answer)).prop("checked", true).trigger("click");
        }
    });
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
        var circles = document.getElementsByClassName("circle");
        $($(circles)[getRandomInt($(circles).length)]).find("img").trigger("click");
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
