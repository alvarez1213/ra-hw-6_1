import { Component } from 'react'

import "./App.css";

import { Watches } from "./components/Watches";
import { Form } from "./components/Form";

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
    this.listOfData = []
    this.handleFormData = this.handleFormData.bind(this)
  }

  handleDelete = (el) => {
    const titleToDelete = el.target.closest('.watch').querySelector('.watch__title').textContent

    this.listOfData = this.listOfData.filter(item => item.title !== titleToDelete)
    this.setState({
      data: this.listOfData
    })
  }

  handleFormData = (data) => {
    for (const el of this.listOfData) {
      if (data.title === el.title) return
    }

    this.listOfData.push(data)
    this.setState({
      data: this.listOfData
    })
  };

  render() {
    return (
      <div className="App">
        <Form handleFormData={this.handleFormData} />
        <Watches watches={this.state.data} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App;
