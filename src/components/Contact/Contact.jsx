import css from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ user, onDelete }) => {
  return (
    <div className={css.contactWrapper}>
      <li>
        <p className={css.userInfo}>
          <FaUserLarge />
          {user.name}
        </p>
        <p className={css.userInfo}>
          <FaPhoneAlt />
          {user.number}
        </p>
      </li>
      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
