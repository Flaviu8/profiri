import './footer.css'
import sol from "../../assets/SOL.svg"
import sal from "../../assets/SAL.svg"
import payment from "../../assets/payment.png"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitterx.svg"
import { NavLink } from 'react-router-dom'

import { useForm, ValidationError } from '@formspree/react';

 

export default function Footer() {
    const [state, handleSubmit] = useForm("xleqgnkb");

    let message = "Vă mulțumim pentru subscribe!"
    

  return (
    <div>
        <div className='line'></div>
        <footer>
                <div className='title'>
                    <h3>Abonează-te</h3>
                    <p>Abonează-te să aflii cele mai noi servicii sau oferte.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email* </label>
                        <input id="email"
                                type="email" 
                                name="email" />
                                 <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                    <button  type="submit" disabled={state.submitting}>Abonare</button>
                    <div className='success'>
                      {state.succeeded ? <p>{message}</p> : ''}
                    </div>
                    </form>
                </div>
                <div className='footer-content'>
                    <div className='links'>
                        <h3>Linkuri utile</h3>
                        <NavLink to="/termeni">Termeni și condiții</NavLink>
                        <NavLink to="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">SOL</NavLink>
                        <NavLink to="https://anpc.ro/ce-este-sal/">ANPC</NavLink>
                    </div>
                        <div className='social-links'>
                            <h3>Social media</h3>
                            <img src={facebook} alt="fb" />
                            <img src={instagram} alt="insta" />
                            <img src={twitter} alt="twitter" />
                        </div>
                </div>
            <div className='copyright'>
                <div>
                    <p>Copyright &copy; 2024 | Proiect creat de: ProFiri</p>
                </div>
                <div>
                    <p>Totate plățile se vor realiza prin stripe.</p>
                    <img src={payment} alt="" />
                </div>
            </div>
            <div className='icons'>
                <img src={sol} alt="sol" />
                <img src={sal} alt="sal" />
            </div>
        </footer>
    </div>
  )
}
