import "../styles/Contact.css";
import React from "react";

const Contact = ({firstName, lastName, phone, gender}) => {
    const genderClass = gender === "male" ? "male" : gender === "female" ? "female" : "unspecified";
    const contactClass = `contact ${genderClass}`;

    return (
        <div className={contactClass}>
            <p>Ім'я: { firstName }</p>
            <p>Прізвище: { lastName }</p>
            <p>Телефон: { phone }</p>
            <p>Стать: { gender }</p>
        </div>
    );
};

export default Contact;