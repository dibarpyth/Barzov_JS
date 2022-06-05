function getTz(tzId, inputData) {
	console.log('tz input: ', tzId, inputData);
	try {
		return {
			status: 200,
			msg: this[`tz${tzId}`](inputData),
		};
	} catch {
		return {
			status: 404,
			msg: `ТЗ за номером "${tzId}" не найдено :(`,
		};
	}
}

function tz1(inputData) {
	const minValue = 7;
	return inputData > minValue ? 'Привет' : 'Пока :(';
}

function tz2(inputData) {
	const etalonValue = 'Вячеслав';
	const replyOk = `Привет, ${etalonValue}`;
	const replyFail = 'Нет такого имени';
	const result =
		inputData.toLowerCase() === etalonValue.toLowerCase() ? replyOk : replyFail;

	generateOutput('tz2', result);
}

function tz3(inputData) {
	// inputData = '1,2, 3 , 4, 5 6 7 , , ,, 8   9,  10,,11  12,13,14,15';
	// inputData = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';
	// inputData = "['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']";

	const clearData = inputData
		.replace(/['"\(\)\[\]\{\}]/g, '')
		.replace(/[,;:]/g, ' ');
	const numbersArray = clearData.split(' ');

	const resultArray = numbersArray.filter(el => +el && el % 3 === 0);

	generateOutput('tz3', resultArray);
}

exports.getTz = getTz;
exports.tz1 = tz1;
