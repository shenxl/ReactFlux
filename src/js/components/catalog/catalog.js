/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppStore = require('../../stores/AppStore');
var AddToCart = require('./addToCart');
var CatalogItem = require('./catalogItem');
var StoreWatchMixin = require('../../mixins/storeWatchMixin');

function getCatelog(){
    return {items : AppStore.getCatelog()}
}

var Catalog = React.createClass({

    mixins:[StoreWatchMixin(getCatelog)],

	render: function() {
        var items = this.state.items.map(function(item){
            return <CatalogItem key={item.id} item={item} />
        });
        return (
            <div className="row">
                {items}
            </div>
        );
    }

});

module.exports = Catalog;