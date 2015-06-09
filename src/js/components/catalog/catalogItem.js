/**
 * Created by ios_Mac on 15-6-8.
 */
var React = require('react');
var AddToCart = require('./addToCart');
var Link = require('react-router-component').Link;

var CatalogItem = React.createClass({

	render: function() {
		var itemStyle = {
			borderBottom : '1px solid #ccc',
			paddingBottom : 15
		};

		return (
        <div className="col-sm-3" style={itemStyle}>
            <h4>{this.props.item.title}</h4>
			<img src={this.props.item.img} alt=""/>
			<p>{this.props.item.summary}</p>
			<p>${this.props.item.cost}
				<span className="text-success">
					{this.props.item.inCart && '(已添加了' + this.props.item.qty + '个)'}
				</span></p>
        	<div className="btn-group btn-group-xs">
			<Link href={'/item/' + this.props.item.id} className="btn btn-default">商品详情</Link>
			<AddToCart item={this.props.item} />
			</div>
		</div>
		);
	}

});
module.exports = CatalogItem;