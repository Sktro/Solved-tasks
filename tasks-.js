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
