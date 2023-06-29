import fs from 'fs';
import User from './models/user.js';

const users = [
    new User(1, 'John Doe', 30),
    new User(2, 'John Smith', 40),
    new User(3, 'Jane Doe', 50),
    new User(4, 'Jane Smith', 60),
];

let dbData = new Map();

dbData.set('users', users);

const dbObject = Object.fromEntries(dbData);


fs.exists('db.json', (exists) => {
    if (!exists) {
        fs.writeFile('db.json', JSON.stringify(dbObject), (err) => {
            if(err) {
                console.error(err);
            }
        });
    }
});
