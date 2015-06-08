/**
 * Created by Shenxl on 2015/6/8.
 */
/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppActions = require('../actions/AppAction');

var RemoveFromCart = React.createClass({

    handleClick:function(){
        AppActions.removeItem(this.props.index);
    },

    render: function() {
        return (
                <button onClick={this.handleClick}>x</button>
        );
    }

});

module.exports = RemoveFromCart ;