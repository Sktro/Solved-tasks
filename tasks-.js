// функция для возвращения строки без 1 и последнего символа.
function removeChar(str){
    str = str.substring(1, str.length -1); 
      return str;
    };

// функция переворачивает строку задом наперед
function solution(str){
  var splitInArray = str.split('');           //превращаем строку в массив
  var reverseArray = splitInArray.reverse();     // переворачиваем массив 
  var joinArray = reverseArray.join('');      // соединяем массив
  return joinArray;
}

// функция определяет первую букву в имени, затем выдет нужный нам ответ
  function areYouPlayingBanjo(name) {
    if (name[0] === 'R') {
        return name + ' plays banjo';
    } else if (name[0] === 'r') {
        return name + ' plays banjo';
    } else {
        return name + " does not play banjo";
    }
  }


// функция, которя строку меняет в число
var stringToNumber = function(str){
   str = Number(str);
  return str;
}

// функция, которая делает из имени и фамили аббревиатуру

    function abbrevName(name){
    var abbreviation = name.split(' ');
    var abbreviationNameLastname = abbreviation[0].charAt(0) + '.' + abbreviation[1].charAt(0) + '.';
    return abbreviationNameLastname.toUpperCase();
}

// функция сложения всех положительных чисел в массиве

function positiveSum(array){
    var negatives = [];
    var sum = 0;
  
    for(var i = 0; i < array.length; i++) {
      if(array[i] < 0) {
        negatives.push(array[i]);
      }else{
        sum += array[i];
      }
    }
    return sum;
    }


// функция, которая делает все отрицательные числа - положительными и наоборот.

function invert(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] != 0) {
        array[i] = array[i] * -1;
      } else if (array[i] === 0) {
          array[i] = -0;
      } 
    }  
    return array ;
  }

// функция которая принимает данные в км/ч и конвертирует в см/сек округля до целого числа

    function cockroachSpeed(s) {
        var kmInSm = s * 100000;
        var speed = kmInSm / 3600;
        return Math.floor(speed);
       }

// функция сравнивающая цифровые значения из ([массива] и числа)
       function betterThanAverage(classPoints, yourPoints) {
        var meanClass = classPoints.reduce((a, b) => (a + b)) / classPoints.length; // вычисление среднего значения из массива
        var myMean = yourPoints; 
        if (meanClass < myMean) {
            return true;
        } else if (meanClass > myMean)
        return false;
    }

// функция для поиска наименьшего числа в массиве
function findSmallestInt(args){
    var min = Math.min.apply(null, args);
    return min
 }

// функция умножения каждого числа в массиве на 2
 function maps(x){
    for(var i = 0; i < x.length; i++) {
if(x == true) {
        x[i] *= 2;
} else {
false
}
    }
    return x;
    }


// добавить в масив 1000 одинаковых элементов.
var websites = [];
websites = new Array(1000).fill('codewars');


// функция переворачивает массив от последнего значения к первому
function fixTheMeerkat(arr) {
 arr = arr.reverse();
  return arr
}

// функцуия определения среднего значения массива и его округление до целого числа
function getAverage(marks){
    var meanStudent = marks.reduce((a, b) => (a + b)) / marks.length;
    return Math.floor(meanStudent);
  }


// функция определяет четное / не четное число и умножает его на задданое число

function simpleMultiplication(number) {
   if (number % 2 == 0) {
       result = number * 8;
       return result;
   } else {
    result = number * 9;
    return result;
   }
}

// функция присваивания строки переменной в зависимости от номера введенного в функцию работающую через switch
function caseInSwitch(val) {
  var answer = "";
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}


// функция подсчета карт\очков (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards)

var count = 0;

function cc(card) {
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count += 1;
    break;
  case 7:
  case 8:
  case 9:
  count += 0;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count -= 1;
  break;
}
if (count > 0) {
  return count + ' Bet';
} else if (count <= 0) {
  return count + ' Hold';
}
  return "Change Me";
  // Only change code above this line
}


// функция для получения значения объекта 

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
  "charlie":"Chicago",
    "delta":"Denver",
     "echo":"Easy",
  "foxtrot":"Frank"
  };
  result = lookup[val];
  return result;
}



