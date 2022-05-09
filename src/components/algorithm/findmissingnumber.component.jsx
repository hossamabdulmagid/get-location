const FindMissingNumber = () => {


    let arr = [1, 2, 4, 5, 6, 7, 8, 9];

    // write code here to find The Missing Number In Array

    const findMissingNumber = arr => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] !== arr[i] + 1) {
                return arr[i] + 1;
            }
        }
        return false;
    }

    console.log(findMissingNumber(arr), `findMissingNumber`);


    let arrD = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

    // write code here to find Duplicated Number in Array

    const findDuplicateNumber = arrD => {
        const dups = {};
        for (let i = 0; i < arrD.length; i++) {
            if (dups[arrD[i]]) {
                return arrD[i];
            } else {
                dups[arrD[i]] = arrD[i];
            }
        }
        return false;
    }
    console.log(findDuplicateNumber(arrD), `findDuplicateNumber()`)

 // find min and max

    const ar = [1, 2, 3, 4, 100];

    const findMaxMin = ar => {
        let max = ar[0];
        let min = ar[0];

        for (let i = 0; i < ar.length; i++) {
            if (ar[i] > max) {
                max = ar[i];
            } else if (ar[i] < min) {
                min = ar[i];
            }
        }
        return {
            "max": max,
            "min": min,
        }
    }

    console.log(findMaxMin(ar), `findingMaxMin()`)


    return (
        <div>
            hello
        </div>
    )
}

export default FindMissingNumber;