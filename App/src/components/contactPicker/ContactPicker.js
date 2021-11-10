import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <div>
    ContactPicker
    <select name={name} onChange={onChange} defaultValue={""}>
      <option value={""} key={-1} >
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
    </div>
  );
};