// функция не самостоятельно решенная ................................................................
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if(value === "") {
    delete records[id][prop];
  } else if(prop === "tracks") {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
    }
return records;
}

// функция для поиска контакта и его значения ключа
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {
        if (name == contacts[i]["firstName"]) {
            if (contacts[i].hasOwnProperty(prop) == true)
                return contacts[i][prop];
            else
                return "No such property";
        }
    }
    return "No such contact";;
}

// функция, которая возвращает рандомное число в заданом диапазоне чисел.
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//функция получения диапазона в массив с помощью рекурсии
function rangeOfNumbers(startNum, endNum) {
if (startNum - endNum === 0) {
  return [startNum];
} else {
const numbers = rangeOfNumbers(startNum + 1, endNum);
numbers.unshift(startNum);
return numbers;
}
};

// принимает два аргумента и генерирует последовательность.
function generateIntegers(m, n) {
  if (m - n === 0) {
    return [m];
  } else {
  const numbers = generateIntegers(m + 1, n);
  numbers.unshift(m);
  return numbers;
  }
  };

// сделать из положительног числа - отрицательное
function makeNegative(num) {
    if(num === 0){
      return 0;
      }else if (num > 0) {
        var result = num * - 1;
        return result;
      } else {
        return num;
      }
  }


  // функция для подсчета скидки с учетом кол-ва дней
  function rentalCarCost(d) {
    let price = 40;
    if (d >= 7) {
      let discount = (d * price) - 50;
      return discount;
    } else if (d >= 3) {
      let discount = (d * price) - 20;
      return discount;
    } else {
      let priceNotDiscount = price * d;
      return priceNotDiscount;
    }
    }


    // функция для переворота слов в предложении с последнего к первому
    function reverseWords(str){
        let newArray = str.split(' ');
        let newReverse = newArray.reverse();
        let newStr = newReverse.join(' ');
        return newStr; 
      }

// функция определения века из года
function century(year) {
    let century = year / 100
      return Math.ceil(century);
    }

// функция переворота массива 
function reverseList(list) {
    return list.reverse();
    }

// фунция для определения новой позиции фишки в игре после броска кубика
    function move (position, roll) {
        let newMove = position + (roll * 2);
         return newMove;
       }

       // определение четного/нечетного числа 
       function testEven(n) {
        if (n %2 === 0) {
          return true
        } else {
    return false
        }
    }

    // задание для определения кол-ва голов 
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// функция для разбития строки в массив слов
function stringToArray(string){
    return string.split(' ');
    }

    // функция для определения количества страниц, которых необходимо скопировать 
    function paperwork(n, m) {
        let paperwork = n * m;
        if (n < 0 || m < 0) {
          return 0
        }
        return paperwork;
      }

      // 11() функции для определения макисмального и минимального числа в массиве 
      var min = function(list){
        let min = Math.min.apply(null, list);
        return min;
    }
    
    var max = function(list){
     let min = Math.max.apply(null, list);
        return min;
    }

    // функция для сравнения четного числа с нечетным 
    function lovefunc(flower1, flower2){
        if (flower1%2 !== flower2%2) {
          return true;
        } else {
          return false;
        }
        }

        // функция удаления всех ! знаков в строке
        function removeExclamationMarks(s) {
            return s.replace(/[!]/g, '');
          }

          // функция для удвоения числа (15)
          function doubleInteger(i) {
            i = i * 2;
           return i;
         }

// функция для сравнения имен
         function greet (name, owner) {
            if (name === owner) {
              return 'Hello boss'
            } else {
              return 'Hello guest';
            }
          }

          // функция замены цифр на буквы в строке 
          function correct(string){
    var chars = {'0':'O','1':'I','5':'S'};
    return string.replace(/[0-9]/g, m => chars[m]);
}

// функция сложения 2х массивов 
function arrayPlusArray(arr1, arr2) {
    var setArray = arr1.concat(arr2);
     var sum = 0;
   for(var i = 0; i < setArray.length; i++){
       sum += setArray[i];
       }
     return sum
   }

