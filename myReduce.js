Array.prototype.myReduce = (callBack, accumulator) => {
    if (this.length < 1) return accumulator;
    if (!accumulator) {
        if (typeof this[0] === "string") accumulator = "";
        if (typeof this[0] === "number") accumulator = 0;
    }
    for (let idx = 0; idx < this.length; idx++){
        accumulator = callBack(accumulator, this[idx]);
    }
    return accumulator;
}