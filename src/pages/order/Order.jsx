import './order.css'
export default function Order() {
  return (
    <div className='contact-main'>
         <div className='title'>
                <h1>Trimite cerere</h1>
        </div>
          <div className='contact-page'>
        <div className='form-section'>
        <form>
            <label>Nume*</label>
                <input type="name" />
            <label>Prenume*</label>
                <input type="name" />
            <label>Număr de telefon*</label>
                <input type="phone" />
            <label>Email* </label>
                <input type="email" />
            <label>Prețul serviciului* </label>
                <input type="text" />
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
                <button>Trimite cerere</button>
            </div>
        </div>
    </div>
    <div className='note'>
        <h2>Notă:</h2>
        <p>Avem nevoie de toate detaliile la completarea formularului de mai sus pentru a determina un preț corect. La descrierea serviciului preferăm să veniți cu idei pentru palete de culori sau dacă doriți puteți atașa imagini cu paletele de culori pe care doriți să le folosim.Vă mulțumim!</p>
    </div>
    </div>
  )
}
