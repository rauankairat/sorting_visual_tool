
let arr = arr[#userinput]

for(let i = 0; i < arr.length; i++){
arr[i] =  Math.floor(Math.random() * 10000) + 1;
}

function shakerSort(arr) {
    let swapped;
    let left = 0;
    let right = arr.length - 1;

    do {
        swapped = false;

        // Forward pass (left to right)
        // Largest unsorted element bubbles up to the 'right' end
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

        // If no swaps occurred, the array is sorted
        if (!swapped) {
            break;
        }

        // Decrease the 'right' boundary as the largest element is now in place
        right--;
        swapped = false;

        // Reverse pass (right to left)
        // Smallest unsorted element bubbles down to the 'left' end
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                // Swap elements
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true;
            }
        }

        // Increase the 'left' boundary as the smallest element is now in place
        left++;

    } while (swapped); // Continue as long as a swap occurred in either pass

    return arr;
}