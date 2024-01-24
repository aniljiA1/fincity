import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <Link to="/" className="nav-link">
      <h1 className="heading">Modelyn Torff</h1>
    </Link>
    <div className="sections">
      <Link to="/about" className="nav-link">
        <p className="section_heading">About</p>
      </Link>
      <Link to="/project" className="nav-link">
        <p className="section_heading">Project</p>
      </Link>
      <Link to="/contact" className="nav-link">
        <p className="section_heading">Contact</p>
      </Link>
    </div>
  </div>
)

export default Header
