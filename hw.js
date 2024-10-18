//1

//2

// const week = prompt("Введіть день тиждня").toLowerCase()

// if (week === "Понеділок".toLowerCase() || week === "Вівторок".toLowerCase() || week === "Середа".toLowerCase() || week === "четверг".toLowerCase() || week === "П`ятниця".toLowerCase()) {
//     alert("це робочий день")
// } else if (week === "субота".toLowerCase() || week === "неділя".toLowerCase()) {
//     alert("це вихідний день")
// } else {
//     alert("те що ви вписали не є днем тиждня")
// }

//3

// const month = Number(prompt("Введіть номер місяця в році від 1 до 12"))

// if (month === 1 || month === 2 || month === 12) {
//     alert("це зима")
// } else if (month === 3 || month === 4 || month === 5) {
//     alert("це весна")
// } else if (month === 6 || month === 7 || month === 8) {
//     alert("це літо")
// }else if (month === 9 || month === 10 || month === 11) {
//     alert("це осінь")
// }else {
//     alert("те що ви вписали не є номерацією місяця")
// }

//4

// const days = Number(prompt("Введіть номер місяця в році від 1 до 12"))

// switch(days){
//     case 1:
//          alert(31)
//      break;

//      case 2:
//          alert("28 - 29")
//      break;

//      case 3:
//          alert(31)
//      break;

//      case 4:
//         alert(30)
//     break;

//     case 5:
//         alert(31)
//     break;

//     case 6:
//         alert(30)
//     break;

//     case 7:
//         alert(31)
//     break;

//     case 8:
//         alert(31)
//     break;

//     case 9:
//         alert(30)
//     break;

//     case 10:
//         alert(31)
//     break;

//     case 11:
//         alert(30)
//     break;

//     case 12:
//         alert(31)
//     break;
    
//      default:
//          alert("те що ви вписали не є номерацією місяця")
// }



//5


// const color = prompt("Введіть колір").toLowerCase()

// if (color === "червоний".toLowerCase()) {
//     alert("червоний значить - стій")
// } else if (color === "жовтий".toLowerCase()) {
//     alert("жовтий значить - чекай")
// }else if (color === "зелений".toLowerCase()) {
//     alert("зелений значить - йти")
// } else {
//     alert(`ваш колір ${color} 😱😱😱`)
// }

//6

const numberOne = Number(prompt("Введіть число 1"))
const numberTwo = Number(prompt("Введіть число 2"))

if (numberOne === 0 && numberTwo === 0) {
    const math = prompt("варіантами вибору операцій: +, -, *, /.")
    if( math === "+") {
    alert(numberOne + numberTwo)
    } else if ( math === "-") {
        alert(numberOne - numberTwo)
    } else if ( math === "*") {
        alert(numberOne * numberTwo)
    } else if ( math === "/") {
        alert(numberOne / numberTwo)
    } else if ( math === "%") {
        alert("не смішно")
    } else {
        alert("БУДЬ ЛАСКА ПРАВИЛЬНО")
    }
} else {
    const math = prompt("варіантами вибору операцій: +, -, *.") 
    if( math === "+") {
        alert(numberOne + numberTwo)
        } else if ( math === "-") {
            alert(numberOne - numberTwo)
        } else if ( math === "*") {
            alert(numberOne * numberTwo)
        } else if ( math === "/") {
            alert(numberOne / numberTwo)
        } else {
            alert("БУДЬ ЛАСКА ПРАВИЛЬНО")
        }
}

