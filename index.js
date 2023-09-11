function distanceFromHqInBlocks(x) {
    if (x >= 42) {
        return x - 42;
    }
    else if (x < 42) {
        return 42 - x;
    }
}

function distanceFromHqInFeet(x) {
    return (distanceFromHqInBlocks(x)) * 264;
}

function distanceTravelledInFeet(x, y) {
    return (Math.max(x, y) - Math.min(x, y)) * 264;
}

function calculatesFarePrice(x, y) {
    let z = `${distanceTravelledInFeet(x, y)}`
    if (z <= 400){
        return 0
    }
    if (z > 400, z <= 2000) {
        return (z - 400) * 0.02
    }
    else if (z > 2000, z <= 2500) {
        return 25
    }
    else if (z > 2500) {
        return "cannot travel that far"
    }
}