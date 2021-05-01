import React from 'react'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          tipe="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
      </label>
      <label>
        Phone number
        <input
          tipe="tel"
          name="phone"
          // pattern={/[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}/}
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          tipe="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </label>
      <input type="submit" />
    </form>
  )
}
