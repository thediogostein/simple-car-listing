import React, { useState } from 'react'

function Filter() {
  const [make, setMake] = useState('')

  function handleChange(e){
    setMake(e.target.value)
  }

  return (
    <form>
      <label htmlFor='make'>Choose Make:</label>
      <select name='cards' id='make' onChange={handleChange}>
        <option value='audi'>Audi</option>
        <option value='bmw'>BMW</option>
        <option value='Ferrari'>Ferrari</option>
        <option value='Lamborghini'>Lamborghini</option>
      </select>
    </form>
  )
}

export default Filter