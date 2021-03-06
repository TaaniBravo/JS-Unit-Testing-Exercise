const checkForShip = (player, coordinates) => {
  let shipPresent, ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.filter(actualCoordinates => {
      return (
        actualCoordinates[0] === coordinates[0] &&
        actualCoordinates[1] === coordinates[1]
      );
    })[0];

    if (shipPresent) return true;
  }

  return false;
};

const damageShip = (ship, coordinates) => {
  ship.damage.push(coordinates);
};

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
