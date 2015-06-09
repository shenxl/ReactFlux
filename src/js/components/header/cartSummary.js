/**
 * Created by ios_Mac on 15-6-8.
 */
var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/AppStore');
var StoreWatchMixin = require('../../mixins/storeWatchMixin');


function CartTotals(){
	return AppStore.getCartTotals();
}

var CartSummary = React.createClass({

	mixins:[StoreWatchMixin(CartTotals)],
	render: function() {
		return (
			<div>
				<Link href="/cart" className="btn btn-success">
					前往购物车: {this.state.qty} / ${this.state.total}
				</Link>
			</div>
		);
	}

});
module.exports = CartSummary;