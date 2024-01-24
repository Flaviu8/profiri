import './about.css'
import sosa from '../../assets/3.jpg'
import panday from '../../assets/2.jpg'
import flyer from '../../assets/1.jpg'

export default function About() {
  return (
    <div>
        <div className='about-us'>
            <div className='title'>
                <h3>Despre noi</h3>
            </div>
            <div className='about'>
                <div>
                    <img src={sosa} alt="sosa" />
                </div>
                <div className='text'>
                    <h4>Misiunea noastră</h4>
                    <p>Suntem o companie care dispune de un serviciu de logo design dedicat care are datoria să respecte cerințele și așteptările fiecărui client. Noi suntem de părere că un design perfect poate aduce un beneficiu semnificativ companiei tale și să ne asigurăm că îți atingi scopurile.</p>
                </div>
                
            </div>

            <div className='abouts'>
                <div className='text expectation'>
                    <h4>Așteptările noastre</h4>
                    <p>Colaborăm cu fiecare client în parte pentru fiecare proces și dorim să înțelegem fiecare brand, audiență sau scop. Echipa noastră este creată din designeri experimentați și este dedicată să creeze design personalizat pentru fiecare client.</p>
                </div>
                <div>
                    <img src={panday} alt="panday" />
                </div>
                <div className='text expect'>
                    <h4>Așteptările noastre</h4>
                    <p>Colaborăm cu fiecare client în parte pentru fiecare proces și dorim să înțelegem fiecare brand, audiență sau scop. Echipa noastră este creată din designeri experimentați și este dedicată să creeze design personalizat pentru fiecare client.</p>
                </div>
            </div>
            <div className='about'>
                <div>
                    <img src={flyer} alt="flyer" />
                </div>
                <div className='text'>
                    <h4>Experiența noastră</h4>
                    <p>Cu o experiență de peste 5 ani în industria designului, am lucrat pentru diferite proiecte și pentru o clientelă diversificată. Am creat designuri atât pentru start-up cât și pentru afaceri deja existente pentru a le livra rezultate excepționale.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
