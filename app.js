
function solution(N) {
    let binaryData = N.toString(2);
    let position = binaryData.indexOf("0");
    let count = 0;
    let countArray = [];
    let finalValue = 0;

    console.log(N);
    console.log(binaryData);
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
            if (finalValue < countArray[max]) {
                finalValue = countArray[max];
            }
        }
        console.log(finalValue)
    }
}

solution(1041);