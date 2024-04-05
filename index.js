// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup){
    return Math.abs(distanceFromHqInBlocks(pickup) * 264)
}

function distanceTravelledInFeet(start, stop){
    return Math.abs(stop - start) *264;
}

function calculatesFarePrice(start,stop){
    if (distanceTravelledInFeet(start,stop)<=400){
        return 0;
    }
    else if (distanceTravelledInFeet(start,stop)>400 && distanceTravelledInFeet(start,stop)<=2000){
        return (distanceTravelledInFeet(start,stop) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start,stop)>2000 && distanceTravelledInFeet(start,stop)<=2500){
        return 25
    }
    else if (distanceTravelledInFeet(start,stop)>2500){
        return 'cannot travel that far'
    }

}