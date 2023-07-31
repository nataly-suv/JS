// const week = {
// //   first: "Понедельник",
// //   2: "Вторник",
// // };
// // console.log(week[2]);
// // console.log(week.first);

// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат

// Object.keys(obj).forEach(el => {
//     obj[el] = obj[el]**2;
// })
// console.log(obj);

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };
// // Найдите сумму элементов приведенного объекта

// // let sum = 0;

// // for (const key in obj) {
// //   for (const el in obj[key]) {
// //     sum += obj[key][el];
// //   }
// // }
// // console.log(sum);

// const values = Object.values(obj);
// // const arrayNumber = [].concat(...values.map((el) => Object.values(el)));

// // [] + [1 2 3] [4 5 6] [7 8 9]

// // const array = [];
// // const array1 = [1,2,3];
// // const array2 = [4,5,6];
// // const array3 = [7,8,9];

// // console.log(array.concat(array1, array2, array3));

// // const sum = arrayNumber.reduce((acc, element) => acc+element, 0);
// // console.log(sum);
// // console.log(values);

// const array = values.reduce((array, element) => array.concat(Object.values(element)), []);
// // array = []
// // [] + [1, 2, 3] = [1, 2, 3]
// // [1, 2, 3] concat [4, 5, 6] = [1,2,3,4,5,6]
// // [1,2,3,4,5,6] concat [7,8,9] = [1,2,3,4,5,6,7,8,9]

// console.log(...array); // spead

/* 1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно */

// const question = "Зимой и летом одним цветом";
// const spoiler = ["зеленая", "колючая"];
// const answer = "елка";

// const riddles = {
//   question,
//   spoiler,
//   answer,
//   askQuestion: function () {
//     let userAnswer = prompt(this.question);
//     if (userAnswer.toLowerCase().replace(/\s/g,'')  === this.answer) {
//       alert("good");
//     } else {
//       for (let hint of this.spoiler) {
//         alert(hint);
//         userAnswer = prompt(this.question);
//         if (userAnswer.toLowerCase().replace(/\s/g,'') === this.answer) {
//           alert("good");
//           return;
//         }
//       }
//       alert("bad");
//     }
//   },
// };

// riddles.askQuestion();

class Riddles {
  constructor(question, spoiler, answer) {
    this.question = question;
    this.spoiler = spoiler;
    this.answer = answer;
  }

  askQuestion() {
    let userAnswer = prompt(this.question);
    if (userAnswer.toLowerCase().replace(/\s/g, "") === this.answer) {
      alert("good");
    } else {
      for (let hint of this.spoiler) {
        alert(hint);
        userAnswer = prompt(this.question);
        if (userAnswer.toLowerCase().replace(/\s/g, "") === this.answer) {
          alert("good");
          return;
        }
      }
      alert("bad");
    }
  }
}

const question = "Зимой и летом одним цветом";
const spoiler = ["зеленая", "колючая"];
const answer = "елка";

const riddle = new Riddles(question, spoiler, answer);
riddle.askQuestion();

// console.log(riddle);
