import { Body } from "./body";
import { Dummy } from "./ais/dummy";

export class CatBlack extends Body {
    constructor() {
        super({imageName: "catBlack", speed: 7});
        this.ai = new Dummy();
        this.ai.control(this);

    }

    update(time) {
        this.ai.update(time);
        return super.update(time);
    }
}