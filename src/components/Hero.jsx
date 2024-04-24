
import  groupe from '../assets/Group 77.png'


const Hero = () => {
  return (
    <section className='hero'>
          
       
            <img src={groupe} alt="groupe" className='hero--photo'/>
            <h1 className='hero--header font-bold text-4xl mt-4 '>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by <br />
            one-of-a-kind hosts-all without leaving
            <br /> home. </p>

       
   </section>

  )
}

export default Hero
