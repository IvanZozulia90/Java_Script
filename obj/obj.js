




// let services = {
// "стрижка": "60 грн",
// "гоління": "80 грн",
// "Миття голови": "100 грн",
// price: price,
// minPrice: minPrice,
// maxPrice: maxPrice
// };

// services['Розбити скло'] = "400 грн";



// function price (){
//     let sum = 0

//     for (let service in this){
//         if(typeof this[service] === "string"){
//             sum += parseFloat(this[service])
//         }
//     }
//     return sum
// }   

// console.log(services.price());


// function minPrice() {
//   let min;
//   let first = true;

//   for (let key in services) {
//     if (typeof services[key] === "string") {
//       let price = parseFloat(services[key]);

//       if (first) {
//         min = price;
//         first = false;
//       } else if (price < min) {
//         min = price;
//       }
//     }
//   }

//   return min;
// }

// console.log(minPrice())

// function maxPrice() {
//   let max;
//   let first = true;

//   for (let key in services) {
//     if (typeof services[key] === "string") {
//       let price = parseFloat(services[key]);

//       if (first) {
//         max = price;
//         first = false;
//       } else if (price > max) {
//         max = price;
//       }
//     }
//   }

//   return max;
// }

// console.log(maxPrice())




// let services = {
// "стрижка": "500 грн",
// "гоління": "80 грн",
// "Миття голови": "100 грн",
// };
// services['Розбити скло'] = "10 грн";


// function minPrice (){
//     let min = Infinity;

//     for (let key in services){
//        if (typeof services[key] === "string"){
//             let price = parseFloat(services[key]);
//             if (price <min){
//                 min = price;
//             }
//        }
//     }
//     return min;
// }

// console.log(minPrice());












// let a = [1, 2, 3, 4];

// let min = Math.max(...a);

// console.log(min)

// function minPrice(services) {
//     let min = Infinity;

//     for (let key in services) {
//         // Пропускаємо, якщо це не послуга (а, наприклад, функція)
//         if (typeof services[key] === 'string') {
//             // Витягаємо число з рядка, наприклад: "60 грн" -> 60
//             let price = parseFloat(services[key]);
//             {
//                 min = price;
//             }
//         }
//     }

//     return min;
// }

// let services = {
//     "стрижка": "60 грн",
//     "гоління": "80 грн",
//     "Миття голови": "100 грн"
// };

// services.minPrice = minPrice(services);

// console.log(services.minPrice);



// const numbers = [10, 5, 8, 2, 17, 30, 1];

// function findMax(arr) {
//     let find = Math.max(...numbers);
//     return find;
// }

// // Функція для знаходження найменшого елемента
// function findMin(arr) {
//     let find = Math.min(...numbers);
//     return find;
// }

// // Використання функцій для знаходження найбільшого і найменшого елементів
// const max = findMax(numbers);
// const min = findMin(numbers);

// console.log("Найбільший елемент: " + max);
// console.log("Найменший елемент: " + min);


const students = [
  { name: "Олександр", age: 19, course: "Front-end", progres: 72 },
  { name: "Марія", age: 21, course: "Back-end", progres: 85 },
  { name: "Іван", age: 22, course: "Full-stack", progres: 86 },
  { name: "Олена", age: 20, course: "Front-end", progres: 65 },
  { name: "Дмитро", age: 23, course: "Back-end", progres: 70 },
  { name: "Світлана", age: 18, course: "Front-end", progres: 52 },
  { name: "Андрій", age: 24, course: "Full-stack", progres: 50 },
  { name: "Наталя", age: 21, course: "Back-end", progres: 49 },
  { name: "Володимир", age: 22, course: "Front-end", progres: 90 },
  { name: "Ірина", age: 20, course: "Full-stack", progres: 55 },
  { name: "Максим", age: 19, course: "Back-end", progres: 60 },
  { name: "Тетяна", age: 23, course: "Front-end", progres: 51 },
  { name: "Єгор", age: 25, course: "Full-stack", progres: 45 },
  { name: "Юлія", age: 22, course: "Back-end", progres: 81 },
  { name: "Роман", age: 20, course: "Front-end", progres: 40 }
];

let newStudent = {name: "Ольга", age: 32, course: "Back-end", progres: null}


//Додати перевірку по стаусу і умову видалення if status = false
//коли процент меньше 50

// function sumBack_end (){
//     let sum = 0;

//     for (let i = 0; i < students.length; i++){
//         if (students[i].course === "Back-end"){
//             sum++
//         }
//     }
//     sum < 5 ? students.push(newStudent) : sum = "Группа заповнена";
//     return sum
// }

// console.log(sumBack_end(newStudent));
// console.log(students);


// function minAge (obj){
    
//     for (let student of obj){
//         let ages = [];

//         if (typeof student.age === 'number'){
//             ages.push(student.age)
//         }
//         return Math.min(...ages)
//     }
    
// }

// console.log(minAge(students))

function lowProgres () {
    
    for(let i = 0; i < students.length; i++){
        if (students[i].progres < 50 && students[i].course === "Back-end"){
            students.splice(i, 1);
            i--;
        }
        return console.log(students)
    }
    

    // let sum = 0;

    // for (let i = 0; i < students.length; i++){
    //     if (students[i].course === "Back-end"){
    //         sum++
    //     }
    // }
    // sum < 5 ? students.push(newStudent) : sum = "Группа заповнена";
    // return sum;
    
}

// console.log(lowProgres(students));


function validator (str){
    let reg = /^[a-zA-Z\s]+$/;
    let txt = [];

    if (reg.test(str)){
        txt.push(str);
        console.log(txt)
    }else{
        console.log("Текст не валідний")
    }
    
}

validator("Hellow World")
