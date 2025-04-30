for (let car in statistics) {

    let firstChar = car[0];

    if ( (firstChar === 'r') || (statistics[car] % 2 == 1) ) {
        console.log(statistics[car]);
    }
}