// функция для получения результата в зависимости от операции 
function basicOp(operation, value1, value2)
{
if (operation === '+') {
 let result = value1 + value2;
  return result
} else if (operation === '-') {
 let result = value1 - value2;
  return result
} else if (operation === '*') {
 let result = value1 * value2;
  return result
} else if (operation === '/') {
 let result = value1 / value2;
  return result
}
}

// функция для определения палимдромной строки (20)
function isPalindrome(x){
    var x = x.toLowerCase();
    let newArray = x.split('');
    let newReverse = newArray.reverse();
    let newX = newReverse.join('');
  if (x === newX){
    return true;
  } else {
    return false;
  }
  }

  // функция замены всех слов в предложении на sex
  function toFreud(string) {
    if (string === ""){
      return "";
    }
    let newArray = string.split(' ');
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = 'sex';
    } 
        return newArray.join(' ');
  }

  // функция вычисления площади квадрата по длине дуги окружности
  function squareArea(A){
    let lengthCircles = A * 4;
     let radius = lengthCircles / (Math.PI * 2);
      let squareArea = radius * radius;
       return (Math.round(squareArea * 100) / 100);
   }

   // функция определяющая через сколько или сколько лет назад отец был старше сына в 2 раза

   function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (dadYearsOld > sonYearsOld){
      let result = (dadYearsOld - (sonYearsOld * 2)) * 1;
      return Math.abs(result);
    } 
   }

   // функция, которая возвращает в ответ четная функция или нечетная
   function even_or_odd(number) {
    if (number%2 === 0) {
      return "Even";
    } else {
      return "Odd"
    }
  }

  // функция возвращает счет твоего рождения сколько будет тебе лет или сколько лет было до твоего рождения 
  function  calculateAge(a, b) {
    if (a - b === 1){
      return "You will be born in 1 year.";
    } else if (a - b === -1){
      return "You are 1 year old.";
    } if (a < b) {
      let result = b - a;
      return "You are " + result +  " years old."
    } else if (a > b) {
      let result = a - b;
      return "You will be born in " + result +  " years."
    } else if (a === b) {
      return "You were born this very year!";
    }
  }

  //(5) функция, котороя возвращает n-кол-во элеметов из массива начиная от первого
  function take(arr, n) {
    let newArr = arr;
    return newArr.slice(0,n);
  }

// функция для онвертации доллара в юань 
function usdcny(usd) {
  let result = usd * 6.75;
  return result.toFixed(2) + ' Chinese Yuan'
}

// функция исправляет имя и отвечает на пустую строку (7)
function hello(name) {
  if (name == "" || name == undefined) {
    return "Hello, World!";
  }
  return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
}

// функция вызывает строку 
function greet(){
  return 'hello world!'
}

// функция определяет цену за каждый символ в строке
function billboard(name, price = 30){
  let charactersPrice = 0;
   for (let i = 0; i < name.length;  i++){
     charactersPrice += price;
   }
     return charactersPrice;
  } 

  // (10) функция сотрирует массив по алфавиту берет первое значение и разделяет каждую букву в строке ***
function twoSort(s) {
var sortArray = s.sort();
var sortArray =  sortArray[0];
var sortArray = sortArray.split('');
var sortArray = sortArray.join('***');
return sortArray;
}

// функция определяет количество повторяющихся строк 'good' в массиве

function well(x){
  let wordGood = 0;
  for(let i = 0; i < x.length; i++){
    if (x[i] === 'good'){
      wordGood++;
    }
  }
  if (wordGood === 0) {
    return 'Fail!';
  } else if (wordGood <= 2) {
    return 'Publish!';
  } else if (wordGood > 2) {
    return 'I smell a series!'
  }
}


// функции математическиих опреции
function add(a,b){
  let result = a + b;
    return result
}

function divide(a,b){
 let result = a / b;
    return result;
}

function multiply(a,b){
 let result = a * b;
    return result;
}

function mod(a,b){
  let result = a % b;
    return result;
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    let result = a - b;
    return result
}

