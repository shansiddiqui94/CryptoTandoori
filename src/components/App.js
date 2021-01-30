import "./App.css";
import Navbar from "./Navbar";
import APIBitcoinNews from "./APIBitcoinNews";
import APIBusinessNews from "./APIBusinessNews";
import SeedBitcoinNews from "./components/SeedBitcoinNews";
import SeedHeadline from "./SeedHeadline";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/headline" component={SeedHeadline} />
        <Route path="/bitcoin" component={SeedBitcoinNews} />
        <Route path="/data-headline" component={APIBusinessNews} />
        <Route path="/data-bitcoin" component={APIBitcoinNews} />
      </Switch>
    </div>
  );
}

export default App;
