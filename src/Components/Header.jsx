import "./Menu.css";
const Header = ({ active, onNavClick }) => {
  return (
    <nav>
      <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4">EducaComunity</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${active === 'home' ? 'active' : ''}`}
            onClick={() => onNavClick('home')}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${active === 'books' ? 'active' : ''}`}
            onClick={() => onNavClick('books')}
          >
            Book Catalog
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${active === 'donation' ? 'active' : ''}`}
            onClick={() => onNavClick('donation')}
          >
            Fundraising
          </a>
        </li>
      </ul>
      </header>
      </div>
    </nav>
  );
};

export default Header;