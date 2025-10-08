import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm({ setContacts }) {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.lastname || !form.email || !form.phone) {
      setError(true);
      return;
    }
    setError(false);

    const newContact = { ...form, id: new Date().getTime() };
    setContacts((contacts) => [...contacts, newContact]);
    setForm({
      name: "",
      lastname: "",
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={form.lastname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <button type="subnit">Add Contact</button>
        </form>
      </div>
      {error && <p className={styles.error}>Please enter valid data !!</p>}
    </>
  );
}

export default ContactForm;
