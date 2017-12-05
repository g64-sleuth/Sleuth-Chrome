import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      data: []
    };
  }

  async componentDidMount() {
    const response = await fetch('http://httpbin.org/ip')
    const json = await response.json()

    this.setState({data: json.origin})
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   });
    // }, 1000);
  }

  render() {
    console.log('line 26');
    return (
      <div className='p-3 mb-2 bg-dark'>
        <h4>Current IP: {this.state.data}</h4>
        <form>
          <input placeholder='expected speed'/>
          <button>submit</button>
        </form>
        <h5></h5>
      </div>
    );
  }
}

export default App;
