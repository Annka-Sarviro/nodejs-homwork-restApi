const fs = require("fs/promises");
const contactsPath = require("./contactPath");

async function updateContact(allContacts) {
  return await fs.writeFile(contactsPath, JSON.stringify(allContacts));
}

module.exports = updateContact;
