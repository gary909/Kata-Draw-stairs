function drawStairs(n) {
    let myAns = "";
    let mySpace = "";
    if(n == 1){
        return "I"
    } else {
        for(let i = 0; i < n - 1; i++){
            myAns += mySpace + "I" + "\n";
            mySpace = mySpace + " ";
        }
    }
    return myAns + mySpace + "I";
}

console.log(drawStairs(1)); // "I"
console.log(drawStairs(3)); // "I\n I\n  I"
console.log(drawStairs(5)); // "I\n I\n  I\n   I\n    I"