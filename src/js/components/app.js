/**
 * Created by Shenxl on 2015/6/8.
 */

var React = require('react');
var Catalog = require('./catalog/catalog');
var Cart = require('./cart/cart');
var CatalogDetail = require('./product/catalogDetail');
var Template = require('./template');

var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({

    render: function() {
        return (
            <Template>
                <Locations>
                    <Location path="/" handler={Catalog}></Location>
                    <Location path="/cart" handler={Cart}></Location>
                    <Location path="/item/:item" handler={CatalogDetail}></Location>
                </Locations>
            </Template>
        );
    }

});

module.exports = App ;