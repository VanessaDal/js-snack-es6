// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

console.log(myArray);


var firstNum=parseInt(prompt("inserisci un numero tra 0 e " + myArray.length));
console.log(firstNum);
var secondNum=parseInt(prompt("inserisci un numero tra 0 e " + myArray.length));
console.log(secondNum);

var secondArray=[];
if(firstNum<secondNum){
    secondArray.push(myArray.slice(firstNum , secondNum+1))
}
 else{
    secondArray.push(myArray.slice(secondNum , firstNum+1));
 };


// function createNewArray(){
//     var i=0;

//     while (i<=myArray.length){
//         var name=myArray[i]
//         var namePosition=myArray.indexOf[name]
//         console.log(namePosition)
//         if(namePosition>min && namePosition<max)
//         secondArray.push(name);
//         i++;
//     }
//     console.log(secondArray);
//     return secondArray
// }

console.log(secondArray)