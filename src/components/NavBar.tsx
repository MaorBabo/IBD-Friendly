import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/Profile">Profile</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
      <Link to="/Home" className="site-title">
        IBD-Friendly
      </Link>
    </nav>
  );
}

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
