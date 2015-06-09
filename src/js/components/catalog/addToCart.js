/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppActions = require('../../actions/AppAction');

var AddToCart = React.createClass({

    handleClick:function(){
        AppActions.addItem(this.props.item);
    },

    render: function() {
        return (
                <button className="btn btn-default" onClick={this.handleClick}>加入购物车</button>
        );
    }

});

module.exports = AddToCart ;