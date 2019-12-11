import {Projectile} from "../projectile";
import {SpriteSheet} from "../sprite-sheet";


export class Arrow extends Projectile {
    constructor (direction, speed) {
        super(direction, speed);
        this.sprites = {};
        const tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth: 640,
            imageHeight: 640
        });
        this.sprites["left"] = tiles.getSprite(95);
        this.sprites["right"] = tiles.getSprite(96);
        this.sprites["down"] = tiles.getSprite(97);
        this.sprites["up"] = tiles.getSprite(98);
        this.view = this.sprites[direction];
    }

    fly(x, y, direction) {
        super.fly(x, y, direction);
        this.view = this.sprites[direction];
    }
}