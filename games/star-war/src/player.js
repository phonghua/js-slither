/**
 * Phaser player
 * @param  {Phaser.Game} game      game object
 * @param  {String} spriteKey Phaser sprite key
 * @param  {Number} x         coordinate
 * @param  {Number} y         coordinate
 */
Player = function (game, spriteKey, x, y) {
    this.game = game;
    
    this.spriteKey = spriteKey;
    
    this.fastSpeed = 200;
    this.slowSpeed = 130;
    this.speed = this.slowSpeed;
    this.rotationSpeed = 80;
}

Player.prototype = {
    
    /**
     * Call from the main update loop
     */
    update: function () {
        console.log("update from player")
    },
    
};