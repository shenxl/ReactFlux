/**
 * Created by Shenxl on 2015/6/9.
 */
var React = require('react');
var AddToCart = require('../catalog/addToCart');
var AppStore = require('../../stores/AppStore');
var Link = require('react-router-component').Link;
var StoreWatchMixin = require('../../mixins/storeWatchMixin');

function getCatalogItem(component){
	var thisItem;
	AppStore.getCatelog().forEach(function(item){
		if(item.id.toString() === component.props.item){
			thisItem = item;
		}
	});
	return {item :thisItem}
}

var CatalogDetail = React.createClass({

	mixins:[StoreWatchMixin(getCatalogItem)],
	render: function() {
		return (
			<div>
				<h2>{this.state.item.title}</h2>
				<img src={this.state.item.img} alt="" />
				<p>{this.state.item.description}</p>
				<p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(已添加了' + this.state.item.qty + '个)'}</span></p>
				<div className="btn-group btn-group-sm">
					<AddToCart item={this.state.item} />
					<Link href='/' className="btn btn-default">继续购物</Link>
				</div>
			</div>
		);
	}

});

module.exports = CatalogDetail;