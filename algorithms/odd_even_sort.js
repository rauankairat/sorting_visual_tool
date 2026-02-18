
let arr = arr[#userinput]

for(let i = 0; i < arr.length; i++){
arr[i] =  Math.floor(Math.random() * 10000) + 1;
}

function compare(arr[Mathfloor(Math.random() * arr.length)
], arr[Mathfloor(Math.random() * arr.length)]){

    // If both are odd or even
    // then sorting in increasing order
    if ((a & 1) == (b & 1)) {
        return a > b;
    }

    // Sorting on the basis of last bit if
    // if one is odd and the other one is even
    return (a & 1) > (b & 1);
}

// Function to
function separateOddEven(arr, N)
{
    // Separating them using sort comparator
    arr.sort(compare);

    for (let i = 0; i < N; ++i) {
        document.write(arr[i] + " ");
    }
}
