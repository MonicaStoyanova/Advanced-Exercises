function evenPositionElements(array) {

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            result += array[i] + ' ';
        }

    }
    console.log(result.split(',').join());

}
evenPositionElements(['20', '30', '40', '50', '60'])