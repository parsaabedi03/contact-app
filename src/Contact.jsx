import { useState } from "react";

import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";

function Contact() {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <ContactForm setContacts={setContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </>
  );
}

export default Contact;
