
// 1
const studensts = ['Natia', 'Elene', 'Mariami', 'Marta', 'danieli'];
const reverced = studensts.reverse(studensts);
console.log(reverced); 
// [ 'danieli', 'Marta', 'Mariami', 'Elene', 'Natia' ]

// 2
const studentsWithA= studensts.filter(word => word.includes('a'));
console.log(studentsWithA);
// [ 'danieli', 'Marta', 'Mariami', 'Natia' ]

// 3
const persons = ['David', 'Elene', 'Teona', 'Giorgi'];
const hasElene =persons.includes('Elene');
if(hasElene) {
    console.log('Elene is in the persons array');

}else{
    console.log('Elene is not in the persons array.');
    
}
// Elene is in the persons array

