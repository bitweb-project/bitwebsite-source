import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.scss";
import Index from "./pages/Index/Index.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Ecology from "./pages/Ecology/Ecology";
import About from "./pages/About/About";
import Wallet from "./pages/Wallet/Wallet";
import Roadmap from "./pages/Roadmap/Roadmap";
import Communityfoundation from "./pages/Communityfoundation/Communityfoundation";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import NotFound from "./pages/NotFound/NotFound";
import { handleHash } from "./helpers/Hash";

function App() {
  useEffect(() => {
    handleHash();
  }, []);

  return (
    <Router>
      <>
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/resources" component={Resources} />
          <Route path="/ecology" component={Ecology} />
          <Route path="/about" component={About} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/communityfoundation" component={Communityfoundation} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
