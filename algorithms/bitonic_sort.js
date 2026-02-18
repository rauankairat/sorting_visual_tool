
let arr = arr[#userinput]

for(let i = 0; i < arr.length; i++){
arr[i] =  Math.floor(Math.random() * 10000) + 1;
}

function compAndSwap(arr, i, j, direction) {
    if ((direction === 1 && arr[i] > arr[j]) 
        || (direction === 0 && arr[i] < arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Recursively merge a bitonic sequence into sorted order
function bitonicMerge(arr, low, cnt, direction) {
    if (cnt > 1) {
        let k = Math.floor(cnt / 2);
        for (let i = low; i < low + k; i++) {
            compAndSwap(arr, i, i + k, direction);
        }
        bitonicMerge(arr, low, k, direction);
        bitonicMerge(arr, low + k, k, direction);
    }
}

// Recursively build bitonic sequences and sort them
function bitonicSort(arr, low, cnt, direction) {
    if (cnt > 1) {
        let k = Math.floor(cnt / 2);

        // Sort first half ascending
        bitonicSort(arr, low, k, 1);

        // Sort second half descending
        bitonicSort(arr, low + k, k, 0);

        // Merge entire sequence in given direction
        bitonicMerge(arr, low, cnt, direction);
    }
}

// function to sort the entire array
function sortArray(arr) {
   
    // up = 1 → ascending, up = 0 → descending
    let up = 1;
    bitonicSort(arr, 0, arr.length, up);
}