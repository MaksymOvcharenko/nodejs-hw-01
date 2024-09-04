import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    const deleteLastContact = allContacts.slice(0, -1);
    await writeContacts(deleteLastContact);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
