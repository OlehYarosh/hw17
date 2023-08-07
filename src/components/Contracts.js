import React, { useState } from "react";
import Contact from "./Contact";
import "../styles/Contracts.css"

const Contracts = () => {
    const [state, setState] = useState({
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
            }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
            }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
            }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
            }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
            }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        search: "",
        genderFilter: {
            male: true,
            female: true,
            unspecified: true,
        }
    });

    const handleSearchChange = (event) => {
        setState({
            ...state,
            search: event.target.value
        });
    };

    const handleGengerFilterChange = (event) => {
        setState({
            ...state,
            genderFilter: {
                ...state.genderFilter,
                [event.target.name]: event.target.checked
            }
        });
    };

    const filteredContacts = state.contacts.filter(contact =>
        ((contact.firstName.toLowerCase().includes(state.search.toLowerCase())) || 
        (contact.lastName.toLowerCase().includes(state.search.toLowerCase())) || 
        (contact.phone.includes(state.search))) && 
        ((state.genderFilter.male && contact.gender === "male") ||
        (state.genderFilter.female && contact.gender === "female") || 
        (state.genderFilter.unspecified && !contact.gender))
    );

    return (
        <div className="contracts">
            <input
                className="search-input"
                type="text"
                placeholder="search..."
                value={state.search}
                onChange={handleSearchChange}
            />
            <div className="gender-status">
                <label>
                    <input type="checkbox" name="male" checked={state.genderFilter.male} onChange={handleGengerFilterChange}/>
                    Чоловік
                </label>
                <label>
                    <input type="checkbox" name="female" checked={state.genderFilter.female} onChange={handleGengerFilterChange}/>
                    Жінка
                </label>
                <label>
                    <input type="checkbox" name="unspecified" checked={state.genderFilter.unspecified} onChange={handleGengerFilterChange}/>
                    Не вказано
                </label>
            </div>
            {filteredContacts.map((contact, index) => (
                <Contact 
                    key={index}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phone={contact.phone}
                    gender={contact.gender}
                />
            ))}
        </div>
    )
}

export default Contracts;
