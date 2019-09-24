import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop-selectors";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);