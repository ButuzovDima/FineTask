let binarySearch = function(array, f){
    let l = 0, r = array.length - 1;
    let k;
    while(l <= r){
        k = Math.floor((r+l)/2);
        if(f === array[k]) return k;
        if(f > array[k]) l = k + 1;
        if(f < array[k]) r = k - 1;
    }
    return 'not found';
};

