import React from 'react';

export default function NavBar({ user, onLogout }) {
  return (
    <nav>
      <div className="inner">
        <a href="/" style={{fontWeight:'700'}}>🎓 Student Job Portal</a>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          {user ? (
            <>
              <span className="tag">{user.role}</span>
              <span className="muted">Hi, {user.name}</span>
              <a href="/" onClick={(e)=>{e.preventDefault(); onLogout();}} className="btn">Logout</a>
            </>
          ) : (
            <>
              <a href="/login" className="btn">Login</a>
              <a href="/register" className="btn primary">Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
