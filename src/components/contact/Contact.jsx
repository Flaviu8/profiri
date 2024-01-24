import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
    const [state, handleSubmit] = useForm("xjvngrlg");

    const message = "Mesajul a fost trimis! Vom fii de ajutor în cel mai scurt timp posibil. Vă mulțumim!"

    setTimeout(() => {
                    message;
                }, 10000);
        

  return (
    <div className='contact-main'>
         <div className='title'>
                <h3>Contactează-ne</h3>
        </div>
          <div className='contact-page'>
        <div className='form-section'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nume*</label>
                <input id="name" type="name"  name="name" required/>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
            <label  htmlFor="email">Email* </label>
                <input  id="email"
                        type="email" 
                        name="email" 
                        required/>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                <label htmlFor="message">Mesaj* </label>
                <textarea type="text" id="message" name="message" required/>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <div className='subscribers'>
                    <input
                        type="checkbox"
                        id="subscribeNews"
                        name="subscribe"
                        value="newsletter" />
                        <span>Abonează-te pentru a afla cele mai noi promoții și oferte.</span>   
                </div>
                <button type="submit" disabled={state.submitting}>Trimite</button>
                <div className='success'>
                     {state.succeeded ? <p>{message}</p> : ''}
                </div>
         </form>
        </div>
        <div className='pro'>
            <h4>Pentru mai multe informații:</h4>
            <p>+40749481902 sau +40750460630</p>
        </div>
    </div>
    </div>
  )
}
