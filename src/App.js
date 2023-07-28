import "./App.css";
import employees from "./models/employees";
import Home from "./components/Home";
import EmployeePage from "./components/EmployeePage";

function App() {
  return (
    <div className="App">
      <Home employees={employees} />
      <EmployeePage employees={employees} />
    </div>
  );
}

export default App;