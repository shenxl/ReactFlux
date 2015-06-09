/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppStore = require('../../stores/AppStore');
var RemoveFromCart = require('./removeFromCart');
var Increase = require('./increase');
var Decrease = require('./decrease');
var StoreWatchMixin = require('../../mixins/storeWatchMixin');
var Link = require('react-router-component').Link;

function cartItems(){
    return {items : AppStore.getCart()}
}

var Cart = React.createClass({

    mixins:[StoreWatchMixin(cartItems)],

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
            <div>
                <table className="table tableble-hover">
                    <thead>
                    <tr>
                        <th></th>
                        <th>商品名称</th>
                        <th>数量</th>
                        <th></th>
                        <th>小计</th>
                    </tr>
                    </thead>
                    <tbody>{items}</tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="text-right">总计</td>
                            <td>${total}</td>
                        </tr>
                    </tfoot>
                </table>
                <Link href='/'>继续购物</Link>
            </div>
        );
    }

});

module.exports = Cart;