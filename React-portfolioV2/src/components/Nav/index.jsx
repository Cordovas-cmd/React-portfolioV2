import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <ul className="flex-row navbar-nav ml-auto">
        <li
          className="nav-item"
        >
        <a className=
        {` nav-link mx-5 ${currentPage === '/' && 'navActive'}`}
        key="about">
          <Link to="/">About</Link>
       </a>
        </li>
        {pages.map((Page) => (
          <li
             className="nav-item"
           
          >
            <a className=
        {` nav-link mx-5 ${currentPage === '/' && 'navActive'}`}
        key={Page}>
        <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
       </a>
            
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

export default Nav;