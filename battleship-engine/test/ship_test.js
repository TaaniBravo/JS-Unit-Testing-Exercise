const expect = require("chai").expect;

describe("check for ship", () => {
  const checkForShip = require("../game_logic/ship_methods").checkForShip;

  it("should correctly report no ship at a given players coordinate", () => {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };

    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report a ship at a given players coordinate", () => {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };

    expect(checkForShip(player, [0, 0])).to.be.true;
  });

  it("should handle ships at more then one coordinate", () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1]
          ]
        }
      ]
    };

    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should handle checking multiple ships", () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1]
          ]
        },
        {
          locations: [
            [1, 0],
            [1, 1]
          ]
        },
        {
          locations: [
            [2, 1],
            [2, 2],
            [2, 3]
          ]
        }
      ]
    };

    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [2, 1])).to.be.true;
    expect(checkForShip(player, [2, 2])).to.be.true;
    expect(checkForShip(player, [2, 3])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe("damageShip", () => {
  const damageShip = require("../game_logic/ship_methods").damageShip;

  it("should register damage on a given ship at a given loaction", () => {
    const ship = {
      locations: [[0, 0]],
      damage: []
    };

    damageShip(ship, [0, 0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

// Now we need a method that players can call to fire on their opponent.
// It should use checkForShip to confirm the attacking players guess.
// It should use damageShip to register damage on their opponent.
// Using equal and not.equal for some test specs.

describe("attackShip", () => {
  const checkForShip = require("../game_logic/ship_methods").checkForShip;
  const damageShip = require("../game_logic/ship_methods").damageShip;

  it("should check if the attacking players guess was correct and add damage if the opponent's ship was located on the attacking player's guess", () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
            [0, 2]
          ],
          damage: [[0, 1]]
        }
      ]
    };

    if (checkForShip(player, [0, 0])) {
      damageShip(player.ships[0], [0, 0]);
    }

    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.false;
    expect(player.ships[0].damage).to.deep.include([0, 0]);
    expect(player.ships[0].damage).to.not.deep.include([1, 1]);
  });
});
