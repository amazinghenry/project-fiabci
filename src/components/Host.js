import hostImage from '../assets/gladstone-opara.jpg'

const Host = () => {
    return (
        <div className='container host'>
        <h2 className='host-title'> Host </h2>
        <div className="speaker-card">
            <img src={hostImage} alt="" className="img-fluid" />
            <h3 className="speaker-title">Esv. Gladstone Opara</h3>
            <p className="speaker-position">President, FIABCI Nigeria</p>
        </div>
        </div>
    );
}
 
export default Host;