import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

interface NavItem {
  label: string;
  icon: ReactNode;
  id: string;
  path: string;
}

// Icons...
const HomeIcon = () => (
  <svg
    className="nav__link-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
  >
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);
const BookmarkIcon = () => (
  <svg
    className="nav__link-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="nav__link-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="nav__link-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    className="nav__link-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);



const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: "saved",
    label: "Saved Recipes",
    path: "/saved",
    icon: <BookmarkIcon />,
  },
  {
    id: "discover",
    label: "Discover",
    path: "/discover",
    icon: <SearchIcon />,
  },
  {
    id: "add",
    label: "Add Recipe",
    path: "/add",
    icon: <PlusIcon />,
  },
];

const secondaryItems: NavItem[] = [
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <h1 className="nav__brand-name">Récipe</h1>
        <p className="nav__brand-tagline">Your kitchen companion</p>
      </div>

      <span className="nav__section-label">Menu</span>

      <ul className="nav__links">
{navItems.map((item) => (
  <li key={item.id}>
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `nav__link${isActive ? " active" : ""}`
      }
    >
      {item.icon}
      <span>{item.label}</span>
    </NavLink>
  </li>
))}

        <div className="nav__divider" />

        <span
          className="nav__section-label"
          style={{
            padding: "0 0.25rem",
            marginLeft: "0.25rem",
          }}
        >
          Account
        </span>

        {secondaryItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav__link${isActive ? " active" : ""}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav__footer">
        <div className="nav__avatar">C</div>

        <div className="nav__user-info">
          <div className="nav__user-name">Chef User</div>
          <div className="nav__user-role">Home Cook</div>
        </div>
      </div>
    </nav>
  );
}