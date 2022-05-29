function extractValue(array, key) {
    return array.reduce(function(aggregator, next) {
        aggregator.push(next[key]);
        return aggregator
    }, []);
}

function vowelCount(string) {
    const vowels = "aeiou";
    newArray = string.toLowerCase().split("");
    return newArray.reduce(function(aggregator, next) {
        if (vowels.indexOf(next) !== -1 {
            if (aggregator[next]) {
                aggregator[next] ++;
            }     else {
                    aggregator[next] = 1;
                }
            }
        }

    },[]);
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, arr);
}

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}