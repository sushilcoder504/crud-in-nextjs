
import aboutstyle from '../styles/About.module.css'
import Image from 'next/image'

 const about = ()=>{
    return(
        <>
         <div className={aboutstyle.section}>
          <h1>Hello world how are you</h1>
          <Image src="/back.jpg" alt="sushil" width={100} height={100}/>
          </div>
        </> 
    )
}

export default about