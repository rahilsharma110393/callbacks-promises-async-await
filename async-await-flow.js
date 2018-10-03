async function doFarming() {
    let data;
    console.log('******* Using Async/Await *******');

    try {
        data = await doSowing();
        console.log(data.message);

    	data = await doWatering();
        console.log(data.message);

    	data = await doHarvesting();
        console.log(data.message);

    } catch (err) {
        console.log("Oops!! There's some delay in harvesting");
    }
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
