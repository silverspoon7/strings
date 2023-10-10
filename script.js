let x;

let firstName = 'Jack';
let lastName = 'Sparrow';
let info = 'you are great';
let a = 4;
let b = "4";
let age = 14;
let message = 'Hello';

x = firstName + ' ' + lastName;
x = firstName.length;
x = firstName[3];
x = lastName.length;
x = lastName[1]
x = lastName[6]
x = lastName[4]

x = info.substring(0,7);
x = info.replace("you", 'we');
x = firstName.toLowerCase()
x = lastName.toUpperCase();
x = info.trim()
x = info.split('')
x = a==b
x = `${message} Mr ${firstName} ${lastName} ${age} ${info}`
console.log (x)