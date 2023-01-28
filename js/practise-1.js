const student = {
    isStudent: true,
    varsity: 'None',
    id: {
        year: 17,
        mainId: 35060,
        semester: 2
    },
    name: ['Nasin', 'Ayenul', 'Akash'],
    makeId: function () {
        return this.id.year + '-' + this.mainId + '-' + this.semester;
    },
    setVarsity: function (varsity) {
        this.varsity = varsity;
        return varsity;
    }

}
// console.log(student.setVarsity('AIUB'));
// console.log(student.isStudent);

const name = `My name is ${student.name[2]}`;
const name2 = `My full name is ${student.name.join(' ')}`;
// console.log(name);
// console.log(name2);
console.log('My name is', ...student.name);

/* const name = `My id is ${student.id.year}-${student.id.mainId}-${student.id.semester}`;
console.log(name); */



