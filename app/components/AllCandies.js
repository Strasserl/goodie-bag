import React from 'react';
import { fetchCandies } from '../reducers/index';
import { connect } from 'react-redux';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.fetchCandies();
  }
  render() {
    const { loading, candies } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>CANDIES...</h2>
          {candies.map(candy => {
            return (
              <div key={candy.id}>
                <img src={candy.imageUrl} />
                <h2>{candy.name}</h2>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  candies: state.candies,
});

const mapDispatchToProps = dispatch => ({
  fetchCandies: () => dispatch(fetchCandies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);
