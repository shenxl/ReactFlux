/**
 * Created by Shenxl on 2015/6/8.
 */
var React = require('react');
var AppActions = require('../../actions/AppAction');

var Increase = React.createClass({

    handleClick:function(){
        AppActions.increaseItem(this.props.index);
    },

    render: function() {
        return (
                <button onClick={this.handleClick}>+</button>
        );
    }

});

module.exports = Increase ;