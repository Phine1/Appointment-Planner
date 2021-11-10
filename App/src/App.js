import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

 //Contacts states
 const [contact, setContact] = useState([]);

 //Appointment states
 const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  // Adding new contact on top of the contact list

  const addContact = (name, phoneNumber, email) => {
    setContact([
    {
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: email

    }, 
    ...contact
    ])
  };
  

  // Adding new appointments on top of the appointment list

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      {
      appointmentTitle : title,
      contact: contact,
      date: date,
      time: time
      },
      ...appointments
    ])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>

             {/* Add props to ContactsPage */}

            <ContactsPage addingContact={addContact}
              existingContact={contact}/>
              
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>

            {/* Add props to AppointmentsPage */}

            <AppointmentsPage addingAppointment={addAppointment}
              existingContact={contact}
              existingAppointment={appointments}/>

          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
