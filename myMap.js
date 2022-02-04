Array.prototype.myMap = (callBack){
    let resultArray = [];
    for (let idx = 0; idx < this.length; idx++){
        resultArray.push(callBack(this[idx], idx, this));
    }
    return resultArray;
}