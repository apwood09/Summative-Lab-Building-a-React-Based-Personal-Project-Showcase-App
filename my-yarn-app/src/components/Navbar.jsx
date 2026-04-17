import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/inventory" className="nav-link">Yarn Inventory</Link>
      <Link to="/add" className="nav-link add-btn">+ New Product</Link>
    </div>
  </nav>
);