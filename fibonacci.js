//без рекурсии
let fib = function (n){
    let a = 1, b = 1, sum;
    if(n < 1) return 'error';
    if(n < 3) return 1;

    for(let i = n; i >= 3; i--){
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
};

//с рекурсией
let _fib = function(n){
    if(n < 3) return 1;
    return _fib(n-1) + _fib(n-2);
};

