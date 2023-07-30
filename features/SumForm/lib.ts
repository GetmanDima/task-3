export function countSum(values: string[]) {
    const fractionRegex = /(.+)\/(.+)/;

    return values.reduce((res, v) => {
        const matches = v.match(fractionRegex);

        if (matches && matches.length === 3) {
            return res + (Number(matches[1]) / Number(matches[2]));
        }

        if (isNaN(Number(v))) {
            return res;
        }

        return Number(v) + res;
    }, 0);
}