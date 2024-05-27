// Задание 1

// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const days = {
// 	1: "Понедельник",
// 	2: "Вторник",
// 	3: "Среда",
// 	4: "Четверг",
// 	5: "Пятница",
// 	6: "Суббота",
// 	7: "Воскресенье",
// };
// console.log(days[2]);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры

// const user = {
// 	name: "Kostya",
// 	surname: "Gusev",
// 	age: 25,
// 	lastName: prompt("Введите ваше очество "),
// };
// console.log(`${user.surname} - ${user.name} - ${user.age}`);
// console.log(user);

// 4. Удалите свойство surname

// delete user.surname;
// console.log(user);

// Задание 2

// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const myObj = {};
// for (let i = 0; i <= 6; i++) {
//   myObj[arr2[i]] = arr1[i];
// }
// console.log(myObj);

// 2. ;
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

// const obj = {x: 1, y: 2, z: 3};
// console.log(obj);
// for (const key in obj) {
//   obj[key] = obj[key] * 2;
//   }
//   console.log(obj);

// Задание 3

// Найдите сумму элементов приведенного объекта.

// const obj = {
//   key1: {
//   key1: 1,
//   key2: 2,
//   key3: 3,
//   },
//   key2: {
//   key1: 4,
//   key2: 5,
//   key3: 6,
//   },
//   key3: {
//   key1: 7,
//   key2: 8,
//   key3: 9,
//   },
//   }

//   function objSum(object) {
//     let sum = 0;
//     for (const key in object){
//       sum += (object[key]);
//     }
//     return sum;
//   }

//   let allSum = 0;
//   for (const key in obj){
//     let res = objSum(obj[key]);
//     allSum += res;
//   }
//   console.log(allSum);

// Задание 4

// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
  question: 'Зимой и летом одним цветом?',
  answer: 'елка',
  hints: ['зеленое'],

  askQuestion(){
    let userAnswer = prompt(this.question);

    if(userAnswer.toLowerCase() === this.answer.toLowerCase()){
      console.log('Правильно');
    } else {
      console.log('Не правильно');

      let hintChoice = prompt('Подсказку хоите?(да, нет?');
      if (hintChoice.toLowerCase() === 'да') {
        let randomHintIndex = this.hints.pop();
        console.log('Подсказка: ' + randomHintIndex);
      }
    }
  },
};

riddles.askQuestion();