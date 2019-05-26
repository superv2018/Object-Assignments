'use strict';

let carsCollection = [];

function Car(plate, marker, model, price, color) {
	this.plate = plate;
	this.marker = marker;
	this.model = model;
	this.price = price;
	this.color = color;
}

function createCar() {
	let plate, marker, model, price, color, addedcar_plate, addedcar_discount;

	plate = document.getElementById('plate').value;
	marker = document.getElementById('marker').value;
	model = document.getElementById('model').value;
	price = +document.getElementById('price').value;
	color = document.getElementById('color').value;

	addedcar_plate = document.getElementById('addedcar_plate');
	addedcar_discount = document.getElementById('addedcar_discount');

	let car = new Car(plate, marker, model, price, color);
	carsCollection.push(car);
	console.table(carsCollection);

	
}

function searchForCar() {
	let searchCarInput = document.getElementById('searchCarInput').value;
	let car_found = document.getElementById('car_found');
	let no_car_found = document.getElementById('no_car_found');
	let searched_marker = document.getElementById('searched_marker');
	let searched_model = document.getElementById('searched_model');
	let searched_discount = document.getElementById('searched_discount');

	let searchedCar = carsCollection.find(car => car.plate === searchCarInput);

	if (!searchedCar) {
		no_car_found.style.display = 'block';
		no_car_found.innerHTML = '<p>Sorry Not Found</p>';
		car_found.style.display = 'none';
	} else {
		no_car_found.style.display = 'none';
		car_found.style.display = 'block';
		searched_marker.innerHTML = searchedCar.marker;
		searched_model.innerHTML = searchedCar.model;
		searched_discount.innerHTML = searchedCar.discount();
	}
}

Car.prototype.discount = function() {
	const { price } = this; // object destructuring
	if (price > 20000) {
		return price * 0.25;
	} else if (price < 5000) {
		return price * 0.1;
	} else {
		returnprice * 0.15;
	}
};
