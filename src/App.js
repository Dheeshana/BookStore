import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/header";
import Home from "./components/home";
import NavBar from "./components/nav-bar";
import CurrentBookList from "./components/currentBookList";
import BookDetail from "./components/bookDetail";

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <NavBar/>
          <Route path={"/"} exact component={CurrentBookList}/>
          <Route path={"/details/:id"} component={BookDetail}/>

      </div>
    </Router>
  );
}

export default App;
