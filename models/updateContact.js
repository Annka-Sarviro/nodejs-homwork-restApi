const listContacts = require("./listContacts");
const update = require("./update");

async function updateContact(contactId, { name, email, phone }) {
  const allContacts = await listContacts();

  const idx = allContacts.findIndex(
    (item) => item.id.toString() === contactId.toString()
  );
  if (idx === -1) {
    return null;
  }

  allContacts[idx] = { contactId, name, email, phone };
  await update(allContacts);
  return allContacts[idx];
}

module.exports = updateContact;
