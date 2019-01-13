// <!-- add jquery library y css relative pathway -->
//     <!-- add in crystal image - use css .crystal-image to make it smaller
//     add in link to jquery llibrary -->e

    // <script type ="text/javascript" src="https.//cdnjs.cloudflare.com/ajax/libs"
    // need to create a for loop to create crystals for every number options 
    // for each iteration, create crystal with attributes, append, etc 
    // for (var i + 0)
$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    var targetNumber = Math.floor(Math.random()*102+19);
    var runningTotal = 0;

    $("#targetNumber").text(targetNumber);
    var pinkValue = Math.floor(Math.random() * 11 + 1);
    var diamondValue = Math.floor(Math.random() * 11 + 1);
    var whiteValue = Math.floor(Math.random() * 11 + 1);
    var purpleValue = Math.floor(Math.random() * 11 + 1);

    $("#runningTotal").text(runningTotal);

    function reset() {
        targetNumber = Math.floor(Math.random()*102+19);
        runningTotal = 0;

        $("#targetNumber").text(targetNumber);
        pinkValue = Math.floor(Math.random() * 11 + 1);
        diamondValue = Math.floor(Math.random() * 11 + 1);
        whiteValue = Math.floor(Math.random() * 11 + 1);
        purpleValue = Math.floor(Math.random() * 11 + 1);

        $("#runningTotal").text(runningTotal);
    }

    function checkItOut() {
        $("#runningTotal").text(runningTotal);
        if (runningTotal === targetNumber) {
            wins++;
            $("#wins").text(wins);
            alert("You win!");
            reset();
        }
    
        else if (runningTotal >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            alert("You lose!");
            reset();
        }
    }

    $("#one").on("click", function() {
        // each time the user clicks the crystal the counter goes up by 1. You can change this number (more points?)
        runningTotal += diamondValue;
        checkItOut();
    });

    $("#two").on("click", function() {
        // each time the user clicks the crystal the counter goes up by 1. You can change this number (more points?)
        runningTotal += pinkValue;
        $("#totalScore").text(runningTotal);
        checkItOut();
    });

    $("#three").on("click", function() {
        // each time the user clicks the crystal the counter goes up by 1. You can change this number (more points?)
        runningTotal += purpleValue;
        $("#totalScore").text(runningTotal);
        checkItOut();
    });

    $("#four").on("click", function() {
        // each time the user clicks the crystal the counter goes up by 1. You can change this number (more points?)
        runningTotal += whiteValue;
        $("#totalScore").text(runningTotal);
        checkItOut();
    });
        // clicking the button triggers an alert message
    // alert("Your new score is " + counter + " !");
});