// (13)функция определения квартала мексяца 
const quarterOf = (month) => {
  if (month <= 3){
    return 1
  } else if (month <= 6){
    return 2
  } else if (month <= 9){
    return 3
  } else if (month <= 12){
    return 4
  } 
    }

    // функция для вывода массива кол-ва положительных чисел и суммы отрицательных
    function countPositivesSumNegatives(input) {
      let negatives = [];
        let positiveSum = 0;
          let negativeSum = 0;
      if (input == 0 || input == undefined) {
        return [];
      }
        for(var i = 0; i < input.length; i++) {
           if (input[i] > 0) {
            positiveSum++;
          } else if (input[i] < 0) {
            negativeSum += input[i];
          }
        }
        negatives.push(negativeSum);
        negatives.unshift(positiveSum);
        return negatives;
    }

    // функция возводящая каждое число в квадрат,затем суммирует (15)
    function squareSum(numbers){
      let squaresSum = 0;
        for (let i = 0; i < numbers.length; i++){
                squaresSum += (numbers[i] * numbers[i]);
          }
        return squaresSum;
      }

      // функция для разворота имени и фамилии
      function nameShuffler(str){
        let newArray = str.split(' ');
         let newString = newArray.reverse();
          let nameShuffler = newString.join(' ');
         return nameShuffler;
       }

       // функция повтора строк n -кол-во раз, S - строка
       function repeatStr (n, s) {
        return s.repeat(n);
       }

// функция возвращает массив чисел от n до 1
       const reverseSeq = n => {
        if (n < 1) {
          return [];
        } else {
        const numbers = reverseSeq(n-1);
        numbers.unshift(n);
        return numbers;
        };
      };

      // удаление пробелов в строке 
      function noSpace(x){
        return x.replace(/\s+/g, '');
        }

        // замена в строке всех чисел на 0 и 1

        function fakeBin(x){
          let newString = x.replace(/[0-4]/g, '0');
          let result = newString.replace(/[5-9]/g, '1');
          return result;
          }

    // функция для определения возраста животных
    var humanYearsCatYearsDogYears = function(humanYears) {
      let newArray = [0,0,0];
      if (humanYears === 1) {
        return [1,15,15];
      } else if (humanYears === 2){
        return [2,24,24];
      } else if (humanYears >= 3){
        newArray[0] = humanYears;
        newArray[1] = 24 + ((humanYears -2)*4);
        newArray[2] = 24 + ((humanYears -2)*5);
        return newArray;
      }
        
      return [0,0,0];
    }

    // функция возвращает максимальный результат при разных вариантах сложения/умножения чисел
    function expressionMatter(a, b, c) {
      let results = [];
      let result1 = a * (b + c);
      results.push(result1);
      let result2 = a * b * c;
      results.push(result2);
      let result3 = a + b * c;
      results.push(result3);
      let result4 = (a + b) * c;
      results.push(result4);
      let result5 = a + b + c;
      results.push(result5);
      let maxResult = Math.max.apply(null, results);
      return maxResult;
    }

    // функция определяет n - кол-во и выдает ответ 
    function hoopCount (n) {
      if (n >= 10)  {
        return "Great, now move on to tricks";
      } else {
        return "Keep at it until you get it";
      }
    }

  // исправленная ошибка в функции
  function main (verb, noun){
    return verb + noun;
  }

// исправленная ошибка в функции
  function mystery() {
    var results =
      {sanity: 'Hello'};
    return results;
  }

  // функция определяющая по имени выдавая значение
  function howManyLightsabersDoYouOwn(name) {
    return (name === "Zach") ? 18 : 0;
  }

// (7) исправленная ошибка в функции
  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

  // определяет самую длиинную строку и ставит ее по середине между короткой
  function solution(a, b){
    if (b.length > a.length) {
      return a + b + a;
    }  else if (b.length < a.length) {
      return b + a + b;
    }
  }

  // добавление в массив элемента 
  websites.push("codewars");

  // (10)функция определения остатка 
  function remainder(a, b){
    if (a > b){
      return a % b
      } else if (a < b) {
        return b % a;
      }   else if (a < 0 && b < 0)
        return 0
  }

// конвертация номера в строку
function numberToString(num) {
  return String(num);
 }

 // исправленная ошибка в добавлении объекта в массив
 var items = []
 items.push ({a: "b", c: "d"})

 // исправленная ошибка в сравнении 2х функций (13)
 function getMax1()
{
  let max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  let max =
  {
    name: 'Max Headroom'
  }
  return max;
}

