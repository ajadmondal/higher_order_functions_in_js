Array.prototype.myFilter = (callBack) => {
    let resultArray = [];
    for (let idx = 0; idx < this.length; idx++){
        if (!!callBack(this[idx], idx, this)) {
            resultArray.push(this[idx]);
        }
    }
    return resultArray;
}