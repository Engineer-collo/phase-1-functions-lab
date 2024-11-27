// Code your solution in this file!

function distanceFromHqInBlocks (numnberOfTheBlock) {
  if (numnberOfTheBlock > 42) {
    return numnberOfTheBlock - 42;
  } else {
    return 42 - numnberOfTheBlock;
  }
}

function distanceFromHqInFeet (numnberOfTheBlock) {
  return distanceFromHqInBlocks(numnberOfTheBlock) * 264;
}

function distanceTravelledInFeet (startingPoint, destinationPoint) {
  if (startingPoint < destinationPoint) {
    return (destinationPoint - startingPoint) * 264;
  } else {
    return (startingPoint - destinationPoint) * 264;
  }
}

function calculatesFarePrice (startingPoint, destinationPoint) {
  const distance = distanceTravelledInFeet(startingPoint, destinationPoint);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}