import React from 'react';

const simpleHOC = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: '',
      };
    }

    componentDidMount() {
      this.setState({ data: 'Changed the state value in HOC' });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default simpleHOC;
