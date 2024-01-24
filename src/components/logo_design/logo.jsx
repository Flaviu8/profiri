import './logo.css'
import brochures from '../../assets/brochures.jpg'
import cloths from '../../assets/haine.png'
import workers from '../../assets/workers.png'


export default function Logo() {
  return (
    <>
         <div className='logo-design'>
            <div className='title'>
                    <h3>Logo Design</h3>
                </div>
                <div className='logo'>
                    <div className='text'>
                        <p>Oferim un serviciu de design pentru bannere, pliante, broșuri, branding, social media și logo-uri personalizate. Echipa noastră de designeri  vă ajută să oferiți business-ului dvs. o remarcă în rândul competitorilor. Ne asigurăm că oferim calitate și atenție fiecărui detaliu pentru o colaborare cât mai remarcabilă</p>
                    </div>
                    <div>
                        <img src={brochures} alt="brochures" />
                    </div>
                </div>
          </div>
          <div className='logo-design'>
            <div className='title'>
                    <h3>Personalizare Haine</h3>
                </div>
                <div className='logo-side'>
                    <div className='text'>
                        <p>Aici este destinația ta pentru tricouri și hanorace personalizate, fiecare articol devine o piesă unică. Suntem pasionați de transformarea hainelor tale obișnuite în expresii autentice ale personalității și stilului tău. </p>
                    </div>
                    <div>
                        <img src={cloths} alt="haine" />
                    </div>
                </div>
          </div>
          <div className='logo-design'>
            <div className='title'>
                    <h3>Personalizare Echipamente de Muncă</h3>
                </div>
                <div className='logo-side'>
                    <div className='text'>
                        <p>Oferim printare cu logo-ul companiei tale pe echipamentele de muncă! Suntem dedicați să oferim soluții complete pentru toate nevoile tale legate de echipamentele de lucru, cu un accent deosebit pe originalitate și profesionalism  </p>
                    </div>
                    <div>
                        <img src={workers} alt="workers" />
                    </div>
                </div>
          </div>
    </>
  )
}
