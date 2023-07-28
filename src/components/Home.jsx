import Header from "./Header";
import Navbar from "./Navbar";
import EmployeeList from "./EmployeeList";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        backgroundColor: "#ababab",
        padding: "5px",
        alignItems: "center"
      }}
    >
      <Header heading="Employee Directory" />
      <Navbar />
      <EmployeeList />
    </div>
  );
}

export default Home;