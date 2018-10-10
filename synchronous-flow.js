function doFarming() {
    console.log('******* Synchronous flow *******');

	doSowing();
	doWatering();
	doHarvesting();
}

function doSowing() {
    console.log('Step 1: Sow seeds!!');
}

function doWatering() {
	console.log('Step 2: Water the plant!!');
}

function doHarvesting() {
	console.log('Step 3: Harvest the crop!!');
}

module.exports = {
	doFarming
};
