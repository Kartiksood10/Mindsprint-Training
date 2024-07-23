import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddUser from "./Components/AddUser";
import ListUser from "./Components/ListUser";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='list'>Show all users</Link>
        <Link to='add'>Add new user</Link>
      </div>
      <Routes>
        <Route path='list' element={<ListUser />} />
        <Route path='add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
