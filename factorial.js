//нахождение факториала числа (рекурсия)
let factorial = function(n){
    return (n === 1) ?  n:  n * factorial(n - 1);
};
console.log(factorial(5));

//без рекурсии
let fact = function(n){
    let p = 1;
    if(n === 1) return n;
    for(let i = n; i > 1; i--){
        p = p * i;
    }
    return p;
};

console.log(fact(5));