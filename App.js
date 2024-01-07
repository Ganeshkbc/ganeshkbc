import Bottom from './Bottom';
import './App.css';
import Right from './Right';
import Left from './Left';
import Middle from './Middle';
import aadhaar from './aadhaar.avif'
import pancard from './pancard.jpg'
import voter from './voter.jpg'
import rationcard from './rationcard.jpg'
import irctc from './irctc.webp'
import ngsp from './ngsp.webp'
import swiggy from './swiggy.jpg'
import news from './news.jpg'

function App() {

  return (
    <div className="main">
      <h3 align="center" className='head'>All in One Site</h3>

    

      <div className="left">
        <Left />
      </div>

      <div className="middle">
        <Middle img={aadhaar} label="Aadhar Service" link='https://myaadhaar.uidai.gov.in/' />
        <Middle img={pancard} label="PanCard Service" link='https://incometaxindia.gov.in/Pages/tax-services/apply-for-pan.aspx' />
        <Middle img={voter} label="VoterId Service" link='https://voterportal.eci.gov.in/' />
        <Middle img={rationcard} label="Ration Service" link='https://nfsa.gov.in/' />
        <Middle img={irctc} label="Ticket Booking" link='https://www.irctc.co.in/nget/train-search' />
        <Middle img={ngsp} label=" NGS Portal" link='https://services.india.gov.in/service/detail/apply-for-birth-certificate-maharashtra' />
        <Middle img={swiggy} label="Food Service" link='https://www.swiggy.com/' />
        <Middle img={news} label="Latest News" link='https://indianexpress.com/' />
      </div>

      <div className="right">
        <Right />
      </div>

    
      <div className='bottom'>
        <Bottom />
      </div>

    </div>

  );
}

export default App;
