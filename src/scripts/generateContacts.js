const contacts = createFakeContact();
const generateContacts = async (number) => {
  try {
    console.log(contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
