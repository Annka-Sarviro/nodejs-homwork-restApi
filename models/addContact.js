const listContacts = require("./listContacts");
const { v4 } = require("uuid");
const update = require("./update");

async function addContact({ name, email, phone }) {
  const allContacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  allContacts.push(newContact);
  update(allContacts);
  return newContact;
}

module.exports = addContact;
