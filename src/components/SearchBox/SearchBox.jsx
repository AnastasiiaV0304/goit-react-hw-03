import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => {
  return (
    <div>
      <label className={css.searchBoxWrapp}>
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onChange}
          className={css.inputField}
        />
      </label>
    </div>
  );
};

export default SearchBox;
