/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppActions = require('../actions/AppAction');

var AddToCart = React.createClass({

    handleClick:function(){
        AppActions.addItem(this.props.item);
    },

    render: function() {
        return (
            <div>
                <button onClick={this.handleClick}>Add to Cart</button>
            </div>
        );
    }

});

module.exports = AddToCart ;