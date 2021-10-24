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