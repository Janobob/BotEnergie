var speed = 2000;
var running = true;
var selectMode = ".tickets"; //".partner-price" for lipo

var answerArray = [
    "Hallenstadion, Zürich",
    "22. November 2019",
    "Twitter",
    "Swisscom",
    "«The Game Is On»",
    "Über 1'000'000",
    "Mark Forster",
    "VIP",
    "#esn19",
    "Möbel",
    "Energy Star Night findet trotzdem statt",
    "Ein Schweizer Musikpreis",
    "Oktober 2016",
    "Energy Star Night 2018",
    "Usgang.ch",
    "Graubünden",
    "Energy Stars For Free",
    "Die siebzehnte",
    "Lo & Leduc",
    "Hiltl Club, Zürich",
    "Mex",
    "Reinach (Kanton Basel)",
    "gewinnen",
    "Die tiefsten Preise der Schweiz",
    "Orange",
    "Jastina Doreen, Ex-Miss Schweiz",
    "Twitter",
    "Stefanie Heinzmann",
    "14'000",
    "Winterthur und Villeneuve",
    "2",
    "Über 1'000'000",
    "dem Schweizerischen Roten Kreuz",
    "Hallenstadion, Zürich",
    "Vorhänge individuell konfigurieren",
    "2003",
    "22. November 2019",
    "E-Mail",
    "Um 19:00 Uhr",
    "im Radio, auf der Event-Website und über Social Media",
    "22",
    "das zweitgrösste Musik-Event der Schweiz!"
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
	$(selectMode).trigger("click");
        await sleep(speed);
        var circles = document.getElementsByClassName("circle");
        $($(circles)[getRandomInt($(circles).length)]).find("img").trigger("click");
        await sleep(speed);
        $(".pulse").trigger("click");
        await sleep(speed);
        if($("#lose").length == 1){
            $("#lose").trigger("click");
        }
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
