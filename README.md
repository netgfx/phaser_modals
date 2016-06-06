# phaser_modals
Phaser.io Modals creator script

<strong>General Options:</strong>

<ul>
	<li><strong>type:</strong> This is the name of the modal, which we use to identify it</li>
	<li><strong>includeBackground:</strong> This toggles the modal background on or off (default off)</li>
        <li><strong>backgroundColor:</strong> This is the modal background color (default 0x000000)</li>
	<li><strong>backgroundOpacity: </strong> This sets the modal background opacity (default: 0.7)</li>
	<li><strong>modalCloseOnInput:</strong> If we want the modal to close when we click on the background (default off)</li>
</ul>

<strong>Modal elements properties</strong>

<ul>
	<li><strong>type</strong> | The type of the element (text, bitmapText, image, button, graphics)</li>
	<li><strong>color</strong> | The color of the element (text only)</li>
	<li><strong>fontFamily</strong> | The font family to use (bitmapText or text)</li>
	<li><strong>fontSize</strong> | The font size of the text or bitmaptext (bitmapText or text)</li>
	<li><strong>align</strong> | The alignment of the text (center, left, right and text only)</li>
	<li><strong>offsetX</strong> | The offset on x-axis of the element from the center of the game (0 is dead center)</li>	<li><strong>offsetY</strong> | The offset on y-axis of the element from the center of the game (0 is dead center)</li>	<li><strong>contentScale</strong> | The scaling to apply to the element (1 is no scale, default = 1)</li>
	<li><strong>stroke</strong> | The stroke color to apply to the text (default = 0x000000)</li>
	<li><strong>strokeThickness</strong> | The stroke thickness to apply to the text (default = 0)</li>
	<li><strong>content</strong> | The actual content of the element can be string, number, cache key (for images), url of image</li>
	<li><strong>callback</strong> | The callback function to call when the element is clicked/touched (basically when input down event is fired)</li>
	<li><strong>fixedToCamera</strong> | Whether or not the modal is fixed to camera (default = false)</li>
	<li><strong>atlasParent</strong> | When adding a sprite or button from an atlasHash/Array (default = "")</li>
	<li><strong>buttonHover</strong> | Key for the button state  hover (default = content)</li>
	<li><strong>buttonActive</strong> | Key for the button state active (default = content)</li>
	<li><strong>graphicColor</strong> | Graphic color (default = 0xffffff)</li>
	<li><strong>graphicOpacity</strong> | Graphic opacity (default = 1)</li>
	<li><strong>graphicWidth</strong> | Graphic width (default = 200)</li>
	<li><strong>graphicHeight</strong> | Graphic height (default = 200)</li>
	<li><strong>lockPosition</strong> | locks the position after an update (default = false)</li>
</ul>

<strong>Available functions</strong>

<ul>
	<li><strong>createModal</strong> | The function to create a modal, takes an object with the modal properties as an argument</li>
	<li><strong>showModal</strong> | The function to show a previously created modal, takes the modal name/type as an argument</li>
	<li><strong>hideModal</strong> | The function to hide a previously created and shown modal, takes the modal name/type as an argument</li>
	<li><strong>getModalItem</strong> | The function to get an element from a previously created modal, takes the modal name/type and the position of the element (index) as an argument</li>
	<li><strong>destroyModal</strong> | Remove a previously created modal from the registry</li>
	<li><strong>updateModalValue</strong> | Dynamically change the value of an element inside a modal, takes the modal name/type, the changed value, and the index of the element as arguments (experimental function)</li>
</ul>

<hr>
To view an example and tutorial visit my blog post: http://nightlycoding.com/index.php/2015/02/phaser-io-modal-creator/

Note: Currently there is a bug on Phaser < 2.4.4 with WebGL using the last texture used if an empty sprite is created, in order to fix this you can add: ``` innerModal.texture.baseTexture.skipRender = false; ```
<br>Issue: https://github.com/photonstorm/phaser/issues/2176
Thanks for this info @cemadil
