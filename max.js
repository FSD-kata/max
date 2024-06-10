const numbers = [10, 20, 5, 8];

const getmaxNumber = numbers => numbers.filter(number => number >= number+1 );

const maxNumber = getmaxNumber (numbers)
document.getElementById('max').innerHTML=maxNumber ;

