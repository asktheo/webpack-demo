import _ from 'lodash';

function component() {
	  var element = document.createElement('div');

	  // Lodash, imported for this line to work
	  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	
	  return element;
     }

document.body.appendChild(component());


