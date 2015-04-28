var gameModal = gameModal || {};


gameModal = function (game) {

    var _this = this;

    game.modals = {};

    /**
     * [hideModal description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    this.hideModal = function (type) {
        window.console.log(type);
        game.modals[type].visible = false;
    };

    return {

        createModal: function (options) {

            var type = options.type || ''; // must be unique
            var includeBackground = options.includeBackground; // maybe not optional
            var backgroundColor = options.backgroundColor || "0x000000";
            var backgroundOpacity = options.backgroundOpacity || 0.7;
            var modalCloseOnInput = options.modalCloseOnInput || false;
            var vCenter = options.vCenter || true;
            var hCenter = options.hCenter || true;
            var itemsArr = options.itemsArr || [];
            /*var vPadding = options.vPadding || 20;*/

            /////////////////////////////////////////////////////////////////////

            var modal;
            var modalGroup = game.add.group();

            if (includeBackground === true) {
                modal = game.add.graphics(game.width, game.height);
                modal.beginFill(backgroundColor, backgroundOpacity);
                modal.x = 0;
                modal.y = 0;

                modal.drawRect(0, 0, game.width, game.height);

                if (modalCloseOnInput === true) {

                    var innerModal = game.add.sprite(0, 0);
                    innerModal.inputEnabled = true;
                    innerModal.width = game.width;
                    innerModal.height = game.height;
                    innerModal.type = type;
                    innerModal.input.priorityID = 0;
                    innerModal.events.onInputDown.add(function (e, pointer) {
                        window.console.log(e, pointer);
                        this.hideModal(e.type);
                    }, _this, 2);

                    modalGroup.add(innerModal);
                } else {
                    //modal.inputEnabled = true;
                    /*var innerModal = game.add.sprite(0, 0);
                    innerModal.inputEnabled = true;
                    innerModal.width = game.width;
                    innerModal.height = game.height;
                    innerModal.type = type;
                    innerModal.input.priorityID = 2;
                    innerModal.events.onInputDown.add(function(e){
                        //
                    }, _this);
                    modalGroup.add(innerModal);*/
                }
            }

            // add the bg
            if (includeBackground) {
                modalGroup.add(modal);
            }

            var modalLabel;
            for (var i = 0; i < itemsArr.length; i += 1) {
                var item = itemsArr[i];
                var itemType = item.type || 'text';
                var itemColor = item.color || 0x000000;
                var itemFontfamily = item.fontFamily || 'Arial';
                var itemFontSize = item.fontSize || 32;
                var itemStroke = item.stroke || '0x000000';
                var itemStrokeThickness = item.strokeThickness || 0;
                var itemAlign = item.align || 'center';
                var offsetX = item.offsetX || 0;
                var offsetY = item.offsetY || 0;
                var contentScale = item.contentScale || 1;
                var content = item.content || "";
                var centerX = game.width / 2;
                var centerY = game.height / 2;
                var callback = item.callback || false;
                var textAlign = item.textAlign || "left";

                modalLabel = null;

                if (itemType === "text" || itemType === "bitmapText") {

                    if (itemType === "text") {
                        modalLabel = game.add.text(0, 0, content, {
                            font: itemFontSize + 'px ' + itemFontfamily,
                            fill: "#" + String(itemColor).replace("0x", ""),
                            stroke: "#" + String(itemStroke).replace("0x", ""),
                            strokeThickness: itemStrokeThickness,
                            align: itemAlign
                        });
                        modalLabel.contentType = 'text';
                        modalLabel.update();
                        modalLabel.x = ((game.width / 2) - (modalLabel.width / 2)) + offsetX;
                        modalLabel.y = ((game.height / 2) - (modalLabel.height / 2)) + offsetY;
                    } else {
                        modalLabel = game.add.bitmapText(0, 0, itemFontfamily, String(content), itemFontSize);
                        modalLabel.contentType = 'bitmapText';
                        modalLabel.align = textAlign;
                        modalLabel.updateText();
                        modalLabel.x = (centerX - (modalLabel.width / 2)) + offsetX;
                        modalLabel.y = (centerY - (modalLabel.height / 2)) + offsetY;
                    }

                } else if (itemType === "image") {
                    //content = item.imageKey || "";
                    modalLabel = game.add.image(0, 0, content);
                    modalLabel.scale.setTo(contentScale, contentScale);
                    modalLabel.contentType = 'image';
                    modalLabel.x = (centerX - ((modalLabel.width) / 2)) + offsetX;
                    modalLabel.y = (centerY - ((modalLabel.height) / 2)) + offsetY;
                }

                modalLabel.offsetX = offsetX;
                modalLabel.offsetY = offsetY;


                if (callback !== false) {
                    modalLabel.inputEnabled = true;
                    modalLabel.pixelPerfectClick = true;
                    modalLabel.priorityID = 10;
                    modalLabel.events.onInputDown.add(callback, modalLabel);
                }

                if (itemType !== "bitmapText") {
                    modalLabel.bringToTop();
                    modalGroup.add(modalLabel);
                    modalLabel.bringToTop();
                    modalGroup.bringToTop(modalLabel);
                } else {
                    modalGroup.add(modalLabel);
                    modalGroup.bringToTop(modalLabel);
                }
            }

            modalGroup.visible = false;
            game.modals[type] = modalGroup;

        },
        updateModalValue: function (value, type, index, id) {
            var item;
            if (index !== undefined && index !== null) {
                item = game.modals[type].getChildAt(index);
            } else if (id !== undefined && id !== null) {

            }

            if (item.contentType === "text") {
                item.text = value;
                item.update();
                item.x = ((game.width / 2) - (item.width / 2)) + item.offsetX;
                item.y = ((game.height / 2) - (item.height / 2)) + item.offsetY;
            } else if (item.contentType === "bitmapText") {
                item.text = value;
                item.updateText();
                item.x = ((game.width / 2) - (item.width / 2)) + item.offsetX;
                item.y = ((game.height / 2) - (item.height / 2)) + item.offsetY;
            } else if (item.contentType === "image") {
                item.loadTexture(value);
            }

        },
        getModalItem: function (type, index) {
            return game.modals[type].getChildAt(index);
        },
        showModal: function (type) {
            game.world.bringToTop(game.modals[type]);
            game.modals[type].visible = true;
            // you can add animation here
        },
        hideModal: function (type) {
            game.modals[type].visible = false;
            // you can add animation here
        },
        destroyModal: function (type) {
            game.modals[type].destroy();
            delete game.modals[type];
        }
    };
};


