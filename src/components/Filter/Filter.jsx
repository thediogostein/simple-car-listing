import styles from './Filter.module.css'

function Filter(props) {
  function handleChange(e){
    props.setFilter(e.target.value)
  }

  return (
    <form className={styles.form}>
      <label htmlFor='make'>Choose Make:</label>
      <select name='cards' id='make' onChange={handleChange} value={props.filter}>
        <option value=''>All</option>
        <option value='audi'>Audi</option>
        <option value='bmw'>BMW</option>
        <option value='ferrari'>Ferrari</option>
        <option value='Lamborghini'>Lamborghini</option>
      </select>
    </form>
  )
}

export default Filter