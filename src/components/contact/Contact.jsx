import './contact.css'

export default function Contact() {
  return (
    <div className='contact-main'>
         <div className='title'>
                <h3>Contactează-ne</h3>
        </div>
          <div className='contact-page'>
        <div className='form-section'>
        <form>
            <label>Nume*</label>
                <input type="name" />
            <label>Email* </label>
                <input type="email" />
            <label>Mesaj* </label>
                <textarea type="text" />
            <label to="myfile">Atașează un fișier:</label>
                <input className='attach' type="file" id="myfile" name="myfile"></input>
         </form>
         <form className='contact-form'>
         <input
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter" />
            <p>Abonează-te pentru a afla cele mai noi promoții și oferte.</p>
         </form>
         <div className='button-contact'>
                <button>Trimite</button>
            </div>
        </div>
        <div className='pro'>
            <h4>Pentru mai multe informații:</h4>
            <p>+40749481902 sau +40750460630</p>
        </div>
    </div>
    </div>
  )
}
