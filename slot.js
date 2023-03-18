const spinButton = document.getElementById("spin");
const reelOne = document.getElementById("reelOne");
const reelTwo = document.getElementById("reelTwo");
const reelThree = document.getElementById("reelThree");
const outcome = document.getElementById("outcome");

const spinReel = () => {
   let randomNumber = Math.floor(Math.random()*7);
   switch (randomNumber) {
    case 0:
        return "andy";
        break;
    case 1:
        return "kelly";
        break;
    case 2:
        return "ryder";
        break;
    case 3:
        return "new baby";
        break;
    case 4:
        return "nala";
        break;
    case 5:
        return "mufasa";
        break;
    case 6:
        return "pizza";
        break;
    /*case 7:
        return "games";
        break;
    case 8:
        return "chainsaw";
        break;
    case 9:
        return "fairy";
        break;*/
   }
}

spinButton.onclick = function() {
    let win = 0;
    const reelOneOutcome = spinReel();
    const reelTwoOutcome = spinReel();
    const reelThreeOutcome = spinReel();
    reelOne.innerHTML = reelOneOutcome;
    reelTwo.innerHTML = reelTwoOutcome;
    reelThree.innerHTML = reelThreeOutcome;
    if (reelOneOutcome === reelTwoOutcome && reelTwoOutcome === reelThreeOutcome) {
        switch (reelOneOutcome) {
            case "andy":
                win += 500;
                break;
            case "kelly":
                win += 400;
                break;
            case "ryder":
                win += 300;
                break;
            case "new baby":
                win += 200;
                break;
            case "nala":
                win += 100;
                break;
            case "mufasa":
                win += 100;
                break;
            case "pizza":
                win += 75;
                break;
        }
        document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!`
    } else if (reelOneOutcome === "pizza" || reelTwoOutcome === "pizza" || reelThreeOutcome === "pizza") {
        if (reelOneOutcome === "pizza") {
            win += 10
        };
        if (reelTwoOutcome === "pizza") {
            win += 10
        };
        if (reelThreeOutcome === "pizza") {
            win += 10
        };
        document.getElementById("outcome").innerHTML = `YOU WIN ${win}!!!`
    } else {
        document.getElementById("outcome").innerHTML = "try again"
    }
}

