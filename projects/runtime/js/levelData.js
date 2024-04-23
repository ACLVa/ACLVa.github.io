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
        name: "Saws",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawOne", x: 300, y: 350 },
          { type: "sawTwo", x: 569, y: 400 },
          { type: "sawThree", x: 999, y: 375 },
        ],
      },
      {
        name: "Enemies",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "enemyOne", x: 400, y: groundY - 10 },
          { type: "enemyTwo", x: 800, y: groundY - 100 },
          { type: "enemyThree", x: 1200, y: groundY - 50 },
        ],
      },
      {
        name: "Rewards",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "rewardOne", x: 600, y: groundY - 100 },
          { type: "rewardTwo", x: 999, y: groundY - 30 },
          { type: "rewardThree", x: 1200, y: groundY - 90 },
        ],
      },
      {
        name: "Levels",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "levelOne", x: 400, y: groundY },
          { type: "levelTwo", x: 600, y: groundY },
        ],
      },
      {
        name: "Markers",
        number: 5,
        speed: -3,
        gameItems: [
          { type: "markerOne", x: 2500, y: groundY - 50 },
          { type: "markerTwo", x: 600, y: groundY },
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
