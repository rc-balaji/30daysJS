import "./App.css";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // border: "1px solid black",
        height: "100%",
      }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
