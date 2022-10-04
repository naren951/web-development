var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(document).keypress( function(event){
    if(!started){
        started = true
        nextSequence();
    }
})

function nextSequence(){
    $("#level-title").text("Level "+ ++level);
    var randomNumber = Math.floor(Math.random()*4);
    gamePattern.push(buttonColours[randomNumber]);
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function (){
    if(started){
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        console.log(checkAnswer(userClickedPattern.length));
        if(userClickedPattern.length==level && started){
            setTimeout(nextSequence,1000);
            userClickedPattern = []
        }
    }
    
})


function playSound(color){
    new Audio("sounds/"+ color + ".mp3").play();
}

function animatePress(colour){
    $("#"+colour).addClass("pressed");
    setTimeout(
        () => $("#"+colour).removeClass("pressed"),
        100
    )
}

function checkAnswer(currentLevel){
    for (var i = 0; i < currentLevel; i++){
        if (userClickedPattern[i] !== gamePattern[i]){
            $("#level-title").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");
            playSound("wrong");
            setTimeout(
                () => $("body").removeClass("game-over"),
                200
            );
            startOver();
        };
      }
      return true;
}

function startOver(){
    started=false;
    level = 0;
    gamePattern = []
    userClickedPattern = []
}
