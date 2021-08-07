module.exports = function toReadable (number) {
 
  let oneCharDigits = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};
let twoCharDigits11_19 = {
  1: "eleven",
  2: "twelve",
  3: "thirteen",
  4: "fourteen",
  5: "fifteen",
  6: "sixteen",
  7: "seventeen",
  8: "eighteen",
  9: "nineteen",
};
let twoCharDigitsDecades = {
  10: "ten",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};
let twoCharDigits = {
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};
    
/*Rule 1*/	
	if (number.toString().length == 1)
    return number
      .toString()
      .split("")
      .map(function (x) {
        return oneCharDigits[x];
      })
      .join("");
/*Rule 2*/	
  if (number > 10 && number < 20)
    return number
      .toString()
      .substring(1)
      .replace(/./g, function (k) {
        return twoCharDigits11_19[k];
      });
/*Rule 3*/	
  if (number.toString().length == 2 && number % 10 == 0)
    return twoCharDigitsDecades[number];
/*Rule 4*/	
  if (number > 20 && number < 100 && number % 10 > 0)
    return (
      number
        .toString()
        .substr(0, 1)
        .replace(/./g, function (y) {
          return twoCharDigits[y];
        }) +
      " " +
      number
        .toString()
        .substr(1, 1)
        .replace(/./g, function (x) {
          return oneCharDigits[x];
        })
    );
	/*Rule 5*/	
  if (number >= 100 && number < 1000 && number % 100 == 0)
    return (
      number
        .toString()
        .substr(0, 1)
        .replace(/./g, function (x) {
          return oneCharDigits[x];
        }) + " hundred"
    );
	/*Rule 6*/	
  if (number > 100 && number < 1000 && number % 100 < 10)
    return (
      number
        .toString()
        .substr(0, 1)
        .replace(/./g, function (x) {
          return oneCharDigits[x];
        }) +
      " hundred " +
      number
        .toString()
        .substr(2, 1)
        .replace(/./g, function (f) {
          return oneCharDigits[f];
        })
    );
/*Rule 7*/	
  if (number > 100 && number < 1000 && number % 100 > 10 && number % 100 < 20)
    return (
      number
        .toString()
        .substr(0, 1)
        .replace(/./g, function (x) {
          return oneCharDigits[x];
        }) +
      " hundred " +
      number
        .toString()
        .substr(2, 1)
        .replace(/./g, function (k) {
          return twoCharDigits11_19[k];
        })
    );
/*Rule 8*/	
  if (number > 100 && number < 1000 && number % 10 == 0)
    return (
      number
        .toString()
        .substr(0, 1)
        .replace(/./g, function (x) {
          return oneCharDigits[x];
        }) +
      " hundred " +
      number
        .toString()
        .substr(1, 1)
        .replace(/./g, function (z) {
          return twoCharDigits[z];
        })
    );
/*Rule 9*/		
  if (number > 100 && number < 1000 && number % 100 >= 20)
    return (
      number
        .toString()
        .substr(0, 1)
        .replace(/./g, function (x) {
          return oneCharDigits[x];
        }) +
      " hundred " +
      number
        .toString()
        .substr(1, 1)
        .replace(/./g, function (z) {
          return twoCharDigits[z];
        }) +
      " " +
      number
        .toString()
        .substr(2, 1)
        .replace(/./g, function (u) {
          return oneCharDigits[u];
        })
    );
/*Rule 10*/	
  if (number == 1000) return "one thousand";
};
