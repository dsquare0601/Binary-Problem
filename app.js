
function solution(N) {
    let binaryData = N.toString(2);
    let position = binaryData.indexOf("0");
    let count = 0, finalValue = 0, countArray = [];

    console.log("Decimal : " + N);
    console.log("Binary : " + binaryData);
    if (position < 0) {
        console.log(0);
    } else {
        for (let i = position; i < binaryData.length; i++) {
            if (binaryData.charAt(i) == '0') {
                count += 1;
            } else {
                countArray.push(count);
                count = 0;
            }
        }

        for (let max in countArray) {
            finalValue < countArray[max] ? finalValue = countArray[max] : null;
        }
        console.log(finalValue)
    }
}

solution(35076);