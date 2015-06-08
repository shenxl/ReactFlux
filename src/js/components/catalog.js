/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppStore = require('../stores/AppStore');
var AddToCart = require('../components/addToCart');

function getCatelog(){
    return {items : AppStore.getCatelog()}
}

var Catalog = React.createClass({

    getInitialState: function() {
    	return getCatelog();
    },
    
	render: function() {
        var items = this.state.items.map(function(item){
            return <tr><td>{item.title}</td><td>${item.cost}</td><td><AddToCart item={item} /></td></tr>
        });
		return (
            <table className="table table-hover">
                {items}
            </table>
		);
	}

});

module.exports = Catalog;