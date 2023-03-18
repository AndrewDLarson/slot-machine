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


    switch (reelOneOutcome) {
        case "andy":
            reelOne.innerHTML = '<img id="andyPic1" src="./andy.jpg">';
            document.getElementById("andyPic1").style.width = "100%";
            break;
        case "kelly":
            reelOne.innerHTML = '<img id="kellyPic1" src="./kelly.png">';
            document.getElementById("kellyPic1").style.width = "100%";
            break;
        case "ryder":
            reelOne.innerHTML = '<img id="ryderPic1" src="./ryder.jpg">';
            document.getElementById("ryderPic1").style.width = "100%";
            break;
        case "new baby":
            reelOne.innerHTML = '<img id="newBabyPic1" src="./newBaby.jpg">';
            document.getElementById("newBabyPic1").style.width = "100%";
            break;
        case "nala":
            reelOne.innerHTML = '<img id="nalaPic1" src="./nala.jpg">';
            document.getElementById("nalaPic1").style.width = "100%";
            break;
        case "mufasa":
            reelOne.innerHTML = '<img id="fasPic1" src="./fas.jpg">';
            document.getElementById("fasPic1").style.width = "100%";
            break;
        case "pizza":
            reelOne.innerHTML = '<img id="pizzaPic1" src="./pizza.jpg">';
            document.getElementById("pizzaPic1").style.width = "100%";
            break;
        /*case "games":
            reelOne.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;
        case "chainsaw":
            reelOne.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;
        case "fairy":
            reelOne.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;*/
    };


    switch (reelTwoOutcome) {
        case "andy":
            reelTwo.innerHTML = '<img id="andyPic2" src="./andy.jpg">';
            document.getElementById("andyPic2").style.width = "100%";
            break;
        case "kelly":
            reelTwo.innerHTML = '<img id="kellyPic2" src="./kelly.png">';
            document.getElementById("kellyPic2").style.width = "100%";
            break;
        case "ryder":
            reelTwo.innerHTML = '<img id="ryderPic2" src="./ryder.jpg">';
            document.getElementById("ryderPic2").style.width = "100%";
            break;
        case "new baby":
            reelTwo.innerHTML = '<img id="newBabyPic2" src="./newBaby.jpg">';
            document.getElementById("newBabyPic2").style.width = "100%";
            break;
        case "nala":
            reelTwo.innerHTML = '<img id="nalaPic2" src="./nala.jpg">';
            document.getElementById("nalaPic2").style.width = "100%";
            break;
        case "mufasa":
            reelTwo.innerHTML = '<img id="fasPic2" src="./fas.jpg">';
            document.getElementById("fasPic2").style.width = "100%";
            break;
        case "pizza":
            reelTwo.innerHTML = '<img id="pizzaPic2" src="./pizza.jpg">';
            document.getElementById("pizzaPic2").style.width = "100%";
            break;
        /*case "games":
            reelTwo.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;
        case "chainsaw":
            reelTwo.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;
        case "fairy":
            reelTwo.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;*/
    };


    switch (reelThreeOutcome) {
        case "andy":
            reelThree.innerHTML = '<img id="andyPic3" src="./andy.jpg">';
            document.getElementById("andyPic3").style.width = "100%";
            break;
        case "kelly":
            reelThree.innerHTML = '<img id="kellyPic3" src="./kelly.png">';
            document.getElementById("kellyPic3").style.width = "100%";
            break;
        case "ryder":
            reelThree.innerHTML = '<img id="ryderPic3" src="./ryder.jpg">';
            document.getElementById("ryderPic3").style.width = "100%";
            break;
        case "new baby":
            reelThree.innerHTML = '<img id="newBabyPic3" src="./newBaby.jpg">';
            document.getElementById("newBabyPic3").style.width = "100%";
            break;
        case "nala":
            reelThree.innerHTML = '<img id="nalaPic3" src="./nala.jpg">';
            document.getElementById("nalaPic3").style.width = "100%";
            break;
        case "mufasa":
            reelThree.innerHTML = '<img id="fasPic3" src="./fas.jpg">';
            document.getElementById("fasPic3").style.width = "100%";
            break;
        case "pizza":
            reelThree.innerHTML = '<img id="pizzaPic3" src="./pizza.jpg">';
            document.getElementById("pizzaPic3").style.width = "100%";
            break;
        /*case "games":
            reelThree.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;
        case "chainsaw":
            reelThree.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;
        case "fairy":
            reelThree.innerHTML = '<img src="./andy.jpg">';
            document.getElementById("kellyPic").style.width = "100%";
            break;*/
    };

    /*reelOne.innerHTML = reelOneOutcome;
    reelTwo.innerHTML = reelTwoOutcome;
    reelThree.innerHTML = reelThreeOutcome;*/


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
        document.getElementById("outcome").innerHTML = "Try Again"
    }
}