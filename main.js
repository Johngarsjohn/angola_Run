class main extends Phaser{
    constructor(){
        var player;
        var stars;
        var bombs;
        var platforms;
        var cursors;
        var score = 0;
        const gameOver = false;
        var scoreText;
        var game = new Phaser.Game(config);
        function preload ()
        {
            this.load.image('fundo', 'img/fundo.png');
            this.load.image('ground', 'assets/platform.png');
            this.load.image('pensador', 'img/itens/pensador.png');
            this.load.image('catana', 'img/itens/catana.png');
            this.load.image('carro', 'img/van.png');
            this.load.spritesheet('personagem', 'img/player1.png', { frameWidth: 32, frameHeight: 48 });
        }
    }
}

