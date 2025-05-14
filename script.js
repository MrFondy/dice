function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult").value;
    const diceImage = document.getElementById("diceImage").value;

    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1
        // console.log(value); use this to check
        values.push(value);
        images.push(`<img src="img/`)
    }

    diceResult.textContent = `dice:${values.join(',')}`;//play the game. ht roll dice to see diceImage.innerHTML = images.join("");
}