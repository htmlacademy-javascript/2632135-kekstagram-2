//Проверяем длинну строки

function checkStringLength(inputString, maxLength) {
  return inputString.length <= maxLength;  //свойство lenght считает символы в строке
}

console.log(checkStringLength('Строка короче 20', 20));
console.log(checkStringLength('Строкаровно18симвл', 18));
console.log(checkStringLength('Строка точно длиннее 10 символов', 10));


//Палиндром

function isPalindrome (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase(); // убрали пробелы, привели к нижнему регистру
  return normalizedStr === normalizedStr.split('').reverse().join(''); // превратили в массив, перевернули, вернули обратно к строке
}

console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл'));
