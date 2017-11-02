/*
    Create a function that differentiates a polynomial for a given value of x.
    Your function should have two variables. A polynomial in terms of x as a string, and a point to evaluate the equation as an integer.
    Your function should differentiate the given equation in terms of x and then output the equation evaluated at the given point
*/

function differentiate(equation, point){
    let m = [];
    let arr = [];
    let str = '';
    let s = '';
    let sum = 0;
    let mult = 1;

    for(let i = 0; i < equation.length; i++){
        if(equation[i] !== '+' && equation[i] !== '-' && i !== equation.length - 1){
            str = str + equation[i];
        }
        else if(equation[i] === '+'){
            m.push(str);
            m.push('+');
            str = '';
        }
        else if(equation[i] === '-' && i === 0){
            m.push('-');
        }
        else if(equation[i] === '-' && i !== 0){
            m.push(str);
            m.push('-');
            str = '';
        }
        else if(equation[i] !== '+' && equation[i] !== '-' && i === equation.length - 1){
            str = str + equation[i];
            m.push(str);
            str = '';
        }
    }

    p: for(let i = 0; i < m.length; i++){
        if(m[i] !== '+' && m[i] !== '-'){
            str = m[i];
            for(let j = 0; j < str.length; j++){
                if(str[j] === '^'){
                    for(let k = 0; k < j - 1; k++){
                        s = s + str[k];
                    }
                    if(s === '') s = '1';
                    arr.push(Number(s));
                    s = '';

                    for(let k = j + 1; k < str.length; k++){
                        s = s + str[k];
                        console.log(s);
                    }
                    arr.push(Number(s));
                    arr.push(Math.pow(point, Number(s) - 1));

                    m[i] = arr;
                    arr = [];
                    s = '';
                    continue p;
                }
            }

            for(let j = 0; j < str.length; j++){
                if(str[j] === 'x'){
                    for(let k = 0; k < j; k++){
                        s = s + str[k];
                    }

                    if(s === '') s = '1';
                    arr.push(Number(s));
                    m[i] = arr;
                    s = '';
                    arr = [];

                    continue p;
                }
            }

            arr.push(0);
            m[i] = arr;
            arr = [];
        }
    }

    for(let i = 0; i < m.length; i++){
        if(m[i] === '-' && mult > 0){
            mult = -1 * mult;
            continue;
        }
        else if(m[i] === '-' && mult < 0){
            continue;
        }

        if(m[i] === '+' && mult < 0){
            mult = -1 * mult;
            continue;
        }
        else if(m[i] === '+' && mult > 0){
            continue;
        }

        arr = m[i];
        for(let j = 0; j < arr.length; j++){
            mult *= arr[j];
        }
        sum += mult;
        mult = 1;
    }

    return sum;
}
