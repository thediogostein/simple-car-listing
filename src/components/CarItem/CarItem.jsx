import React from 'react'
import styles from './CarItem.module.css'

function CarItem({id,name, description, img}) {
  return (
    <li className={styles.li}>
      <img src={`images/${img}`}/>
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  )
}

export default CarItem