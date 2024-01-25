import './order.css'
import { useForm, ValidationError } from '@formspree/react';
import {Helmet} from "react-helmet";
 

export default function Order() {
    const [state, handleSubmit] = useForm("xeqyekwl");

  return (
    
    <div className='contact-main'>
          <Helmet>
                <meta charSet="utf-8" />
                <h1>Profiri-Trimite o comandă</h1>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <div className='title'>
                <h1>Trimite cerere</h1>
        </div>
          <div className='contact-page'>
        <div className='form-section'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nume*</label>
                <input type="name" 
                id='name'
                name='name' required/>
            <label htmlFor="phone">Număr de telefon*</label>
                <input type="phone"
                id='phone'
                name='phone' required/>
            <label htmlFor="email">Email* </label>
                <input  id="email"
                        type="email" 
                        name="email" required />
                         <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
            <label htmlFor="price">Prețul serviciului* </label>
                <input type="text" id='price' name='price' required/>
            <label htmlFor="message">Mesaj* </label>
                <textarea type="text" id='message' name='message' required/>
                <div className='subscribers'>
                    <input
                        type="checkbox"
                        id="subscribeNews"
                        name="subscribe"
                        value="newsletter" />
                        <span>Abonează-te pentru a afla cele mai noi promoții și oferte.</span>   
                </div>
      
                <button type="submit" disabled={state.submitting}>Trimite cerere</button>
                <div className='success'>
                   {state.succeeded ? <p>Mulțumim pentru comandă! Vom reveni cu un mesaj în cel mai scurt timp posibil.</p> : ''}
                </div>
         </form>
        </div>
    </div>
    <div className='note'>
        <h2>Notă:</h2>
        <p>Avem nevoie de toate detaliile la completarea formularului de mai sus pentru a determina un preț corect. La descrierea serviciului preferăm să veniți cu idei pentru palete de culori sau dacă doriți puteți atașa imagini cu paletele de culori pe care doriți să le folosim la adresa de email suport.profiri@yahoo.com.Vă mulțumim!</p>
    </div>
    </div>
  )
}
