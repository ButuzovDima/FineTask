let insertionSort = function(array){
    let p;
    for(let i = 1; i < array.length; i++){
        for(let j = i; j > 0; j--){
            if(array[j - 1] > array[j]){
                p = array[j];
                array[j] = array[j - 1];
                array[j - 1] = p;
            }
        }
    }
    return array;
};

console.log(insertionSort([1,2,0,-1,5,7,3,4]));