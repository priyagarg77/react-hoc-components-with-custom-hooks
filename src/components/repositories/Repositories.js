import React from 'react';
import withFetchData from './withFetchData';

const Repositories = ({ results, loading, error }) => {
  if (loading || error) {
    return loading ? 'Loading...' : error.message;
  }

  return (
    <React.Fragment>
      <h2>Github Repositories - using HOC</h2>
      <ul className="repositories">
        {results.map(({ id, html_url, full_name }) => (
          <li key={id}>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {full_name}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default withFetchData({
  url: 'https://api.github.com/users/mojombo/repos',
})(Repositories);
