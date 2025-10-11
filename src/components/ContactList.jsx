import styles from "./ContactList.module.css";
import ListItems from "./ListItems.jsx";

function ContactList({ contacts, setContacts }) {
  return (
    <div className={styles.container}>
      <h2>Contact List</h2>
      <div className={styles.listContainer}>
        {!contacts.length ? (
          <p className={styles.text}>No Contact Yet !!</p>
        ) : (
          contacts.map((item) => (
            <ListItems key={item.id} data={item} setContacts={setContacts} />
          ))
        )}
      </div>
    </div>
  );
}

export default ContactList;
