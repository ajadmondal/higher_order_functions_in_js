Array.prototype.myForEach = (callBack) => {
    for (let idx = 0; idx < this.length; idx++){
        callBack(this[idx], idx, arr);
    }
}