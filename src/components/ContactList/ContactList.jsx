import React from "react";
import PropTypes from "prop-types";


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(({ name, id, number }) => {
        return (
          <li className="contact-item" key={id}>
            {name}: {number}
            <button
              className="contact-item-button"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
