import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const allContacts = await readContacts();
    const newContact = [];
    for (let index = 0; index < number; index++) {
      const contact = await createFakeContact();
      newContact.push(contact);
    }
    const addContact = allContacts.concat(newContact);
    writeContacts(addContact);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
