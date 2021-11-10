import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";


export const AppointmentsPage = ({addingAppointment, existingContact, existingAppointment}) => {
  
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addingAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm time={time} title={title}
        contact={contact} date={date}
        setContact={setContact} setDate={setDate}
        setTime={setTime} setTitle={setTitle}
        handleSubmit={handleSubmit}
        existingContact={existingContact}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={existingAppointment}/>
      </section>
    </div>
  );
};
