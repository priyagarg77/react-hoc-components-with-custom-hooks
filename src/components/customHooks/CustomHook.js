import React from 'react';
import useFetch from './useFetch';

const CustomHook = () => {
  const { items, isLoading } = useFetch(
    'https://www.breakingbadapi.com/api/characters'
  );

  return isLoading ? (
    'Loading...'
  ) : (
    <React.Fragment>
      <h2>Custom Hook (useFetch) - Api fetch using axios</h2>
      <section className="character-grid">
        {items.map((item) => (
          <div className="character-name" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default CustomHook;
