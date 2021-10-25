function countCurrency(amount)
{
    let notes = [ 2000, 500, 200, 100, 50, 20, 10, 5, 1 ];
    let noteCounter = Array(9).fill(0);
    
    
    for (let i = 0; i < 9; i++) {
        if (amount >= notes[i]) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];
        }
    }
    
   console.log("Currency Count ->");
    for (let i = 0; i < 9; i++) {
        if (noteCounter[i] != 0) {
            console.log(notes[i] + " = "+ noteCounter[i]);
        }
    }
}
 

let amount = 860;
console.log(amount+" can be represendted as =")
countCurrency(amount);