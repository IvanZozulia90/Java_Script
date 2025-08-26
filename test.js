// const students = [];

// students.push({name: "Ivan", age: 35});
// students.push({name: "Den", age: 25});
// students.push({name: "asdf", age: 31})

// console.log(students)

let people = {
    Ivan: 35,
    Olga: 32,
    Vikki: 5
}

for(let name in people) {
    if (people[name] == 6) {
        console.log(name)
    }else{
        console.log("Користувача не знайдено")
    }
}

