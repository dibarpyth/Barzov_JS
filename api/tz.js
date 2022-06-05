function getTz(tzId, inputData) {
	console.log('tz input: ', tzId, inputData);
	try {
		return this[`tz${tzId}`](inputData);
	} catch {
		return {
			status: 404,
			msg: `ТЗ за номером "${tzId}" не найдено :(`,
		};
	}
}

function tz1(inputData) {
	const tzResult = {
		status: 204,
		msg: '',
	};
	const minValue = 7;

	if (inputData > minValue) {
		tzResult.status = 200;
		tzResult.msg = 'Привет';
	}

	return tzResult;
}

function tz2(inputData) {
	const tzResult = {
		status: 404,
		msg: 'Нет такого имени',
	};
	const etalonValue = 'Вячеслав';

	if (inputData.toLowerCase() === etalonValue.toLowerCase()) {
		tzResult.status = 200;
		tzResult.msg = `Привет, ${etalonValue}`;
	}

	return tzResult;
}

function tz3(inputData) {
	const tzResult = {
		status: 204,
		msg: '',
	};

	const clearData = inputData
		.replace(/['"\(\)\[\]\{\}]/g, '')
		.replace(/[,;:]/g, ' ');
	const numbersArray = clearData.split(' ');

	const resultArray = numbersArray.filter(el => +el && el % 3 === 0);

	if (resultArray.length) {
		tzResult.status = 200;
		tzResult.msg = resultArray;
	}

	return tzResult;
}

exports.getTz = getTz;
exports.tz1 = tz1;
exports.tz2 = tz2;
exports.tz3 = tz3;
