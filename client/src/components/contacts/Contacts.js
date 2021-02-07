import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return <div></div>;
};

export default Contacts;
