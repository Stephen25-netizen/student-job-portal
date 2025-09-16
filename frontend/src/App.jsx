import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getToken, setToken } from "./api";

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("jobs");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Check if user is already logged in
    const token = getToken();
    if (token) {
      // Decode token to get user info (simplified - in production use a proper JWT library)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
      } catch (e) {
        // Invalid token, clear it
        localStorage.removeItem('token');
      }
    }

    // Fetch jobs
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const handleLogout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
    setCurrentPage("jobs");
  };

  const renderNavigation = () => {
    return (
      <nav style={{ marginBottom: "20px", padding: "10px", borderBottom: "1px solid #ccc" }}>
        <h1 style={{ margin: "0 0 10px 0" }}>Student Job Portal</h1>
        <div>
          <button onClick={() => setCurrentPage("jobs")} style={{ marginRight: "10px" }}>
            Jobs
          </button>
          {user ? (
            <>
              <span>Welcome, {user.name}! ({user.role})</span>
              <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setCurrentPage("login")} style={{ marginRight: "10px" }}>
                Login
              </button>
              <button onClick={() => setCurrentPage("register")}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    );
  };

  const renderContent = () => {
    if (!user && (currentPage === "login" || currentPage === "register")) {
      return currentPage === "login" ? (
        <Login setUser={setUser} />
      ) : (
        <Register setUser={setUser} />
      );
    }

    return (
      <div>
        <h2>Job Listings</h2>
        {jobs.length > 0 ? (
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <strong>{job.title}</strong> — {job.company} ({job.location})
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      {renderNavigation()}
      {renderContent()}
    </div>
  );
}

export default App;

