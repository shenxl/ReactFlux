/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppStore = require('../stores/AppStore');
var RemoveFromCart = require('../components/removeFromCart');
var Increase = require('../components/increase');
var Decrease = require('../components/decrease');

function cartItems(){
    return {items : AppStore.getCart()}
}

var Cart = React.createClass({

    getInitialState: function() {
        return cartItems();
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange:function(){
        this.setState(cartItems());
    },

    render: function() {

        var total = 0;
        var items = this.state.items.map(function(item ,i){
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                    <tr key={i}>
                        <td><RemoveFromCart index={i}></RemoveFromCart></td>
                        <td>{item.title}</td>
                        <td>{item.qty}</td>
                        <td>
                            <div>
                                <Increase index={i} />
                                <Decrease index={i} />
                            </div>
                        </td>
                        <td>${subtotal}</td>
                    </tr>
            )
        });
        return (
            <table className="table tableble-hover">
                <thead>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th></th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>                
            </table>
        );
    }

});

module.exports = Cart;