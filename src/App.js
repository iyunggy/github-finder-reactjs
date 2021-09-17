import "./App.css";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Users />
      </div>
    </div>
  );
};

export default App;