// функция проверки логина пароля Санты (14)
function Sleigh() {}
Sleigh.prototype.authenticate = function(name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  } else {
    return false;
  }
};


// функция сложения всех чисел в массиве (15)
function sum (numbers) {
  let sum = 0;
if (numbers === undefined)
  return 0
for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
  return sum;
};

// функция определяющая множественное число 
function plural(n) {
  if (n === 1) {
    return false 
  } else {
    return true
  }
 }

 // функция, которая присваивает элементу атрибут рандомного цвета
 var Ghost = function() {
  var array = ['white','yellow','purple','red'];
    var index = Math.floor(Math.random()*array.length);
    this.color = array[index];
};

// фиксирование проблемы
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
   firstName: this.firstName,
   lastName:  this.lastName,
   name: this.firstName + ' ' + this.lastName
  };
}

// сделать из полодительно числа - отрицательное и наоборот 
function opposite(number) {
  return (number <= 0) ? Math.abs(number) : number * -1;
 }

 // функция для подсчета овец (на месте они или нет) при вводных данных массива (true и false)

 function countSheeps(arrayOfSheep) {
  let sheeps = 0
  for (let i = 0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true) {
           sheeps++
    }
  }
  return  sheeps;
}

// функция принимает числа и возвращает массив этих же чисел в обратном порядке
function digitize(n) {
  let newString = String(n);
  let newArray = newString.split('');
  let reverseArray = newArray.reverse();
  return reverseArray.map(Number);
}

// FCC (Use the Spread Operator to Evaluate Arrays In-Place)
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
console.log(arr2);

//FCC(Use Destructuring Assignment to Extract Values from Objects)
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const  { today, tomorrow } = HIGH_TEMPERATURES;

// FCC (Use Destructuring Assignment to Assign Variables from Objects)
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const  { today: highToday, tomorrow: highTomorrow  } = HIGH_TEMPERATURES;

// FCC (Use Destructuring Assignment to Assign Variables from Nested Objects)
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// FCC Use Destructuring Assignment to Assign Variables from ArraysPassed
let a = 8, b = 6;
[a,b] = [b,a];

// FCC Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements (6)
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

// FCC Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 

//// FCC Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};

// FCC Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// (10) FCC Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); 


// FCC Use getters and setters to Control Access to an Object (11)
class Thermostat {
  constructor(f) {       
    this.f = f;
  }

  get temperature() {             // возвращает температуру по celsius
    return (5/9) * (this.f - 32);
  }

  set temperature(celsius){                   // перезаписывает температуру по celsius
   this.f = (celsius * 9.0) / 5 + 32;
  }
} 
// const thermos = new Thermostat(76); 
// let temp = thermos.temperature; 
// thermos.temperature = 26;
// temp = thermos.temperature; 

// FCC Создать скрипт модуля (12)

/* <html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */

// FCC Используйте экспорт, чтобы поделиться блоком кода

const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
 export { uppercaseString, lowercaseString };

// FCC Reuse JavaScript Code Using import
 import { uppercaseString, lowercaseString } from './string_functions.js';

// FCC Use * to Import Everything from a File (15)
import * as stringFunctions from "./string_functions.js";

//FCC Create an Export Fallback with export default (16)
export default function subtract(x, y) {
  return x - y;
}

//FCC Import a Default Export (17)
import subtract from "./math_functions.js";
subtract(7,4);

//FCC Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});

// FCC Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if(responseFromServer) {
    resolve ('We got the data');
  } else {  
    reject ('Data not received');
  }
});

// FCC Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
console.log(result);
});

// FCC Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});

// FCC Use typeof to Check the Type of a Variable (21)
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// функция для возврата размена монет начиная с крупных
function changeMe(moneyIn){
  let delivery = []
   if (moneyIn === "£5") {
      delivery = new Array(25).fill('20p');
      } else if (moneyIn === "£2") {
         delivery = new Array(10).fill('20p');
      } else if (moneyIn === "£1") {
        delivery = new Array(5).fill('20p');
      } else if (moneyIn === '50p') {
        delivery = new Array(2).fill('20p');
        delivery.push ('10p');
      } else if (moneyIn === '20p') {
        delivery = new Array(2).fill('10p');
      } else {
        return moneyIn;
      }
  return delivery.join(' ')
    }

    //FCC Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);

