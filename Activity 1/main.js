// function hello() {
//     document.getElementById("hello").innerHTML = "Hello";
// }

// function display() {
//     var name = document.createElement("h1");
//     document.getElementById("name").style.backgroundColor = "Blue";
//     name.innerHTML = "John Paul Vistal"
//     document.getElementById("name").appendChild(name);
// }

// const myBirthday = 01 - 04 - 2001

// var name = "John Paul Vistal";
// var age = "19";
// parseInt(age);
// var gf;
// var single = true;
// var favorite = ['movies', 'music', 'adventure', 'technology'];
// var sample

// // alert(typeof(name)) // string
// //alert(typeof(parseInt(age))) // number
// // alert(typeof(gf)) //undefined
// // alert(typeof(single)) //boolean
// // alert(typeof(favorite)) //object

// if (age < 17) {
//     alert('Your too young for me');
// } else if (age >= 18 && age <= 25) {
//     alert('We are meant to be ');
// } else {
//     alert("To old for me")
// }

// //single == true ? alert("Study Hard") : alert("Study Harder")


// console.log(null === undefined);
// console.log(null == undefined);

// var status = 'single'

// switch (status) {
//     case 'single':
//         alert("Perfect");
//         break;
//     case 'married':
//         alert("Ops not qualified");
//         break;
//     case 'widow':
//         alert('I dont know');
//         break;
//     default:
//         alert("Undefined")
// }

//if (status == 'single' || status == 'widow') {}

// var heartache = 0;
// while (heartache != 10) {
//     //     alert('Try again to love')
//     //     heartache++;
// }


// // var heartache = 0;
// // do {
// //     alert('Find a lover')
// //     heartache++;
// // } while (heartache > 5);

// for (var lover = 0; lover < 10; lover++) {
//     alert("Find");
//     if (lover == 5) {
//         break;
//     }
// }

// function showMessage() {
//     let message = "Maayong Hapon";
//     console.log(message);
// }

// showMessage();
// console.log(message);



// function add(x, y) {
//     return x + y;
// }

// console.log(add(5, 10));

var name;

function submit() {
    name = document.getElementById('name').value;
    document.getElementById('output').innerHTML = name;
}