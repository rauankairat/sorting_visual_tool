
let arr = arr[#userinput]

for(let i = 0; i < arr.length; i++){
arr[i] =  Math.floor(Math.random() * 10000) + 1;
}


function randomized_partition(A, p, r):
    i = random(p, r)  // Get a random index between p and r
    swap(A[i], A[r])  // Swap the random element with the last element
    return partition(A, p, r) // Call standard partition function

// Main randomized quicksort function
function randomized_quicksort(A, p, r):
    if p < r:
        q = randomized_partition(A, p, r) // Get the pivot's final position
        randomized_quicksort(A, p, q - 1) // Recurse on the left subarray
        randomized_quicksort(A, q + 1, r) // Recurse on the right subarray