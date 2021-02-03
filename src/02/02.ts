const student = {
    name: "Dimich",
    age: 32,
    isActive : false,
    address:{
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        }, {
            id:2,
            title: "CSS"
        }, {
            id:3,
            title: "HTML"
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)