import { Link } from "react-router-dom";

const Footer = function(){
    const myStyle = {
        'position': 'relative',
         'top': '145px'
    }
    return (<footer style={myStyle} className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark text-light">
        <p className="col-md-4 mb-0 ">© 2024 Company, Mylearning</p>          
    
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/blog" className="nav-link px-2 text-muted">Blog</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact Us</Link></li>
        </ul>
      </footer>);
}
export {Footer};