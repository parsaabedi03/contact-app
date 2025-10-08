import styles from "./ListItems.module.css";

function ListItems({ data, setContacts }) {
  const { id, name, lastname, email, phone } = data;

  const handleDelete = (id) => {
    setContacts((contacts) => contacts.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.contactCard}>
      <span>
        {name} {lastname}
      </span>
      <div>
        <span className={styles.icon}>📬</span>
        <span>{email}</span>
      </div>
      <div>
        <span className={styles.icon}>📞</span>
        <span>{phone}</span>
      </div>
      <button onClick={() => handleDelete(id)}>🗑️</button>
    </div>
  );
}

export default ListItems;
