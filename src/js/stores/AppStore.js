/**
 * Created by Shenxl on 2015/6/8.
 */
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _catalog = [];

for(var i = 1; i < 9;i++){
    _catalog.push({
        'id':'Widget' + i,
        'title' : '��Ʒ #' + i,
        'summary' : 'This is an awesome widget!',
        'description':'This is some decription for number ' + i + ' widget',
        'img' : '/assets/product.png',
        'cost' : i
    });
}

var _cartItems = [];
function _removeItem(index){
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

function _increaseItem(index){
    _cartItems[index].qty++;
}

function _decreaseItem(index){
    if(_cartItems[index].qty>1){
        _cartItems[index].qty--;
    }
    else {
        _removeItem(index);
    }
}


function _addItem(item){
    if(!item.inCart){
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
    }
    else {
        _cartItems.forEach(function(cartItem, i){
            if(cartItem.id===item.id){
                _increaseItem(i);
            }
        });
    }
}

var AppStore = assign({},EventEmitter.prototype,{
    emitChange : function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback)
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT,callback)
    },
    getCart:function(){
        return _cartItems
    },
    getCatelog:function(){
        return _catalog
    },
    dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action; // this is our action from handleViewAction
        switch(action.actionType){
            case AppConstants.ADD_ITEM:
                _addItem(payload.action.item);
                break;

            case AppConstants.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;

            case AppConstants.INCREASE_ITEM:
                _increaseItem(payload.action.index);
                break;

            case AppConstants.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
                break;
        }
        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;
