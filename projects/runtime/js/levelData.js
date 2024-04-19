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
          { type: "sawOne", x: 400, y: groundY },
          { type: "sawTwo", x: 600, y: groundY },
          { type: "sawThree", x: 900, y: groundY },
        ],
      },
      {
        name: "Enemies",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "enemyOne", x: 400, y: groundY },
          { type: "enemyTwo", x: 600, y: groundY },
          { type: "enemyThree", x: 900, y: groundY },
        ],
      },
      {
        name: "Rewards",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "rewardOne", x: 400, y: groundY },
          { type: "rewardTwo", x: 600, y: groundY },
          { type: "rewardThree", x: 900, y: groundY },
        ],
      },
      {
        name: "Enemies",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "enemyA", x: 400, y: groundY },
          { type: "enemyB", x: 600, y: groundY },
          { type: "enemyC", x: 900, y: groundY },
        ],
      },
      {
        name: "Levels",
        number: 5,
        speed: -3,
        gameItems: [
          { type: "levelOne", x: 400, y: groundY },
          { type: "levelTwo", x: 600, y: groundY },
        ],
      },
      {
        name: "Markers",
        number: 6,
        speed: -3,
        gameItems: [
          { type: "markerOne", x: 400, y: groundY },
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
