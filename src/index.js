import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

  class ImageTable extends React.Component {
    render() {
      return (
        <img src={"https://cdn.media.amplience.net/i/SweatyBetty/" + this.props.value} alt="productImage"></img>
      );
    }
  }
  
  class ImageTable2 extends React.Component {
  render() {
    return (
      <img src={"https://cdn.media.amplience.net/i/SweatyBetty/" + this.props.value2} alt="productImage2"></img>
    );
  }
  }
  
  class ImageTable3 extends React.Component {
  render() {
    return (
      <img src={"https://cdn.media.amplience.net/i/SweatyBetty/" + this.props.value3} alt="productImage3"></img>
    );
  }
  }
  
  class ImageTable4 extends React.Component {
  render() {
    return (
      <img src={"https://cdn.media.amplience.net/i/SweatyBetty/" + this.props.value4} alt="productImage4"></img>
    );
  }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleValueChage = this.handleValueChage.bind(this);
    }
  
    handleValueChage(e) {
      this.props.onValueChange(e.target.value);
    }
  
    render() {
      return (
        <form>
          <input type="text" value={this.props.value} onChange={this.handleValueChage}/>
        </form>
      );
    }
  }
  
  class SearchBar2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChage2 = this.handleValueChage2.bind(this);
  }
  
  handleValueChage2(e) {
    this.props.onValueChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input type="text" value={this.props.value2} onChange={this.handleValueChage2}/>
      </form>
    );
  }
  }
  
  class SearchBar3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChage3 = this.handleValueChage3.bind(this);
  }
  
  handleValueChage3(e) {
    this.props.onValueChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input type="text" value={this.props.value3} onChange={this.handleValueChage3}/>
      </form>
    );
  }
  }
  
  class SearchBar4 extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChage4 = this.handleValueChage4.bind(this);
  }
  
  handleValueChage4(e) {
    this.props.onValueChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input type="text" value={this.props.value4} onChange={this.handleValueChage4}/>
      </form>
    );
  }
  }
  
  class FilterableImageTable extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        value: '',
        value2: '',
        value3: '',
        value4: ''
    };
      this.handleValueChage = this.handleValueChage.bind(this);
      this.handleValueChage2 = this.handleValueChage2.bind(this);
      this.handleValueChage3 = this.handleValueChage3.bind(this);
      this.handleValueChage4 = this.handleValueChage4.bind(this);
    }
  
    handleValueChage(newValue) {
      this.setState({
        value: newValue
      });
    }
    handleValueChage2(newValue) {
      this.setState({
        value2: newValue
      });
    }
    handleValueChage3(newValue) {
      this.setState({
        value3: newValue
      });
    }
    handleValueChage4(newValue) {
      this.setState({
        value4: newValue
      });
    }
  
    render() {
      return (
        <div class='container-1'>
          <div class='product'>
            <h1>PRODUCT 1</h1>
            <SearchBar value={this.state.value} onValueChange={this.handleValueChage}/>
            <ImageTable value={this.state.value}/>
          </div>
          <div class='product'>
            <h1>PRODUCT 2</h1>
            <SearchBar2 value2={this.state.value2} onValueChange={this.handleValueChage2}/>
            <ImageTable2 value2={this.state.value2}/>
          </div>
          <div class='product'>
            <h1>PRODUCT 3</h1>
            <SearchBar3 value3={this.state.value3} onValueChange={this.handleValueChage3}/>
            <ImageTable3 value3={this.state.value3}/>
          </div>
          <div class='product'>
            <h1>PRODUCT 4</h1>
            <SearchBar4 value4={this.state.value4} onValueChange={this.handleValueChage4}/>
            <ImageTable4 value4={this.state.value4}/>
          </div>
        </div>
      );
    }
  }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<FilterableImageTable />);
  
  // const domContainer = document.querySelector('#blog-root');
  // const root = ReactDOM.createRoot(domContainer);
  // root.render(e(FilterableImageTable));
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilterableImageTable/>);



