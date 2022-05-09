const FindDublicate = () => {

    //find missing number

    let arr = [1, 2, 3, 4, 5, 6, 7, 9];

    let missNumber = arr => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + 1 !== arr[i + 1]) {
                return arr[i] + 1
            }
        }
        return false;

    }


    return (
        <div>
            this missing Number: {missNumber(arr)}
        </div>
    )
}

export default FindDublicate;