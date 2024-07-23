import { Route, Routes, Link } from "react-router-dom";

function Profile() {
    return ( <h1>Profile Component</h1> );
}
function Settings() {
    return ( <h1>Settings Component</h1> );
}

function Dashboard() {
    return (  
        <div>
            <h3>Dashboard component</h3>
            <nav>
                <Link to='profile'>Profile</Link>
                <Link to='settings'>Settings</Link>
            </nav>
            <Routes>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Dashboard;