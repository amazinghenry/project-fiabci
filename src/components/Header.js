import fiabciLogo from '../assets/fiabci-logo.png'
import jubileeLogo from '../assets/50th-icon.png'
// import fiabcibg from '../assets/fiabci-bg.png'
// import location from '../assets/location-icon.png'

const Header = () => {
    return ( 
        <header className="container-fluid">
            <div className='fiabci-logo'>
            <img src={fiabciLogo} alt='fiabci brand' className='img-fluid main-logo' />
            </div>

            <div className='jubilee'>
            <img src={jubileeLogo} alt='fiabci brand' className='img-fluid' />
            </div>

            <div className='tagged'>
                <h2 className='tagged-title'>Tagged:</h2>
                <h3 className='tagged-firstline'>Repositioning The Real Estate Industry for the Future:</h3>
                <h3 className='tagged-secline'>Ethics, Affordability and Sustainability</h3>
            </div>

            <div className='time-loc'>
                <h3 className='date'> 8TH Nov. 2023 | 8:00AM </h3>
                <h3 className='location'> Grand Ball Room,  Eko Hotels and Suites, V.I, Lagos</h3>
            </div>
        </header>
    );
}
 
export default Header;