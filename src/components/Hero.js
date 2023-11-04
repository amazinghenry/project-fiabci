import heroImage from '../assets/hero-image.jpg'

const Hero = () => {
    return ( 
        <div className="hero container">
            <img src={heroImage} alt="hero" className="img-fluid" />
        </div>
     );
}
 
export default Hero;