import React, { Component } from 'react';

class BookingForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    const { selectedShow } = this.props;

    // Store booking details in localStorage
    localStorage.setItem('booking', JSON.stringify({ showName: selectedShow.name, name, email }));

    // Redirect to thank you page
    window.location.href = '/thank-you';
  };

  render() {
    const { selectedShow } = this.props;
    const { name, email } = this.state;

    return (
      <div className="booking-container">
        <h1 className="mt-5" style={{margin:'10px'}}>Book Ticket</h1>
        {selectedShow && (
          <div className="booking mt-4" >
            <div className="booking-body">
              <h2 className="booking-title" style={{margin:'10px',color:'#75310a'}}>Booking for {selectedShow.name}</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" style={{margin:'10px'}}>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{margin:'10px' ,}}>
                  <label htmlFor="email" style={{margin:'10px'}}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary"  style={{ textDecoration: 'none',backgroundColor:'white',padding:'10px',borderRadius:'5px', margin:'10px'}}> 
                  Book Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookingForm;
