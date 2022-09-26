const fs = require("fs/promises");
const contactsPath = require("./contactPath");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const allContacts = JSON.parse(data);
  return allContacts;
}

module.exports = listContacts;
