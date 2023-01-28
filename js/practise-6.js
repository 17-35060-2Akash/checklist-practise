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

const { name, ...rest } = student;
console.log(name);
console.log(rest);
