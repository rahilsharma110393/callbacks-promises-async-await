function doFarming() {
    console.log('******* Using Promises *******');
    
    doSowing()
        .then((data) => {
            console.log(data.message);
            return doWatering();
        })
        .then((data) => {
            console.log(data.message);
            return doHarvesting();
        })
        .then((data) => {
            console.log(data.message);
        })
        .catch((err) => {
            console.log("Oops!! There's some delay in harvesting");
        });
}

function doSowing() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            console.log('Step 1 >>');
			resolve({ message: 'Sow seeds!!' });
		}, Math.floor(Math.random() * 1000) + 1);
	});
}

function doWatering() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Step 2 >>');
			resolve({ message: 'Water the plant!!' });
		}, Math.floor(Math.random() * 1000) + 1);
	});
}

function doHarvesting() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Step 3 >>');
			resolve({ message: 'Harvest the crop!!' });
		}, Math.floor(Math.random() * 1000) + 1);
	});
}

module.exports = {
	doFarming
};
