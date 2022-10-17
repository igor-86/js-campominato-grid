const randomNumbers = generateRandomNumbers(100);

const wrapper = document.querySelector(".row-wrap");
console.log(randomNumbers);



//Esecuzione
const startGame = openTheGame();



for (let i = 0; i < randomNumbers.length; i++){
    const generateNumbers = randomNumbers[i];
    console.log(generateNumbers);
    //Stampo box
    const newBox = boxWrapper(generateNumbers);

    // aggiungo un event listener al sinoglo box creato
    newBox.addEventListener("click", colorBox);

    wrapper.append(newBox);

}

//Funzione che genera una lista di array ordinata da 1 a 100
function generateRandomNumbers (numberlengh) {
    const numbersRandom = [];

    while (numbersRandom.length < 100) {
        const rndNumber = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
        // Se il numero non è incluso nell'array
        //  Pusho
       
        if (!numbersRandom.includes(rndNumber)) {
            numbersRandom.push(rndNumber);
        }
        numbersRandom.sort();
        
    }
    console.log(numbersRandom);
    return numbersRandom.sort(); 
}

// funzione che stampa i box

function boxWrapper (insertNumber){
    const createBox = document.createElement("div");
    createBox.classList.add("box-wrapper");
    createBox.innerHTML = insertNumber;
    return createBox;
}
 
//Function che avvia il gioco
 function openTheGame(eventGame){
    const buttonStart = document.getElementById("btn");
    buttonStart.addEventListener("click", function(){
    wrapper.classList.toggle("active");

    return buttonStart;
    })

 }

// function per colorare i singoli box
function colorBox(colors){
    this.classList.add("box-color");
}


