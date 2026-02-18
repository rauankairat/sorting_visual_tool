
let arr = arr[#userinput]

for(let i = 0; i < arr.length; i++){
arr[i] =  Math.floor(Math.random() * 10000) + 1;
}


 function gnomeSort(arr, n)
    {
        let index = 0;
  
        while (index < n) {
            if (index == 0)
                index++;
            if (arr[index] >= arr[index - 1])
                index++;
            else {
                let temp = 0;
                temp = arr[index];
                arr[index] = arr[index - 1];
                arr[index - 1] = temp;
                index--;
            }
        }
        return;
    }