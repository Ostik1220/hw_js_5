//1

// const choice = prompt("Кава, Чай чи Сік?").toLowerCase();

// switch (choice) {
//     case "кава":
//         alert("Ви обрали каву. Насолоджуйтесь!");
//         break;
//     case "чай":
//         alert("Ви обрали чай. Чудовий вибір!");
//         break;
//     case "сік":
//         alert("Ви обрали сік. Смачного!");
//         break;
//     default:
//         alert("Будь ласка, оберіть з запропонованих варіантів: Кава, Чай або Сік.");
// }
//2

// const week = prompt("Введіть день тиждня").toLowerCase();

// const workingDays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
// const weekendDays = ["субота", "неділя"];

// if (workingDays.includes(week)) {
//     alert("це робочий день");
// } else if (weekendDays.includes(week)) {
//     alert("це вихідний день");
// } else {
//     alert("те що ви вписали не є днем тиждня");
// }

//3

// const month = Number(prompt("Введіть номер місяця в році від 1 до 12"));

// switch (true) {
//     case (month === 12 || month === 1 || month === 2):
//         alert("це зима");
//         break;
//     case (month >= 3 && month <= 5):
//         alert("це весна");
//         break;
//     case (month >= 6 && month <= 8):
//         alert("це літо");
//         break;
//     case (month >= 9 && month <= 11):
//         alert("це осінь");
//         break;
//     default:
//         alert("те що ви вписали не є номерацією місяця");
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


// switch (color) {
//     case "червоний":
//         alert("червоний значить - стій");
//         break;
//     case "жовтий":
//         alert("жовтий значить - чекай");
//         break;
//     case "зелений":
//         alert("зелений значить - йти");
//         break;
//     default:
//         alert(`ваш колір ${color} 😱😱😱`);
// }

//6

// const numberOne = Number(prompt("Введіть число 1"));
// const numberTwo = Number(prompt("Введіть число 2"));

// function calculate(numberOne, numberTwo, operation) {
//     switch (operation) {
//         case "+":
//             return numberOne + numberTwo;
//         case "-":
//             return numberOne - numberTwo;
//         case "*":
//             return numberOne * numberTwo;
//         case "/":
//             return numberTwo !== 0 ? numberOne / numberTwo : "Ділення на нуль неможливе";
//         case "%":
//             return "не смішно";
//         default:
//             return "будь ласка робіть за правилам";
//     }
// }

// let allowedOperations = (numberOne === 0 && numberTwo === 0) ? "+, -, *, /, %" : "+, -, *";
// const math = prompt(`Варіантами вибору операцій: ${allowedOperations}`);

// alert(calculate(numberOne, numberTwo, math));     


