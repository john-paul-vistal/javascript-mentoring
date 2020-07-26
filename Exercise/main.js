//https://www.jshero.net/en/koans/stringsplit.html
//PARSER 

//https://js.checkio.org/
function parseFirstInt(value) {

    if (isNaN(parseInt(value)) == true) {
        var num = value.replace(/[^\d-]/g, '');
        return parseInt(num);
    } else {
        return (parseInt(value));
    }

}

// console.log(parseFirstInt("No. 10"));
// console.log(parseFirstInt("18.12"));
// console.log(parseFirstInt("sum: -120"));
// console.log(parseFirstInt("a string"));

//SPLIT

function add(value) {
    var splited = value.split('+');
    var sum = 0;
    for (var item of splited) {
        sum += parseInt(item)
    }
    return sum
}

//console.log(add('7+12+100'))

//ROMAN NUMERALS to ARABIC

function arabic(number) {

    let roman = "";
    const romanNumList = { 1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XV', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I' };
    let a;
    if (number < 1 || number > 3999)
        return "Enter a number between 1 and 3999";
    else {
        for (let key in romanNumList) {
            a = Math.floor(number / romanNumList[key]);
            if (a >= 0) {
                for (let i = 0; i < a; i++) {
                    roman += key;
                }
            }
            number = number % romanNumList[key];
        }
    }

    return roman;

}

//console.log(arabic("CDLXXXIII"))


function sumNumbers(test) {
    let ans = 0
    for (const w of test.split(' ')) {
        if (!isNaN(Number(w))) {
            ans += Number(w)
        }
    }
    return ans;
}


//sumNumbers('')



function easyUnpack(values) {
    console.log(values.length);

}

//easyUnpack("123456");


function endZeros(value) {
    var count = 0
    var strval = value.toString();
    for (var index = (strval.length - 1); index >= 0; index--) {
        if (strval[index] == 0) {
            count++;
        } else {
            break;
        }
    }
    console.log(count)
}


//endZeros(0);


function removeAllBefore(values, b) {
    const index = values.indexOf(b);
    if (index === 0 || index === -1) {
        return values;
    }
    return values.slice(index);
}

//console.log(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2));
// console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
// console.log(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7));
// console.log(removeAllBefore([], ));
// console.log(removeAllBefore([1, 1, 5, 6, 7], 2));


function isAllUpper(text) {
    return text === text.toUpperCase();
}

//console.log(isAllUpper("TEXT"));

function replaceFirst(values) {
    if (values.length != 0) {
        var first = values[0];
        values.splice(0, 1);
        values.push(first)
    }
    return values;
}

//console.log(replaceFirst([]));


function maxDigit(value) {
    var str = value.toString();
    var max = 0;
    for (var item of str) {
        if (parseInt(item) > max) {
            max = parseInt(item)
        }
    }
    return max;
}

//console.log(maxDigit(1000))


function splitPairs(text) {
    var len = text.length;
    var arr = []
    if (len % 2 != 0) {
        text += "_"
    }

    var splited = text.split('');
    var txt = ""

    for (var index = 0; index < splited.length + 1; index++) {
        if (index % 2 == 0 && index != 0) {
            arr.push(txt)
            txt = ""
        }
        txt += text[index]
    }
    console.log(arr)
}

//splitPairs('');


function beginningZeros(text) {
    var count = 0
    for (var index in text) {
        if (text[index] == 0) {
            count++;
        } else {
            break;
        }
    }
    console.log(count)
}
//beginningZeros('0001');

function correctSentence(text) {
    var txt = text[0].toUpperCase() + text.slice(1)
    if (txt[txt.length - 1] != '.') {
        txt += '.';
    }
    return txt;
}

//console.log(correctSentence('greetings, friends'));

function nearestValue(values, search) {

    return 0;
}

function betweenMarkers(line, left, right) {
    var left = line.indexOf(left);
    var right = line.indexOf(right);

    console.log(left)

    var between = line.substring(left + 1, right);
    return between;
}

//console.log(betweenMarkers('What is >apple<', '>', '<'))


function nearestValue(values, search) {
    values.sort((a, b) => {
        if (Math.abs(search - a) == Math.abs(search - b)) {
            return a
        } else {
            return Math.abs(search - a) - Math.abs(search - b);
        }
    })

    console.log(values[0]);
}

//nearestValue([4, 7, 10, 11, 12, 17], 9)

function firstWord(text) {
    let arr = text.split(/[\s,.]+/)
    let counter = 0;
    let txt = [];
    console.log(arr[counter].match(/[A-z]/g))
    while (counter < arr.length) {
        if (arr[counter].match(/[a-z]/i) != undefined) {
            txt = arr[counter].match(/[A-z']/g)
            break;
        } else {
            counter++
        }
    }
    let rtntxt = ''
    for (item of txt) {
        rtntxt += item
    }
    return rtntxt

}

//console.log(firstWord("Hello.World"))


function backwardStringByWord(text) {
    return text.split("").reverse().join("");
    //let rev = ""
    //for(let index = text.length-1; index >= 0; index --){
    // rev += text[index]
    //}
    // return rev;
}

console.log(backwardStringByWord('hello world'))