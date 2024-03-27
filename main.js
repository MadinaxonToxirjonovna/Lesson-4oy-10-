// function love() {
//     console.log("I love Uzbekistan");
// }

// love();
// love();
// love();


// let matem = () => {
//     console.log(Math.pow(5, 7));
// }
// matem();

// let hisob = () => {
//     console.log(10 * 10);
// }

// hisob();


// let myFunction = function(a,b){
// let c;
// c = a+b;
// console.log(c);
// };


// myFunction(5, 55);

// let son1 = +prompt("Birinchi sonni kiriting")
// let son2 = +prompt("Ikkinchi sonni kiriting")

// function myFunction(son1, son2) {
//     if (son1 === son2) {
//         alert("Ikkalasi bir biriga teng", son1,son2)
//     } else if (son1 > son2) {
//         alert("Eng kotta son ", son1)
//     }{
//     alert("Eng kotta son ", son2)
// }
// }
// myFunction(son1, son2)



let son1 = +prompt("Birinchi sonni kiriting? ")
let son2 = +prompt("Ikkinchi sonni kiriting? ")

function myFunction(son1, son2){
  if (son1 === son2){
    alert("Ikkalasi bir biriga teng ", son1, son2)
  }else if (son1 > son2){
    alert('Eng katta son '+ son1)
  }else{
    alert('Eng katta son '+ son2)
  }
}

myFunction(son1, son2)
