/**
 * Created by Shenxl on 2015/6/8.
 */
var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');

var AppActions = {

    addItem:function(item){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.ADD_ITEM,
            item : item
        })
    },
    removeItem:function(index){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.REMOVE_ITEM,
            index : index
        })
    },
    increaseItem:function(index){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.INCREASE_ITEM,
            index : index
        })
    },
    decreaseItem:function(index){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.DECREASE_ITEM,
            index : index
        })
    }
}

module.exports  = AppActions;