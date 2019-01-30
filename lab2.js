'use strict';

var name = prompt('What\'s your name?');
console.log(name);

var game = prompt(name + ', are you ready to play 5 questions? \'Y\' or \'N\'');
console.log(game);

if (game === 'Y') {
  alert('Great');
} else {
  alert('Too bad!');
}

var q1 = prompt('Do I like true crime?');
console.log(q1);

if (q1 === 'Y') {
  alert('Correct!');
} else {
  alert('You\'re wrong!');
}

var q2 = prompt('Are my sneezes obnoxious?');
console.log(q2);

if (q2 === 'Y') {
  alert('I\'m very sorry, I wish I could make them quiet..');
} else {
  alert('You angel, stop lying');
}

var q3 = prompt('Do hate watching movies and tv?');
console.log(q3);

if (q3 === 'Y') {
  alert('HA! Nope!');
} else {
  alert('I could watch movies and tv everyday for the rest of my life.');
}

var q4 = prompt('Do I prefer Iron Man to Captain America?');
console.log(q4);

if (q4 === 'Y') {
  alert('Absolutely');
} else {
  alert('I\'m offended. Team Stark all day.');
}

var q5 = prompt('Am I a dog person?');
console.log(q5);

if (q5 === 'Y') {
  alert('I LOVE ALL THE DOGGOS!');
} else {
  alert('You don\'t know me at all..');
}


