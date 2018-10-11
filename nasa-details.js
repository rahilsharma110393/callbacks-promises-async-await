const axios = require('axios');
const NASA_API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

function getNasaDetails (NASA_API) {
    return axios.get(NASA_API);
}

function getNasaDetailsWithPromise () {
	getNasaDetails (NASA_API)
		.then(response => {
    		console.log('NASA Info using promise: ', response.data.explanation);
    	})
    	.catch(err => {
    		console.log('Error in retrieving the NASA info.', err);
    	});
}

async function getNasaDetailsWithAsync () {
	try {
		let response = await getNasaDetails(NASA_API);
    	console.log('NASA Info using async: ', response.data.explanation);
	} catch (err) {
		console.log('Error in retrieving the NASA info.', err);
	} 
}

module.exports = {
	getNasaDetailsWithPromise,
	getNasaDetailsWithAsync
};
