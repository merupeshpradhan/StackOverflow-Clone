// import './App.css'
import Navbar from "./componenet/Navbar.jsx";
import LeftMenu from "./componenet/LeftMenu.jsx";
import QuestionsCard from "./componenet/QuestionsCard.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="bg-warning">
        <LeftMenu />
        </div>
        <QuestionsCard />
      </div>
      <h1>Well come</h1>
    </>
  );
}

export default App;
