import data from '../../data.json'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import styles from './CarList.module.css'

function CarList() {
  
  const listItems = data.map(item => <CarItem key={item.id} name={item.name} description={item.description} img={item.img}/>)

  return (
    <section className='wrapper'>
      <Filter />
      <ul role='list' className={styles.ul}>
      {listItems}
      </ul>
    </section>
  )
}

export default CarList