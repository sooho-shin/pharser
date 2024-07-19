
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class User extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 460, y ?? 409);

		// user
		const user = scene.add.image(0, 0, "user");
		user.scaleX = 0.5;
		user.scaleY = 0.5;
		this.add(user);

		// nickname
		const nickname = scene.add.text(0, 53, "", {});
		nickname.setOrigin(0.48347813165265796, 0.42669301585702935);
		nickname.text = "User";
		nickname.setStyle({ "align": "center", "color": "#E3E3E5", "fontFamily": "Pretendard", "fontSize": "12px", "stroke": "#000" });
		this.add(nickname);

		// text_1
		const text_1 = scene.add.text(-17, 71, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.alpha = 0.6;
		text_1.alphaTopLeft = 0.6;
		text_1.alphaTopRight = 0.6;
		text_1.alphaBottomLeft = 0.6;
		text_1.alphaBottomRight = 0.6;
		text_1.text = "$";
		text_1.setStyle({ "align": "center", "color": "#E3E3E5", "fontFamily": "Pretendard" });
		this.add(text_1);

		// text_2
		const text_2 = scene.add.text(8, 71, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "0.00";
		text_2.setStyle({ "color": "#E3E3E5", "fontFamily": "Pretendard", "fontStyle": "bold" });
		this.add(text_2);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
