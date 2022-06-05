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

function updateTzSettings(tzId, inputData) {
	try {
		etalonValues[tzId] = inputData;
		return {
			status: 202,
			msg: `Эталонное значение для ТЗ №"${tzId}" теперь равно "${inputData}"`,
		};
	} catch (error) {
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
	const minValue = parseInt(etalonValues['1']);

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
	const etalonValue = etalonValues['2'];

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

	const baseValue = parseInt(etalonValues['3']);

	const clearData = inputData
		.replace(/['"\(\)\[\]\{\}]/g, '')
		.replace(/[,;:]/g, ' ');
	const numbersArray = clearData.split(' ');

	const resultArray = numbersArray.filter(el => +el && el % baseValue === 0);

	if (resultArray.length) {
		tzResult.status = 200;
		tzResult.msg = resultArray;
	}

	return tzResult;
}

const etalonValues = {
	1: '7',
	2: 'Вячеслав',
	3: '3',
};

exports.getTz = getTz;
exports.tz1 = tz1;
exports.tz2 = tz2;
exports.tz3 = tz3;
exports.updateTz = updateTzSettings;
