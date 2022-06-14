import React from 'react';
import axios from 'axios';

const withFetchData = (props) => (WrappedComponent) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        results: [],
        loading: true,
        error: '',
      };
    }

    async fetchData() {
      try {
        const response = await axios(props.url);

        if (response.data.length > 0) {
          this.setState({
            results: response.data,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }

    async componentDidMount() {
      this.fetchData();
    }

    render() {
      const { results, loading, error } = this.state;

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
};

export default withFetchData;
