import './App.css';
import { Loader } from './Loader';
import Landing from './components/Landing';

import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

export const ThemeContext = React.createContext(false);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      darkTheme: false,
    }
  }
  componentDidMount() {
    setTimeout(()=> {
      this.setState({loading: false})
    }, 5000)
  }

  onChangeTheme() {
    this.setState({darkTheme: !this.state.darkTheme});
  }

  render() {
    let visiblePage = this.state.loading ? <Loader/> : <Landing onChangeTheme={() => this.onChangeTheme()}/>
    let className = "App";
    className = this.state.darkTheme ? className + " dark-theme" : className + " light-theme";
    return (
      <ThemeContext.Provider value={this.state.darkTheme}>
      <Router>
          <div className={className}>
            {visiblePage}
          </div>
      </Router>
        </ThemeContext.Provider>
    );
  }
}

export default App;
