import { useState } from "react";
import styles from "./ContactForm.module.css";
import inputs from "../constants/inputs";

function ContactForm({ setContacts }) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.lastName || !form.email || !form.phone) {
      setError(true);
      return;
    }
    setError(false);

    const newContact = { ...form, id: new Date().getTime() };
    setContacts((contacts) => [...contacts, newContact]);
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={form[input.name]}
              onChange={handleChange}
            />
          ))}
          <button type="subnit">Add Contact</button>
        </form>
      </div>
      {error && <p className={styles.error}>Please enter valid data !!</p>}
    </>
  );
}

export default ContactForm;
