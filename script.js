const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
// Create a reference to the 'players' array
const team = players;

// Create a shallow copy of the 'players' array
const team1 = [...players];

// Create a shallow copy of the 'person' object
const cap1 = { ...person };

// Modify 'team1' and 'cap1' to demonstrate that they are copies
team1.push("Mike");
person.name = "Jane";
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
