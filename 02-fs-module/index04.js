// 1. Create a JSON file called `data.json` with some sample data (e.g., a list of users with names and ages).
// 2. Write a script to read the JSON file and parse its contents into a JavaScript object.
// 3. Add a new user to the object and write the updated object back to the JSON file.

const fs = require('fs');

const data = [
  {
    name: 'Alice',
    age: 30,
  },
  {
    name: 'Bob',
    age: 25,
  },
];

const newUser = {
  name: 'Charlie',
  age: 35,
};

const filePath = './data.json';

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

const dataRead = fs.readFileSync(filePath, 'utf-8');
const users = JSON.parse(dataRead);
console.log('This data was read from the file:', users);

users.push(newUser);

fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
