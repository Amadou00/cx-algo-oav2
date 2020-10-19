function InsertSorting(lst){
    let lstSort = lst;
    let y = 0;
    var temp;
    for (let i = 1; i < lstSort.length; i++){
        temp = lstSort[i];
        y = i
        console.log(lstSort);
        while (y > 0 && lstSort[y-1] > temp){
            lstSort[y] = lstSort[y - 1]
            y = y - 1;
        }
        lstSort[y] = temp;
    }
    return lstSort;
}

console.log(InsertSorting([4, 1, 5, 8, 3, 6]));
