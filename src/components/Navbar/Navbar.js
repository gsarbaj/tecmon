import React, {useState} from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from "gatsby"
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
   <nav className={'navbar'}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
          <button className={'nav-btn'} onClick={() => setShow(!show)}>
            <FaAlignJustify/>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to={"/apiemus"} className={'nav-link'} activeClassName={'active-link'} onClick={() => setShow(show)}>Apie Mus</Link>
          <Link to={"/paslaugos"} className={'nav-link'} activeClassName={'active-link'} onClick={() => setShow(show)}>Paslaugos</Link>
          <Link to={"/darbai"} className={'nav-link'} activeClassName={'active-link'} onClick={() => setShow(show)}>Darbai</Link>
          <Link to={"/kainos"} className={'nav-link'} activeClassName={'active-link'} onClick={() => setShow(show)}>Kainos</Link>
          <Link to={"/kontaktai"} className={'nav-link'} activeClassName={'active-link'} onClick={() => setShow(show)}>Kontaktai</Link>
        </div>

      </div>
   </nav>
  );
 }


export default Navbar;