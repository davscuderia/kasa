import { NavLink } from 'react-router-dom'

function getActiveClass({ isActive}) {
    return isActive ? 'active' : '';
}

function NavItem({ to, label }) {
    return (
        <NavLink to={to} className={getActiveClass}>
            {label}
        </NavLink>
    )
}

export default NavItem