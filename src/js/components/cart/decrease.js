/**
 * Created by Shenxl on 2015/6/8.
 */
/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppActions = require('../../actions/AppAction');

var Decrease = React.createClass({

    handleClick:function(){
        AppActions.decreaseItem(this.props.index);
    },

    render: function() {
        return (
                <button onClick={this.handleClick}>-</button>
        );
    }

});

module.exports = Decrease ;