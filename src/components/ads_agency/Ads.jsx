import './ads.css'
import google from '../../assets/google.jpg'
import meta from '../../assets/meta.jpg'

export default function Ads() {
  return (
    <div className='ads-main'>
         <div className='title'>
            <h3>Agenție de Publicitate</h3>
        </div>
        <div className='container'>
        <div className="container-ads">
            <h5>Servicii de integrare reclame Google</h5>
            <img src={google} alt="google" />
            <p>Salvează-ți business-ul crescând numărul vizitatorilor online pe website-ul tău oferindu-i un serviciu de integrare google ads, google analytics și optimizare necesară a diferitelor campanii. </p>
        </div>
        <div className="container-ads">
            <h5>Servicii de integrare reclame Meta</h5>
            <img src={meta} alt="meta" />
            <p> Cu ajutorul pixelului meta și toate reclamele oferite de meta poți oferi campaniilor tale diferite strategii de marketing și de asemenea poate aduce un beneficiu afacerii tale.</p>
        </div>
        </div>
    </div>
  )
}
