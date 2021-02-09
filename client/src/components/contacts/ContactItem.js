import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i class="fas fa-envelope"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i class="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button class="btn btn-dark btn-sm">Edit</button>
        <button class="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
