const spinReel = () => {
   let randomNumber = Math.floor(Math.random()*10);
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
        return "oaken";
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
    case 7:
        return "games";
        break;
    case 8:
        return "chainsaw";
        break;
    case 9:
        return "fairy";
        break;
   }
}