/**
 * [createModal description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function createModal(type, fn) {

    var modalGroup = game.add.group();
    modalGroup.inputEnabled = true;

    var modal = game.add.graphics(game.width, game.height);
    modal.beginFill("0xffffff", 0.7);
    modal.x = 0;
    modal.y = 0;
    modal.inputEnabled = true;
    modal.drawRect(0, 0, game.width, game.height);

    //var modalPanel = game.add.image((game.width / 2 - (550 / 2)), (game.height / 2 - (400 / 2)), "modal");

    if (type === "game-over") {

        var gameLabel = game.add.image(game.width / 2 - ((358 * 0.6) / 2), (game.height / 2) - 250, 'gameover');
        gameLabel.scale.setTo(0.6, 0.6);
        var gameLabel1 = game.add.image(game.width / 2 - ((533 * 0.6) / 2), game.height / 2, 'tryagain');
        gameLabel1.scale.setTo(0.6, 0.6);
        var yesLabel = game.add.image(game.width / 2 - 200, game.height / 2 + 150, 'yes');
        var noLabel = game.add.image(game.width / 2 + 80, game.height / 2 + 150, 'no');

        yesLabel.scale.setTo(0.8, 0.8);
        noLabel.scale.setTo(0.8, 0.8);

        // -----------

        yesLabel.inputEnabled = true;
        yesLabel.events.onInputDown.add(function () {
            game.state.start('Game');
        }, this);

        noLabel.inputEnabled = true;
        noLabel.events.onInputDown.add(function () {
            game.state.start('MainMenu');
        }, this);

        modalGroup.add(modal);
        modalGroup.add(gameLabel);
        modalGroup.add(gameLabel1);
        modalGroup.add(yesLabel);
        modalGroup.add(noLabel);

    } else if (type === "level") {

        var modalText = game.add.bitmapText(0, 0, 'font', "Starting \nNext Level", 52);

        modalText.inputEnabled = true;
        modalText.updateText();
        modalText.x = game.width / 2 - (modalText.width / 2);
        modalText.y = game.height / 2 - (modalText.height / 2) - 200;

        // ------------

        var countDownText = game.add.bitmapText(0, 0, 'font', "3", 38);

        //countDownText.inputEnabled = true;
        countDownText.updateText();
        countDownText.x = game.width / 2 - (countDownText.width / 2);
        countDownText.y = game.height / 2 - (countDownText.height / 2) - 100;

        reg.countDownText = countDownText;

        modal.destroy();
        //modalGroup.add(modal);
        modalGroup.add(modalText);
        modalGroup.add(countDownText);

    } else if (type === "info") {

        // -----------
        var modalText = game.add.bitmapText(0, 0, 'font', "Click/TAP the signs \nin the correct order", 32);

        modalText.inputEnabled = true;
        modalText.updateText();
        modalText.x = game.width / 2 - (modalText.width / 2);
        modalText.y = game.height / 2 - (modalText.height / 2);

        var closeX = game.add.bitmapText(0, 0, 'font', 'Got it!', 40);
        closeX.inputEnabled = true;
        closeX.updateText();
        closeX.x = game.width / 2 - (closeX.width / 2);
        closeX.y = game.height - 300;


        closeX.events.onInputDown.add(function () {
            fn();
            hideModal('info');
        }, game);

        modalGroup.add(modal);
        modalGroup.add(closeX);
        //modalGroup.add(modalPanel);
        //modalGroup.add(modalHeader);
        //modalGroup.add(gameLabel2);
        modalGroup.add(modalText);
    }

    modalGroup.visible = false;

    reg.modal[type] = modalGroup;

    if (type === "info") {
        showModal(type);
    }
}