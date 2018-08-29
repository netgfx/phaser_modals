
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
            var backgroundOpacity = options.backgroundOpacity === undefined ? 0.7 : options.backgroundOpacity;
            var modalCloseOnInput = options.modalCloseOnInput || false;
            var modalBackgroundCallback = options.modalBackgroundCallback || false;
            var vCenter = options.vCenter || true;
            var hCenter = options.hCenter || true;
            var itemsArr = options.itemsArr || [];
            var fixedToCamera = options.fixedToCamera || false;
            /*var vPadding = options.vPadding || 20;*/

            /////////////////////////////////////////////////////////////////////

            var modal;
            var modalGroup = game.add.group();
            if (fixedToCamera === true) {
                modalGroup.fixedToCamera = true;
                modalGroup.cameraOffset.x = 0;
                modalGroup.cameraOffset.y = 0;
            }

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
                        this.hideModal(e.type);
                    }, _this, 2);

                    modalGroup.add(innerModal);
                } else {

                    modalBackgroundCallback = true;
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

            if (modalBackgroundCallback) {
                var innerModal = game.add.sprite(0, 0);
                innerModal.inputEnabled = true;
                innerModal.width = game.width;
                innerModal.height = game.height;
                innerModal.type = type;
                innerModal.input.priorityID = 0;

                modalGroup.add(innerModal);
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
                var atlasParent = item.atlasParent || "";
                var buttonHover = item.buttonHover || content;
                var buttonActive = item.buttonActive || content;
                var graphicColor = item.graphicColor || 0xffffff;
                var graphicOpacity = item.graphicOpacity || 1;
                var graphicW = item.graphicWidth || 200;
                var graphicH = item.graphicHeight || 200;
                var graphicD = item.graphicDiameter || 200;
                var graphicType = item.graphicType || "rectangle";
                var lockPosition = item.lockPosition || false;
                var hoverCallback = item.hoverCallback || null;
                var hoverOutCallback = item.hoverOutCallback || null;
                var visible = (item.visible == undefined) ? true : item.visible;

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
                else if (itemType === "sprite") {
                    modalLabel = game.add.sprite(0, 0, atlasParent, content);
                    modalLabel.scale.setTo(contentScale, contentScale);
                    modalLabel.contentType = 'sprite';
                    modalLabel.x = (centerX - ((modalLabel.width) / 2)) + offsetX;
                    modalLabel.y = (centerY - ((modalLabel.height) / 2)) + offsetY;
                }
                else if(itemType === "button") {
                    modalLabel = game.add.button(0, 0, atlasParent, callback, this, buttonHover, content, buttonActive, content);
                    modalLabel.scale.setTo(contentScale, contentScale);
                    modalLabel.contentType = 'button';
                    modalLabel.x = (centerX - ((modalLabel.width) / 2)) + offsetX;
                    modalLabel.y = (centerY - ((modalLabel.height) / 2)) + offsetY;

                    if(hoverCallback != null) {
                      modalLabel.onInputOver.add(hoverCallback, this);
                    }
                    if(hoverOutCallback != null) {
                      modalLabel.onInputOut.add(hoverOutCallback, this);
                    }
                }
                else if(itemType === "graphics") {
                    modalLabel = game.add.graphics(0, 0);
                    modalLabel.beginFill(graphicColor, graphicOpacity);

                    switch(graphicType) {

                      case "circle": {
                          modalLabel.drawCircle((centerX - (graphicD / 2)) + offsetX, (centerY - (graphicD / 2)) + offsetY, graphicD);
                        } break;

                      case "rectangle":
                      default: modalLabel.drawRect((centerX - (graphicW / 2)) + offsetX, (centerY - (graphicH / 2)) + offsetY, graphicW, graphicH);
                    }

                    modalLabel.endFill();
                }

                modalLabel["_offsetX"] = 0;
                modalLabel["_offsetY"] = 0;
                modalLabel["lockPosition"] = lockPosition;
                modalLabel._offsetX = offsetX;
                modalLabel._offsetY = offsetY;
                modalLabel.visible = visible;


                if (callback !== false && itemType !== "button") {
                    modalLabel.inputEnabled = true;
                    modalLabel.pixelPerfectClick = true;
                    modalLabel.priorityID = 10;
                    modalLabel.events.onInputDown.add(callback, modalLabel);
                }

                if (itemType !== "bitmapText" && itemType !== "graphics") {
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
                if (item.lockPosition === true){

                }
                else {
                    item.x = ((game.width / 2) - (item.width / 2)) + item._offsetX;
                    item.y = ((game.height / 2) - (item.height / 2)) + item._offsetY;
                }
            } else if (item.contentType === "bitmapText") {
                item.text = value;
                item.updateText();
                if(item.lockPosition === true) {

                }
                else {
                    item.x = ((game.width / 2) - (item.width / 2)) + item._offsetX;
                    item.y = ((game.height / 2) - (item.height / 2)) + item._offsetY;
                }
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
