import { Outlet } from 'react-router-dom';
import NavBarSuperior from './NavBarSuperior/NavBarSuperior';
import NavBarInferior from './NavBarInferior/NavBarInferior';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout-container">
      <NavBarSuperior />
      <NavBarInferior />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}