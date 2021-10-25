let arr=[10,20,30,40,50];

function linearSearch(arr,key) {
    let i=0;
    while(i<arr.length){
        if(arr[i] === key){
            return i;
        }i++
    }
    retun -1;
}

console.log(linearSearch(arr,30));