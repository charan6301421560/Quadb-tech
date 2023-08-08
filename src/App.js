import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';

class App extends Component {
  state = {
    shows: [],
    selectedShow: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      const shows = response.data.map(item => item.show);
      this.setState({ shows });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleSelectShow = (selectedShow) => {
    this.setState({ selectedShow });
  };

  render() {
    const { shows, selectedShow } = this.state;

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ShowList shows={shows} onSelectShow={this.handleSelectShow} />}
          />
          <Route
            path="/show-summary"
            element={<ShowSummary selectedShow={selectedShow} />}
          />
          <Route
            path="/book-ticket"
            element={<BookingForm selectedShow={selectedShow} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
