import React, {useState} from "react";
import project from './projectdata';
import styles from'./project.module.css';
function Contact(){
    const[data,setdata]=useState(project);
return(<section className={styles.full}>
    <h2 style={{textAlign:'center'}}>projects</h2>
    {data.map((oneproject)=>{
        const{id,img,name,details}=oneproject;
      return(
        <section className={styles.Projectitem}key={id}>
            
            <img src={img} alt={name}/>
            <div className='text'>
            <h3>{name}</h3>
            <p>{details}</p>
            </div>
        </section>
      )
    })}
</section>
)
}
export default Contact;