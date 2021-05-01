import React from 'react'

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select onChange={handleChange}>
      <option>No contact selected</option>
      {contacts.map((contact) => (
        <option value={contact}>{contact}</option>
      ))}
    </select>
  )
}
