import Navigation from "../navbar/Navigation.jsx"
import './header.css'
// import design from '../../assets/design.jpg'

export default function Header() {
  return (
    <div>
      <Navigation />
      <div className="header-main">
        <div className="header-image">
            <div className="colors">
                <h1>Designul vorbește de la sine</h1>
                <h2>Personalizăm viziunea ta cu experiența noastră.</h2>
                <button>Start designing</button>
            </div>
        </div>
      </div>
      <div className="colors-after">
                <h1>Designul vorbește de la sine</h1>
                <h2>Personalizăm viziunea ta cu experiența noastră.</h2>
                <button>Start designing</button>
        </div>
    </div>
  )
}
