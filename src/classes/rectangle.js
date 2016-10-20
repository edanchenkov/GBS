import Item from './item';


export default class Rectangle extends Item {
    constructor(id, posistion, size, destroyable) {
        super(id);

        this.destroyable = destroyable;
        this.position = posistion;
        this.size = size;

        this.fillStyle = '#FF0000';

    }

    draw() {
        super.draw();

        let game = this.game;

        game.ctx.beginPath();
        game.ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);

        if (this.fillStyle) {
            game.ctx.fillStyle = this.fillStyle;
            game.ctx.fill();
        }

        game.ctx.closePath();
    }

}