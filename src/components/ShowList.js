import React from 'react';
import { Link } from 'react-router-dom';

const removeHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const ShowList = ({ shows, onSelectShow }) => {
  return (
    <div className="container">
      <h1 className="mt-5 showlist-heading">TV Show List</h1>
      {shows.map(show => (
        <div className="showlist mt-4" key={show.id}>
          <div className="showlist-body">
            <img src={show.image && show.image.medium} alt={show.name} className="img-fluid mb-3" />
            <div className='showlist-direction'>
              <h2 className="showlist-title">{show.name}</h2>
              <p className="showlist-text">{removeHtmlTags(show.summary)}</p>
              <Link
                to="/show-summary"
                className="btn btn-primary"
                onClick={() => onSelectShow(show)}
                style={{ textDecoration: 'none',backgroundColor:'white',padding:'10px',borderRadius:'5px', }}
              >
                View Summary
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
