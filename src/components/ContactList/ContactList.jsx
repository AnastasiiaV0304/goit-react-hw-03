import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ users, onDelete }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(users) &&
          users.map((user) => {
            return <Contact key={user.id} user={user} onDelete={onDelete} />;
          })}
      </ul>
    </div>
  );
};

export default ContactList;
