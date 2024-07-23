import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import UserList from "./Components/userList";
import Details from "./Components/details";
import NotFound from "./Components/404";
import GetAxios from "./Components/getAxios";

function Home() {
  return ( <h1>Home Component</h1> );
}
function About() {
  return ( <h1>About Component</h1> );
}
function Contact() {
  return ( <h1>Contact Component</h1> );
}
function News() {
  return ( <h1>News Component</h1> );
}

function App() {
  return (
   
    <Router>
      <GetAxios />
      <div>
        <Link to='home'>Home</Link>
        <Link to='about'>About us</Link>
        <Link to='contact'>Contact us</Link>
        <Link to='news'>News</Link>
        <Link to='dashboard'>Dashboard</Link>
        <Link to='userlist'>Userlist</Link>
      </div>
      <Routes>
        
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
