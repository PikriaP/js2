
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

// 4
const numbers = [1, 7, 35, 15, 30];
const increased = numbers.sort((a,b)=> a-b);
console.log(increased);
// [ 1, 7, 15, 30, 35 ]

// 5

const user = 'admin';           
const passCode = 12345;         

// Prompt the user to enter the username and password
const promptUser = prompt('Please enter your username'); 
const promptCode = Number(prompt('Please enter your password')); 

// Check if both the username and password match
if (promptUser === user && promptCode === passCode) {
    console.log('Login successful. Welcome!');
} 
// Check if both username and password are incorrect
else if (promptUser !== user && promptCode !== passCode) {
    console.log('Login failed. Please try again.');
}
// Check if only the username is incorrect
else if (promptUser !== user) {
    console.log('Incorrect username');
} 
// Check if only the password is incorrect
else if (promptCode !== passCode) {
    console.log('Incorrect password');
}

