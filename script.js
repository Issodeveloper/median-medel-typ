const input = document.getElementById('input');
const h1Answer = document.getElementById('answer');

window.onload = () => {
    input.value = '';
    input.select()
}

function medel(){
    let arr = input.value.split('   ');

    input.value = '';

    console.log(arr);

    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += Number(arr[i]);
    }
    console.log(summa);
    h1Answer.innerHTML = summa / arr.length;

    navigator.clipboard.writeText(summa / arr.length)
}

const median = () => {
    let arr = input.value.split('   ');

    input.value = '';

    console.log(arr);

    arr.sort((a, b) => a - b);

    if(arr.length % 2){
        h1Answer.innerHTML = arr[arr.length / 2 + 0.5];
    }else{
        let num1 = arr[arr.length / 2 - 1]
        let num2 = arr[arr.length / 2]

        console.log(num1);
        console.log(num2);

        h1Answer.innerHTML = (num1 + num2) / 2;
    }
    navigator.clipboard.writeText((num1 + num2) / 2);
}

const typ = () => {
    let arr = input.value.split('   ');

    input.value = '';

    console.log(arr);

    if(arr.length == 0)
        return null;
    var modeMap = {};
    var maxEl = arr[0], maxCount = 1;
    for(var i = 0; i < arr.length; i++)
    {
        var el = arr[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    h1Answer.innerHTML = maxEl;

    navigator.clipboard.writeText(maxEl);
}

