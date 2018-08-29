
# Phaser_Modals

Phaser.io Modals creator script

  

## Live Example: https://codepen.io/7linternational/pen/eeMNMm/

  

### Tutorial blog post: http://nightlycoding.com/wordpress/phaser-io-modal-creator/

  

### API

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

<li><strong>type</strong> | The type of the element (text, bitmapText, image, video, sprite, button or graphics).</li>

<li><strong>color</strong> | The color of the element (text only)</li>

<li><strong>fontFamily</strong> | The font family to use (bitmapText or text)</li>

<li><strong>fontSize</strong> | The font size of the text or bitmaptext (bitmapText or text)</li>

<li><strong>align</strong> | The alignment of the text (center, left, right and text only)</li>

<li><strong>offsetX</strong> | The offset on x-axis of the element from the center of the game (0 is dead center)</li>  <li><strong>offsetY</strong> | The offset on y-axis of the element from the center of the game (0 is dead center)</li>  <li><strong>contentScale</strong> | The scaling to apply to the element (1 is no scale, default = 1)</li>

<li><strong>stroke</strong> | The stroke color to apply to the text (default = 0x000000)</li>

<li><strong>strokeThickness</strong> | The stroke thickness to apply to the text (default = 0)</li>

<li><strong>content</strong> | The actual content of the element can be string, number, cache key (for images and videos), url of image</li>

<li><strong>callback</strong> | The callback function to call when the element is clicked/touched (basically when input down event is fired)</li>

<li><strong>fixedToCamera</strong> | Whether or not the modal is fixed to camera (default = false)</li>

<li><strong>atlasParent</strong> | When adding a sprite or button from an atlasHash/Array (default = "")</li>

<li><strong>buttonHover</strong> | Key for the button state hover (default = content)</li>

<li><strong>buttonActive</strong> | Key for the button state active (default = content)</li>

<li><strong>graphicColor</strong> | Graphic color (default = 0xffffff)</li>

<li><strong>graphicOpacity</strong> | Graphic opacity (default = 1)</li>

<li><strong>graphicWidth</strong> | Graphic width (default = 200)</li>

<li><strong>graphicHeight</strong> | Graphic height (default = 200)</li>

<li><strong>graphicRadius</strong> | Graphic border radius (default = 0)</li>

<li><strong>lockPosition</strong> | locks the position after an update (default = false)</li>

<li><strong>tileSpriteWidth</strong> | The width of the TileSprite. (default = game.width)</li>

<li><strong>tileSpriteHeight</strong> | The height of the TileSprite (default = game.height)</li>

<li><strong>anchor</strong> | Anchor for element (default = {x:0,y:0})</li>

<li><strong>angle</strong> | The angle property is the rotation of the element (default = 0)</li>

<li><strong>x</strong> | The position of the element on the x axis (default = 0)</li>

<li><strong>y</strong> | The position of the element on the y axis (default = 0)</li>

<li><strong>frame</strong> | If this Sprite is using part of a sprite sheet or texture atlas you

can specify the exact frame to use by giving a string or numeric index. </li>

</ul>

  

To make part of text **BOLD** include it like this:

  

```

content: "The white {behind} me\n{is} a {[Phaser.Graphic]}"

```

(Add text that you want bold into **{}** )

  

<strong>Available functions</strong>

  

<ul>

<li><strong>createModal</strong> | The function to create a modal, takes an object with the modal properties as an argument</li>

<li><strong>showModal</strong> | The function to show a previously created modal, takes the modal name/type as an argument</li>

<li><strong>hideModal</strong> | The function to hide a previously created and shown modal, takes the modal name/type as an argument</li>

<li><strong>getModalItem</strong> | The function to get an element from a previously created modal, takes the modal name/type and the position of the element (index) as an argument</li>

<li><strong>destroyModal</strong> | Remove a previously created modal from the registry</li>

<li><strong>updateModalValue</strong> | Dynamically change the value of an element inside a modal,takes respectively: the new value, the modal name/type, and the index of the element as arguments (experimental function)</li>

</ul>

  

<hr>

  

Note: Currently there is a bug on Phaser < 2.4.4 with WebGL using the last texture used if an empty sprite is created, in order to fix this you can add: ``` innerModal.texture.baseTexture.skipRender = false; ```

Note: Videos will loop while the modal is open. All videos will play on the event show and stop on the event hide. I'm working on a play button.

<br>Issue: https://github.com/photonstorm/phaser/issues/2176

Thanks for this info @cemadil