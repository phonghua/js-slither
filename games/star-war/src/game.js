Game = function (game) { }

Game.prototype = {
    preload: function () {
        //load assets
        // this.game.load.image('circle', 'asset/circle.png');
        // this.game.load.image('background', 'asset/tile.png');

        console.log("preload")
    },
    create: function () {
        var width = this.game.width;
        var height = this.game.height;

        console.log("create", width, height)

        
    },
    /**
     * Main update loop
     */
    update: function () {
        
    }
};