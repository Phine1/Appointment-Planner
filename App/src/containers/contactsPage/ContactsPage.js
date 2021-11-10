import React, { useState, useEffect} from "react";
import { TileList } from '../../components/tileList/TileList'
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({existingContact, addingContact}) => {
// local state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(()=> {
    const duplicateName = () => {
      const found = existingContact.find((contact)=> contact.name === name);
        if(found !== undefined) {
          return true;
        }
        return false;
    };

    if (duplicateName()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, existingContact, duplicate])


  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate === false) {
      addingContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

    return (
      <>
        <section>
          <h2>
            Add Contact
            {duplicate ? "This Contact already exist" : ""}
          </h2>
          <ContactForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
          <TileList tiles={existingContact} />
        </section>
      </>
    )
};