// FCC Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

// FCC Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

// FCC Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);

// FCC Find More Than the First Match (6)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result = twinkleStar.match(starRegex); 

// FCC Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

// FCC Match Single Character with Multiple Possibilities (8)
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 

// FCC Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

// FCC Match Numbers and Letters of the Alphabet (10)
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 

// FCC Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9ie]/gi;
let result = quoteSample.match(myRegex); 

// FCC Match Characters that Occur One or More Times (12)
let difficultSpelling = "Mississippi";
let myRegex = /ss+/g; 
let result = difficultSpelling.match(myRegex);

// FCC Match Characters that Occur Zero or More Times (13)
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

// FCC Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9].*?>/;
let result = text.match(myRegex);

// FCC Find One or More Criminals in a Hunt
let text = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3';
let reCriminals = /C+/; 
let result = text.match(reCriminals);

// FCC Match Beginning String Patterns (16)
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

// FCC Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

//FCC Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

// FCC Match All Letters and NumbersPassed
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

// FCC (20) Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;

// FCC Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;

// FCC Restrict Possible Usernames (22)
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; 
let result = userCheck.test(username);
/*
^ - начало ввода
[az] - первый символ - это буква
[0-9] {2,0} - оканчивается двумя или более цифрами
| - или
[az] + - рядом одна или несколько букв
\ d * - и заканчивается на ноль или более чисел
$ - конец ввода
i - игнорировать регистр ввода
*/

// FCC Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);

// FCC Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

// FCC Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/i; 
let result = ohRegex.test(ohStr);

// FCC Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);

//FCC Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

//FCC Check for All or None (28)
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);


// FCC Positive and Negative LookaheadPassed(29)
let sampleWord = "astronaut";
let pwRegex = /(?=.{6})(?=.*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result);

// FCC Check For Mixed Grouping of Characters (30)
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D. Roosevelt|Eleanor Roosevelt)/; 
let result = myRegex.test(myString); 

//FCC Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; 
let result = reRegex.test(repeatNum);

//FCC Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

//FCC Remove Whitespace from Start and End (33)
let hello = "   Hello, World!  ";
let wsRegex = /(^\s+|\s+$)/g; 
let result = hello.replace(wsRegex,"");

// функция поиска градуса 3-его угла треугольника 
function otherAngle(a, b) {
  return 180 - a - b;
}

// FCC Use typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);

// FCC Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;

// FCC Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce(function(a, b) {
  return a + b;
});

// FCC Catch Mixed Usage of Single and Double Quotes (5)
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";

// FCC Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

// FCC Catch Missing Open and Closing Parenthesis After a Function Call (7)
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine();

// FCC Catch Arguments Passed in the Wrong Order When Calling a Function (8)
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);

// FCC Catch Off By One Errors When Using Indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

// FCC Use Caution When Reinitializing Variables Inside a Loop (10)
function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
     newArray.push(row);
  }
   for (let j = 0; j < n; j++) {
      row.push(0);
    }
  return newArray;
}

// FCC Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

//FCC Use an Array to Store a Collection of Data
let yourArray = ['one', 2, 'three', true, false, undefined,];


// FCC Access an Array's Contents Using Bracket Notation (13)
let myArray = ["a", "b", "c", "d"];
myArray[1] = 'e';

// FCC dd Items to an Array with push() and unshift()
function mixedNumbers(arr) {
arr.push(7, 'VIII', 9);
arr.unshift('I', 2, 'three')
  return arr;
}

// FCC Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

// FCC Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);

// FCC (17) Add Items Using splice()Passed
function htmlColorNames(arr) {
arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

//FCC Copy Array Items Using slice()
function forecast(arr) {
arr = arr.slice(2,4);
  return arr;
}

// FCC Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
newArr.push([...arr])
    num--;
  }
  return newArr;
}

 //FCC (20) Combine Arrays with the Spread Operator
 function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

//FCC Check For The Presence of an Element With indexOf() (21)
function quickCheck(arr, elem) {
if (arr.indexOf(elem) === -1){
  return false
} else {
  return true
}
}

