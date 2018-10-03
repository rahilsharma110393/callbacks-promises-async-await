function doFarming() {
	doSowing(data => {
        console.log(data.message);
		doWatering(data => {
            console.log(data.message);
			doHarvesting(data => {
                console.log(data.message);
            });
		});
	});

    console.log('******* Using Callbacks *******');
}

function doSowing(callback) {
    setTimeout(() => {
        console.log('Step 1 >>')
    	callback({ message: 'Sow seeds!!' });
	}, Math.floor(Math.random() * 1000) + 1);
}

function doWatering(callback) {
	setTimeout(() => {
		console.log('Step 2 >>');
		callback({ message: 'Water the plant!!'});
	}, Math.floor(Math.random() * 1000) + 1);
}

function doHarvesting(callback) {
	setTimeout(() => {
		console.log('Step 3 >>');
		callback({ message: 'Harvest the crop!!'});
	}, Math.floor(Math.random() * 1000) + 1);
}

module.exports = {
	doFarming
};
