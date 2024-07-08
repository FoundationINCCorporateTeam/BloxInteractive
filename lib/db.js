// lib/db.js

const users = [];

export async function findUser(username) {
  return users.find(user => user.username === username);
}

export async function addUser(user) {
  users.push(user);
}
