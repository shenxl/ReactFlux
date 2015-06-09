/**
 * Created by Shenxl on 2015/6/8.
 */

var React = require('react');
var Catalog = require('./catalog/catalog');
var Cart = require('./cart/cart');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <h1>Let`s Shop</h1>
                <Catalog />

                <h1>购物车信息</h1>
                <Cart />
            </div>
        );
    }

});

module.exports = App ;