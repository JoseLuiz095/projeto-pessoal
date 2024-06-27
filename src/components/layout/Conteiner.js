<<<<<<< HEAD
import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
           {props.children} 
        </div>
    )
    
}
=======
import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
           {props.children} 
        </div>
    )
    
}
>>>>>>> origin/main
export default Container;