import React from 'react';
import { Link } from 'react-router-dom';

const removeHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const ShowSummary = ({ selectedShow }) => {
  return (
    <div className="container">
      <h1 className="showsummery-heading mt-5">Show Summary</h1>
      {selectedShow && (
        <div className="showsummery mt-4">
          <div className="showsummery-body">
            <h2 className="showsummery-title">{selectedShow.name}</h2>
            <p className="showsummery-text">{removeHtmlTags(selectedShow.summary)}</p>
            <Link to="/book-ticket" 
            className="btn btn-success"  
            style={{ textDecoration: 'none',backgroundColor:'white',padding:'10px',borderRadius:'5px', }}>
              Book Ticket
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowSummary;
