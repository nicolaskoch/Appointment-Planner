import React from 'react'
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

  const getContactNames = () => {
    return contacts.map((contact) => contact.name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
          placeholder="Title"
        />
      </label>
      <label>
        Pick a contact
        <ContactPicker
          name="contact"
          value={contact}
          contacts={getContactNames()}
          handleChange={({ target }) => setContact(target.value)}
          placeholder="Appointment With"
        />
      </label>
      <label>
        Date
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={({ target }) => setDate(target.value)}
          required
        />
      </label>
      <label>
        Time
        <input
          type="time"
          name="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
          required
        />
      </label>
      <input type="submit" />
    </form>
  )
}
