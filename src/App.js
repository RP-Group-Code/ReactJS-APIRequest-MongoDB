import Userlist from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Userlist />}/>
            <Route path="add" element={<AddUser />}/>
            <Route path="edit/:id" element={<EditUser />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
