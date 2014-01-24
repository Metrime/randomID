#randomID

Generates a customisable random ID, for node and browsers.

##Installation

Node

	npm install random-id

Browsers

	<script type="text/javascript" src="randomID.js"></script>

##Usage

	//var randomID = require("random-id");

	var id = randomID(length, strength);

##Options

- **length**: *(Number)* The length of the random String, default: 30

- **strength**: *(Number)* Amount of different characters collections to be used, default: 1
	- 1: [A-Z, a-z]
	- 2: [0-9]
	- 3: !§$%&/()=?-.,;:_#<>*+^°`´

##Examples

	randomID(); 		//oOskDVlsS002iszDIcrWqdckY8aM8k
	randomID(10); 		//JcWtjGmfNN

	randomID(20,1);		//BInCYJaWjPnEEPcWiAVP
	randomID(20,2);		//f4BeOaKyfNbVdoxIwO6e
	randomID(20,3);		//XucMf6*!JO;R$;n<Z;6Y

