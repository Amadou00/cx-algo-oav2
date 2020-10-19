function SelectSorting(lst){
    let lstSort = [lst];
    let round = 0;
    let min = lstSort[0];
    let temp;
    while (round != lstSort.length){
        for (let i = 0; i < lstSort.length; i++){
            if (lstSort[i] < min){
                min = lstSort[i];
            }
            console.log(min);
        }
        temp = min
        min = lstSort[round];
        lstSort[round] = min
        //lstSort.splice(i, 0, min);
        lstSort.splice(round, 1);
        round++;
    }
    return lst;
}

console.log(SelectSorting([8, 2, 6, 5, 4, 1]));