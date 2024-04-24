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
        name: "Level One",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: 300 },
          { type: "sawblade", x: 700, y: 350 },
          { type: "sawblade", x: 1100, y: 350 },
          { type: "enemy", x: 1200, y: groundY - 50 },
          { type: "reward", x: 999, y: groundY - 30 },
          { type: "marker", x: 2500, y: groundY - 50 },
        ],
      },
      {
        name: "Level Two",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 300, y: 350 },
          { type: "sawblade", x: 569, y: 400 },
          { type: "sawblade", x: 569, y: 400 },
          { type: "enemy", x: 400, y: groundY - 10 },
          { type: "enemy", x: 800, y: groundY - 100 },
          { type: "enemy", x: 1200, y: groundY - 50 },
          { type: "reward", x: 1200, y: groundY - 90 },
          { type: "marker", x: 600, y: groundY },
        ],
      },
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
