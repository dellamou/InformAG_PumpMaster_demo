import { MdNotificationsNone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-title" to="/">PumpMaster</Link>
        <ul className="navbar-tabs">
          <Link className="navbar-link" to="#">Dashboard</Link>
          <Link className="navbar-link" to="/overview">Pumps</Link>
          <Link className="navbar-link" to="#">Reports</Link>
          <Link className="navbar-link" to="#">Alerts</Link>
        </ul>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
        <button className="navbar-notification" aria-label="Notifications">
          {MdNotificationsNone({ size: 22 })}
        </button>
        <div className="navbar-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
