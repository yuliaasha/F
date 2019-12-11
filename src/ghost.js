import { Body } from "./body";
import { Dummy } from "./ais/dummy";

export class Ghost extends Body {
    constructor() {
        super({imageName: "ghost", speed: 20});
        this.ai = new Dummy();
        this.ai.control(this);
    }

    update(time) {
        this.ai.update(time);
        return super.update(time);
    }

}