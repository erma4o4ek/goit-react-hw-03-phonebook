import React from "react";
import PropTypes from "prop-types";
import style from "../ContactFilter/ContactFilter.module.css";

const ContactFilter = ({value, onChangeFilter }) => (
  <label className={style.filterLabel}>
    Find contacts by name
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </label>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default ContactFilter;
