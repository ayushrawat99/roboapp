import React from 'react';
import Card from './Card';

const CardList = ({ rob }) => {
  return (
    <div>
      {
        rob.map((user, i) => {
          return (
            <Card
              key={i}
              id={rob[i].id}
              name={rob[i].name}
              email={rob[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;