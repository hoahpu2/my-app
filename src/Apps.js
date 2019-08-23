import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
// import './component/base.css';
import './style.css';
import AppMain from './component/AppMain';
import AppContext from './context/appContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: 0,
      status: true
    }
  }
  onSetState = () => {
    this.setState({
      status : !this.state.status
    });
  }
  updateValue = (state) => {
    this.setState({ ...state });
  }
  // render() {
  //   return (
  //     <div className="Appprovice">
  //     <AppContext.Provider value={{ state: this.state, updateValue: this.updateValue }}>
  //       <Router>
  //         <Route exact path="/" component={AppMain} />
  //         <Route path="/active" component={AppMain} />
  //         <Route path="/completed" component={AppMain} />
  //       </Router>
  //     </AppContext.Provider>
  //     <div className="Appprovices">
  //       <button type="button" onClick={ this.onSetState }>aaaaaaaaaa: { this.state.status === true ? 'true' : 'false' }</button>
  //     </div>
  //     </div>
  //   );
  // }

  render(){
    return(
      <div className='container mt-50'>
      <div className='row'>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">

                <hr/>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Size : 15px</h3>
            </div>
            <div className="panel-body">
              <button type="button" className="btn btn-success" >Giảm</button>&nbsp;
              <button type="button" className="btn btn-success" >Tăng</button>
            </div>
          </div>
          <button type="button" className="btn btn-primary" >reset</button>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p>Color : red - Fontsize : 15px</p>
          <div id="content" >
            Nội dung setting
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
