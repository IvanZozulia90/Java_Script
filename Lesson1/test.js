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
// let found = false

// for(let name in people) {
//     if (people[name] === 6) {
//         console.log(name);
//         found = true;
//     }else{
//         if(!found){
//             console.log("Користувача не знайдено")
//         }
//     }
// }

function findNameByAge(){
    const input = document.getElementById("ageInput");
    const result = document.getElementById("result");
    const ageToFind = Number(input.value);

    let found = false

    for (let name in people) {
        if (people[name] == ageToFind) {
            result.textContent = `Користувач ${name}`;
            found = true;
            break
        }else{
            if(!found){
                result.textContent = "Користувача не знайдено";
            }
        }input.value = "";
    }
}


