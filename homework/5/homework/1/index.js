const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name,age,projects:{diceGame}} = student;
console.log(name,age,diceGame);
