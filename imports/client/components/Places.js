import React from 'react';

const Places = ({loc, places}) => (
  <div className="places">
    <ul className="table-view">
      {places.map(function(place) {
        return (
          <li key={place._id} className="table-view-cell">
            <a className="navigate-right">
              <span className="badge">{place.rating}</span>
              {place.name}
            </a>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Places;
