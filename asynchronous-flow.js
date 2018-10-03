function doFarming() {
	doSowing();
	doWatering();
	doHarvesting();
}

function doSowing() {
    setTimeout(() => {
		console.log('Step 1: Sow seeds!!');
	}, Math.floor(Math.random() * 1000) + 1);
}

function doWatering() {
	setTimeout(() => {
		console.log('Step 2: Water the plant!!');
	}, Math.floor(Math.random() * 1000) + 1);
}

function doHarvesting() {
	setTimeout(() => {
		console.log('Step 3: Harvest the crop!!');
	}, Math.floor(Math.random() * 1000) + 1);
}

module.exports = {
	doFarming
};
