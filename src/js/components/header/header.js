/**
 * Created by ios_Mac on 15-6-8.
 */
var React = require('react');
var CartSummary = require('./cartSummary');

var Header = React.createClass({

	render: function() {
		return (
			<div className="row">
				<div className="col-sm-6">
					<h1>购物站点</h1>
				</div>
				<div className="col-sm-2 col-sm-push-3">
					<br />
					<CartSummary />
				</div>
			</div>
		);
	}

});
module.exports = Header;