function BubbleSorting(lst){
    let lstSort = lst;
    let round = 1;
    var temp;
    while (round != lst.length-1){
        for (let i = 0; i < lstSort.length-round; i++){
            if (lstSort[i] > lstSort[i+1]){
                temp = lst[i];
                lst.splice(i, 2, lst[i+1]);
                lst.splice(i+1, 0, temp);
            }
        }
        round++;
    }
    return lstSort;
}

console.log(BubbleSorting([2, 3, 1, 5, 4]));