// функция замены текста в имени 
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// функция определяющая объем квадрата в бутылке зная ее радиус, высоту и высоту от квадрата до горлышка
function iceBrickVolume(radius, bottleLength, rimLength) {
  let heightSquare = bottleLength - rimLength;
  return (2 * (radius * radius)) * heightSquare;
}

// функция возвращает 5 без использования 0123456789*+-/ внутри функции
function unusualFive() {
  let newArray = ['one', 'two', 'three', 'four', 'five'];
  return newArray.length;
}

// функция ищет имя бойца без учета регистра и возвращает  соответствующий результат 
var quote = function(fighter) {
  if (fighter == fighter.match(/conor mcgregor/i))
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  else if (fighter == fighter.match(/george saint pierre/i));
  return "I am not impressed by your performance."
};

// функция возвращает результат проверки теста на верхниц регистр (5);
String.prototype.isUpperCase = function() {
  return (String(this) === this.toUpperCase()) ? true : false;
  }

  // функция объединяет 2 строки с помощью ES6
  function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }

 // функция удаления всех гласных в строке
 function shortcut(string){
  return string.replace(/[aeiou]*/g, '');
}

// функция сравнения строки с числом без использования .toString(), .join(), .split(), parseInt and .Number().
function add(a, b){
  return (a == b) ? true : false;
  }

  // функция ищет первую цифру в номере (1 или 2 ил 3) возвращая true 
  function validateCode (code) {
    let firstNumber = code;
  return ((''+firstNumber)[0] == 1 || (''+firstNumber)[0] == 2 || (''+firstNumber)[0] == 3) ? true : false;
  }

// функция сравнивает слово с последней его буквой и выдает true (10)
function correctTail(bod, tail){
  let sub = bod.substr(-1);
  if (sub === tail){
    return true
  } else {
    return false
    }
  }

  // функция поиска возведения в степень без использования Math, eval() и ** .
  function numberToPower(number, power){
    let result = 1;
    for (let i = 0; i < power; i++) {
      result *= number;
    }
    return result;
  }
  
  // функция возвращает сокращенное время (test shortenToDate("Friday May 2, 9am"))
  function shortenToDate(longDate) {
    let text = longDate.replace(/[,]/g, '');
    let newArray = text.split(' ');
    newArray.pop();
    return newArray.join(' ');
  }

  // функция вычисления индекса массы тела (13)
  function bmi(weight, height) {
    let bmiResult = weight / Math.pow(height, 2);
    return (bmiResult <= 18.5) ? "Underweight" : 
    (bmiResult <= 25.0) ? "Normal":
    (bmiResult <= 30.0) ? "Overweight":
    (bmiResult > 30) ? "Obese" : NaN;
  }

  // функция подсчета очков комады после чемпионата (test points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))
  function points(games) {
    let points = 0
    for (let i = 0; i < games.length; i++){
      (games[i].charAt(0) > games[i].charAt(2)) ? points+=3:
      (games[i].charAt(0) < games[i].charAt(2)) ? points+=0:
      (games[i].charAt(0) == games[i].charAt(2)) ? points+=1: NaN;
    }
    return points
  }

  // функция простого калькулятора (15)
  function calculator(a,b,sign){
return (sign == '+') ? a + b : 
(sign == '*') ? a * b :
(sign == '-') ? a - b :
(sign == '/') ? a / b : "unknown value"
}

// функция удаления (!) с конца строки
function remove(s){
  return s.replace (/[!]$/g, '')
 }

 // функция в зависимости от возраста дает ответ (17)
 function peopleWithAgeDrink(old) {
  return (old < 14) ? "drink toddy" :
         (old < 18) ? "drink coke" :
         (old < 21) ? "drink beer" :
         (old < 30) ? "drink whisky" : undefined;
};

// функция для подсчета расхода воды 0.5/час с округлением к наименьшему числу (18)
function litres(time) {
  return Math.floor(time * 0.5);
}

// L1: Set Alarm
function setAlarm(employed, vacation){
return (employed === vacation) ? false:
(employed !== true) ? false:
(employed !== false) ? true: undefined;
}

// функция для расчета убийства драконов, если на одного дракона нужно 2 пули. (20)
function hero(bullets, dragons){
  let result = bullets / dragons;
  return (result >= 2) ? true : false;
 }