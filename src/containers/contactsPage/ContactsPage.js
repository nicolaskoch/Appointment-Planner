import React, { useState, useEffect } from 'react'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const { contacts, addContact } = props
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isDuplicate, setIsDuplicate] = useState(false)

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name)
      if (found !== undefined) {
        return true
      } else {
        return false
      }
    }
    if (nameIsDuplicate()) {
      setIsDuplicate(true)
    } else {
      setIsDuplicate(false)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(name, phone, email)
      console.log('Contact added')
      setName('')
      setPhone('')
      setEmail('')
    }
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? ' - Name Already Exists' : ''}
        </h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  )
}
