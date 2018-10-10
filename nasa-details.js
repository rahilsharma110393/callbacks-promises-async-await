const axios = require('axios');
const API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function getNasaDetails () {
    axios.get(API)
    	.then(response => {
    		console.log('**** NASA information ****');
    		console.log(response.data.explanation);
    	})
    	.catch(error => {
    		console.log(error);
    	});
}

module.exports = {
    getNasaDetails
};
