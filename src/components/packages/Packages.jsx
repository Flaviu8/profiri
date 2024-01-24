import './packages.css'

export default function Packages() {
  return (
    <div className='packages'>
          <div className='title'>
                <h3>Prețuri</h3>
            </div>
            <div className='flex-box'>
                <div className='prices'>
                    <h6>99 RON</h6>
                    <p>Basic</p>
                    <li>1 Logo</li>
                    <li>3 revizuiri</li>
                    <li>Format jpeg/png</li>
                    <li>1 singură opțiune</li>
                    <div className='buttons'>
                         <button className='first'>Comandă acum</button>
                    </div>
                </div>
                <div className='prices'>
                    <h6>199 RON</h6>
                    <p>Pro</p>
                    <li>1 Logo</li>
                    <li>Revizuire nelimitată</li>
                    <li>Format svg/pdf/jpeg/png</li>
                    <li>3 opțiuni</li>
                    <div className='buttons'>
                         <button className='second'>Comandă acum</button>
                    </div>
                   
                </div>
                <div className='prices'>
                    <h6>Ofertă Personalizată</h6>
                    <p>Personalizat</p>
                    <p>Contactează-ne pentru o ofertă personalizată.</p>
                    <div className='buttons'>
                         <button>Comandă acum</button>
                    </div>
                </div>
            </div>
           
    </div>

  )
}
