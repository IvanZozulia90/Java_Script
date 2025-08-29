const userName = 'John';
const greeting = 'I`m John';
const _profession = 'Developer';
const $hobby = 'Walking';
const favoriteDesert = 'cake';
let pet_ = 'dog'

let result = `My name is ${userName}, i like ${$hobby} with my ${pet_}`;

// console.log(result)


let students = 
{
    group: "QA Pro",
    content:
    [
        {name: "ivan", age: 35},
        {name: "igor", age: 25},
        {name: "olga", age: 32}
    ]
}

let nameStudy = students.content[1].name;

for (let student in students){
    if(student.content[0] = "olga"){
        console.log(student)
    }
}
