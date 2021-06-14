import './App.css';
import SideBar from '../src/components/SideBar/SideBar';
import HomePage from '../src/components/HomePage/HomePage';
import ManagementPage from './components/ManagementPage/ManagementPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ListContainer from './components/ManagementPage/ListContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/">
          <HomePage/>
          </Route>
          <Route exact path="/management">
          <ManagementPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
