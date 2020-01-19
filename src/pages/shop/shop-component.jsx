import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPageContainer from '../collection/collection-container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';

import { fetchCollectionsStartAsync} from '../../redux/shop/shop-actions'

//match is a property of route (match location and history are available)
class ShopPage extends React.Component {

  //component did mount fires after the render!!
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

  }

  render() {
    const { match } = this.props;
    console.log(this.props)
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () =>dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
