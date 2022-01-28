import React from 'react';

import './collections-overview.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
    console.log(collections)
    return (
        <div className='collections-overview'>
            {
            collections.map(({ id, ...otherCollectionProps }) => {
                return (<PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>)
            })
            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps, null)(CollectionsOverview)