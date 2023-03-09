import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <NavLink className="nav_link" to="/project/apps">Show Apps</NavLink>
      <NavLink className="nav_link" to="/project/games">Show Games</NavLink>
      <Outlet />
    </div>
  )
}
