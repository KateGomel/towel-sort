// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return (matrix = []);
    } else {
        matrix = matrix
            .map((item) => {
                if ((matrix.indexOf(item) + 1) % 2 === 0) {
                    return item.reverse();
                } else {
                    return item;
                }
            })
            .flat();
    }
    return matrix;
};
