const listContacts = require("./listContacts");
const update = require("./update");

async function removeContact(contactId) {
  console.log(contactId);
  const allContacts = await listContacts();
  const idx = allContacts.findIndex(
    (item) => item.id.toString() === contactId.toString()
  );
  if (idx === -1) {
    return null;
  }
  const [delContact] = allContacts.splice(idx, 1);
  update(allContacts);
  return delContact;
}

module.exports = removeContact;
