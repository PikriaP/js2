
// 1
const studensts = ['Natia', 'Elene', 'Mariami', 'Marta', 'danieli'];
const reverced = studensts.reverse(studensts);
console.log(reverced); 
// [ 'danieli', 'Marta', 'Mariami', 'Elene', 'Natia' ]

// 2
const studentsWithA= studensts.filter(word => word.includes('a'));
console.log(studentsWithA);
// [ 'danieli', 'Marta', 'Mariami', 'Natia' ]
