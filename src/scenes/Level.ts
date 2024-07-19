
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import User from "./prefabs/User";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// image_1
		const image_1 = this.add.image(572, 331, "table");
		image_1.scaleX = 0.5;
		image_1.scaleY = 0.5;

		// container_1
		const container_1 = new User(this, 183, 387);
		this.add.existing(container_1);

		// user_1
		const user_1 = new User(this, 268, 136);
		this.add.existing(user_1);

		// user_2
		const user_2 = new User(this, 555, 101);
		this.add.existing(user_2);

		// user_3
		const user_3 = new User(this, 882, 144);
		this.add.existing(user_3);

		// user_4
		const user_4 = new User(this, 949, 388);
		this.add.existing(user_4);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
