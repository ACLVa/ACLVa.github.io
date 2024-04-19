var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "SAW1",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
      {
        name: "SAW2",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
      {
        name: "SAW3",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
      {
        name: "HP1",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "health", x: 400, y: groundY },
          { type: "health", x: 600, y: groundY },
          { type: "health", x: 900, y: groundY },
        ],
      },
      {
        name: "HP2",
        number: 5,
        speed: -3,
        gameItems: [
          { type: "health", x: 400, y: groundY },
          { type: "health", x: 600, y: groundY },
          { type: "health", x: 900, y: groundY },
        ],
      },
      {
        name: "HP3",
        number: 6,
        speed: -3,
        gameItems: [
          { type: "health", x: 400, y: groundY },
          { type: "health", x: 600, y: groundY },
          { type: "health", x: 900, y: groundY },
        ],
      },
      {
        name: "E1",
        number: 7,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 400, y: groundY },
          { type: "enemy", x: 600, y: groundY },
          { type: "enemy", x: 900, y: groundY },
        ],
      },
      {
        name: "E2",
        number: 8,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 400, y: groundY },
          { type: "enemy", x: 600, y: groundY },
          { type: "enemy", x: 900, y: groundY },
        ],
      },
      {
        name: "E3",
        number: 9,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 400, y: groundY },
          { type: "enemy", x: 600, y: groundY },
          { type: "enemy", x: 900, y: groundY },
        ],
      },
      {
        name: "LVL1",
        number: 10,
        speed: -3,
        gameItems: [
          { type: "level", x: 400, y: groundY },
          { type: "level", x: 600, y: groundY },
          { type: "level", x: 900, y: groundY },
        ],
      },
      {
        name: "LVL2",
        number: 11,
        speed: -3,
        gameItems: [
          { type: "level", x: 400, y: groundY },
          { type: "level", x: 600, y: groundY },
          { type: "level", x: 900, y: groundY },
        ],
      },
      {
        name: "EM",
        number: 12,
        speed: -3,
        gameItems: [
          { type: "marker", x: 400, y: groundY },
          { type: "marker", x: 600, y: groundY },
          { type: "marker", x: 900, y: groundY },
        ],
      }
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
