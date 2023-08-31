import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Samuel Cordova</a>
      <ul className="flex-row navbar-nav ml-auto">
        <li
          className={` nav-item  ${currentPage === '/' && 'navActive'}`}
        key="about"
        >
        {/* <a className=
        {` nav-link mx-5 ${currentPage === '/' && 'navActive'}`}
        key="about"> */}
          <Link className="nav-link" to="/">About</Link>
       {/* </a> */}
        </li>
        {pages.map((Page) => (
          <li
              className={` nav-item  ${currentPage === `/${Page}` && 'navActive'}`}
              key={Page}
           
          >
       
        <Link className= "nav-link"
        to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
      
            
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

export default Nav;