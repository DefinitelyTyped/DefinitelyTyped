/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Content is part of the Custom Data Parameters of a Conversions API Event Request. Content can be used to set the item/product details added in the Custom Data.
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data#contents}
 */

import ServerSideUtils from './utils';

export default class Content {

	_id: string;
	_quantity: number;
	_item_price: number;
	_title: string;
	_description: string;
	_category: string;
	_brand: string;
	_delivery_category: string;

	/**
	 * @param {String} id Product Id of the Item.
	 * @param {Number} quantity Quantity of the Item.
	 * @param {Number} item_price Price per unit of the content/product.
	 * @param {String} title Title of the listed Item.
	 * @param {String} description Product description used for the item.
	 * @param {String} brand Brand of the item.
	 * @param {String} category Category of the Item.
	 * @param {String} delivery_category The type of delivery for a purchase event
	 */
	constructor(id: string, quantity: number, item_price: number, title: string, description: string, brand: string, category: string, delivery_category: string)  {

		this._id = id;
		this._quantity = quantity;
		this._item_price = item_price;
		this._title = title;
		this._description = description;
		this._brand = brand;
		this._category = category;
		this._delivery_category = delivery_category;
	}

	/**
	 * Gets the Product Id of the Item.
	 * A string representing the unique Id for the product.
	 * Example: XYZ.
	 */
	get  id()  {
		return  this._id;
	}

	/**
	 * Sets the Product Id of the Item.
	 * @param id A string representing the unique Id for the product.
	 * Example: XYZ.
	 */
	set id(id: string)  {
		this._id = id;
	}

    /**
	 * Sets the Product Id of the Item.
	 * @param id is a string representing the unique id for the product.
	 * Example: XYZ.
	 */
	setId(id: string) : Content {
		this._id = id;
        return this;
	}

	/**
	 * Gets the quantity of the Item.
	 * The number/quantity of the content that is being involved in the customer interaction.
	 * Example: 5
	 */
	get quantity()  {
		return  this._quantity;
	}

	/**
	 * Sets the quantity of the Item.
	 * @param quantity The number/quantity of the product that is being involved in the customer interaction.
	 * Example: 5
	 */
	set quantity(quantity: number)  {
		this._quantity = quantity;
	}

    /**
	 * Sets the quantity of the Content/Item.
	 * @param {Number} quantity The number/quantity of the product that is being involved in the customer interaction.
	 * Example: 5
	 */
	setQuantity(quantity: number) : Content  {
		this._quantity = quantity;
        return this;
	}

	/**
	 * Gets the item price for the Product.
	 * The item_price or price per unit of the product.
	 * Example: '123.45'
	 */
	get item_price()  {
		return  this._item_price;
	}

	/**
	 * Sets the item price for the Content.
	 * @param item_price The item_price or price per unit of the product.
	 * Example: '123.45'
	 */
	set item_price(item_price: number)  {
		this._item_price = item_price;
	}

    /**
	 * Sets the item price for the Content.
	 * @param {Number} item_price The item_price or price per unit of the product.
	 * Example: '123.45'
	 */
	setItemPrice(item_price: number) : Content {
		this._item_price = item_price;
        return this;
	}

	/**
	 * Gets the Title of the listed Item.
	 * A string representing the Title for the product.
	 */
	get  title()  {
		return  this._title;
	}

	/**
	 * Sets the Title of the listed Item.
	 * @param title A string representing the Title for the product.
	 */
	set title(title: string)  {
		this._title = title;
	}

    /**
	 * Sets the Title of the Item.
	 * @param title is a string representing listed title for the product.
	 */
	setTitle(title: string) : Content {
		this._title = title;
        return this;
	}

	/**
	 * Gets the Description of the listed Item.
	 * A string representing the Description for the product.
	 */
	get description()  {
		return  this._description;
	}

	/**
	 * Sets the Description of the listed Item.
	 * @param description A string representing the Description for the product.
	 */
	set description(description: string)  {
		this._description = description;
	}

	   /**
	 * Sets the Product Description of the Item.
	 * @param description is a string representing the description for the product.
	 */
	setDescription(description: string) : Content {
		this._description = description;
        return this;
	}

	/**
	 * Gets the Brand of the listed Item.
	 * A string representing the Brand for the product.
	 */
	get brand()  {
		return  this._brand;
	}

	/**
	 * Sets the Brand of the listed Item.
	 * @param brand A string representing the Brand for the product.
	 */
	set brand(brand: string)  {
		this._brand = brand;
	}

	/**
	 * Sets the Brand of the Product.
	 * @param brand is a string representing the Brand for the product.
	 */
	setBrand(brand: string) : Content {
		this._brand = brand;
        return this;
	}

	/**
	 * Gets the Category of the listed Item.
	 * A string representing the Category for the product.
	 */
	get category()  {
		return  this._category;
	}

	/**
	 * Sets the Category of the listed Item.
	 * @param category A string representing the Category for the product.
	 */
	set category(category: string)  {
		this._category = category;
	}

	/**
	 * Sets the Category of the Product.
	 * @param category is a string representing the Category for the product.
	 */
	setCategory(category: string) : Content {
		this._category = category;
        return this;
	}

	/**
	 * Gets the delivery category.
	 */
	get delivery_category() {
		return this._delivery_category;
	}

	/**
	 * Sets the type of delivery for a purchase event.
	 * @param delivery_category The delivery category.
	 */
	set delivery_category(delivery_category: string) {
		this._delivery_category = delivery_category;
	}

	/**
	 * Sets the type of delivery for a purchase event.
	 * @param {String} delivery_category The delivery category.
	 */
	setDeliveryCategory(delivery_category: string) : Content {
		this._delivery_category = delivery_category;
		return this;
	}

	/**
	 * Returns the normalized payload for the Content.
	 * @returns {Object} normalized Content payload.
	 */
	normalize(): Object {
		const content = {};

		if (this.id) {
			content['id'] = this.id;
		}

		if (this.quantity) {
			content['quantity'] = this.quantity;
		}

		if (this.item_price) {
			content['item_price'] = this.item_price;
		}

		if (this.title) {
			content['title'] = this.title;
		}

		if (this.description) {
			content['description'] = this.description;
		}

		if (this.brand) {
			content['brand'] = this.brand;
		}

		if (this.category) {
			content['category'] = this.category;
		}

		if (this.delivery_category) {
			content['delivery_category'] = ServerSideUtils.normalizeDeliveryCategory(this.delivery_category);
		}

		return content;
	}
}
