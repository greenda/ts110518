"use strict";
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (element) {
        return (arr.includes(element));
    });
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = args.reduce(function (sum, current) {
        if (typeof current === 'string') {
            var currentNumber = parseInt(current, 10);
            return sum + ((!isNaN(currentNumber)) ? parseInt(current, 10) : 0);
        }
        return sum + current;
    }, 0);
    return result;
}
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Array.from(new Set(args));
}
function revertLetters(str) {
    var words = str.split(' ');
    var resultWords = [];
    words.forEach(function (element) {
        var letters = Array.from(element);
        var charactersArray = new Array(letters.length);
        var signsArray = new Array(letters.length);
        letters.forEach(function (letter, i) {
            if (validate(letter)) {
                charactersArray.push(letter);
            }
            else {
                signsArray[i] = letter;
            }
        });
        charactersArray.reverse();
        var j = 0;
        for (var i = 0; i < letters.length; i++) {
            if (!signsArray[i]) {
                signsArray[i] = charactersArray[j];
                j++;
            }
        }
        resultWords.push(signsArray.join(''));
    });
    return resultWords.join(' ');
}
function validate(strValue) {
    var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
    return objRegExp.test(strValue);
}
