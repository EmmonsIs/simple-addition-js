// Isaiah Emmons
// April 17th, 2024
// Query Selector

// Input
// Declareing Variables
const student = document.querySelector('#student');
const homeSchool = document.querySelector('#homeSchool');
const city = document.querySelector('#city');

// Process
document.body.style.backgroundColor = 'lightblue';

// Student
student.style.color = 'var(--steelblue)'; 
student.style.fontSize ='1.7rem';

// homeSchool
homeSchool.style.fontSize = '1.2rem';
homeSchool.style.marginBottom = '30px';
homeSchool.style.fontFamily = 'Helvetica, san-serif';
homeSchool.style.fontVariant = 'small-caps';
homeSchool.style.fontStyle = 'italic';

//city
city.style.display = 'inline';
city.style.color ='salmon';
city.style.padding = '10px';
city.style.border = '4px dotted orange';
