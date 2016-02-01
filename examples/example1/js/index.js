// This example uses the Phaser 2.2.2 framework

// Copyright © 2015 Michael Dobekidis
// Licensed under the terms of the MIT License
var reg = {};
var GameState = function(game) {
};

// Load images and sounds
GameState.prototype.preload = function() {
    this.load.image("bg","http://i221.photobucket.com/albums/dd22/djmid71/Untitled-1_zpswmvh3qea.jpg");
    this.load.image("m1", "http://i221.photobucket.com/albums/dd22/djmid71/M1_zpsdprlkpno.png");
    this.load.image("m2", "http://i221.photobucket.com/albums/dd22/djmid71/M2_zpsefls9w86.png");
    this.load.image("m3", "http://i221.photobucket.com/albums/dd22/djmid71/m3_zpszzqyjbpa.png");
    this.load.image("m4", "http://i221.photobucket.com/albums/dd22/djmid71/m4_zps5tnlccp0.png");
    this.load.image("m5", "http://i221.photobucket.com/albums/dd22/djmid71/m5_zpsdpz0cohz.png");
    this.load.image("m6", "http://i221.photobucket.com/albums/dd22/djmid71/m6_zpsvfvskl1d.png");	  this.load.image("gameover","http://i221.photobucket.com/albums/dd22/djmid71/gameover_zpse663rlsp.png");
  this.load.image("tryagain", "http://i221.photobucket.com/albums/dd22/djmid71/tryagain_zpszyvxhs8m.png");
  this.load.image("yes","http://i221.photobucket.com/albums/dd22/djmid71/yes_zpsfppqya7h.png");
  this.load.image("no","http://i221.photobucket.com/albums/dd22/djmid71/no_zpsnjisaare.png");
  this.load.image("twitter","http://i221.photobucket.com/albums/dd22/djmid71/twitter_zpsyadnfz48.png");
  this.load.image("facebook","http://i221.photobucket.com/albums/dd22/djmid71/facebook_zpsxiqll8e0.png");
 this.load.image("clear", "http://i221.photobucket.com/albums/dd22/djmid71/clear_zpspuy7nqhg.png");
  this.load.image("star", "http://i221.photobucket.com/albums/dd22/djmid71/star_zpseh4eqpzn.png");
  this.load.image("modalBG","http://i221.photobucket.com/albums/dd22/djmid71/modalBG_zpsgvwlxhmv.png");
};

// Setup the example
GameState.prototype.create = function() {
    // initiate the modal class
  	reg.modal = new gameModal(game);
    createModals();
    // Set stage background to something sky colored
    this.game.stage.backgroundColor = 0x4488cc;
  	this.game.add.tileSprite(0, -160, 960, 649, "bg");
  	var m1 = this.game.add.button(100, 80, "m1", showModal1);
  var m2 = this.game.add.button(m1.width+m1.x+100, 80, "m2", showModal2);
  var m3 = this.game.add.button(m2.width+m2.x+100, 80, "m3", showModal3);
  var m4 = this.game.add.button(100, m1.height+m1.y+100, "m4", showModal4);
  var m5 = this.game.add.button(m4.width+m4.x+100, m1.height+m1.y+100, "m5", showModal5);
  var m6 = this.game.add.button(m5.width+m5.x+100,m1.height+m1.y+100, "m6", showModal6);

};

// The update() method is called every frame
GameState.prototype.update = function() {

};

function createModals() {
  // reg.modal.createModal({
  //           type:"modal1",
  //           includeBackground: true,
  //           modalCloseOnInput: true,
  //           itemsArr: [
  //               {
  //                   type: "text",
  //                   content: "Simple Text with Modal background, \n nothing fancy here...",
  //                   fontFamily: "Luckiest Guy",
  //                   fontSize: 42,
  //                   color: "0xFEFF49",
  //                   offsetY: -50
  //               }
  //           ]
  //       });
  reg.modal.createModal({
            type:"modal1",
            includeBackground: true,
            modalCloseOnInput: true,
            itemsArr: [
                {
                    type: "graphics",
                    graphicColor: "0xffffff",
                    graphicWidth: 300,
                    graphicHeight: 600
                },
                {
                    type: "text",
                    content: "The white behind me\nis a [Phaser.Graphic]",
                    fontFamily: "Luckiest Guy",
                    fontSize: 22,
                    color: "0x1e1e1e",
                    offsetY: -50
                },
            ]
        });

  //////// modal 2 ////////////
  reg.modal.createModal({
            type:"modal2",
            includeBackground: true,
            modalCloseOnInput: true,
            itemsArr: [
                {
                    type: "text",
                    content: "Seriously???",
                    fontFamily: "Luckiest Guy",
                    fontSize: 42,
                    color: "0xFEFF49",
                    offsetY: 50
                },
              {
                    type: "image",
                    content: "gameover",
                    offsetY: -50,
                    contentScale: 0.6
                }
            ]
        });
  ///////// modal 3 //////////
   reg.modal.createModal({
            type:"modal3",
            includeBackground: true,
            modalCloseOnInput: true,
  itemsArr: [
                {
                    type: "image",
                    content: "gameover",
                    offsetY: -110,
                    contentScale: 0.6
            },
                {
                    type: "image",
                    content: "tryagain",
                    contentScale: 0.6
            },
                {
                    type: "image",
                    content: "yes",
                    offsetY: 100,
                    offsetX: -80,
                    contentScale: 0.6,
                    callback: function () {
                        alert("YES!");
                    }
            },
                {
                    type: "image",
                    content: "no",
                    offsetY: 100,
                    offsetX: 80,
                    contentScale: 0.6,
                    callback: function () {
                        alert("NO!");
                    }
            }
            ]
   });
  //////// modal 4 //////////
  reg.modal.createModal({
            type:"modal4",
            includeBackground: true,
            modalCloseOnInput: true,
  itemsArr: [
    					{
                type: "text",
                    content: "Share the awesomeness!",
                    fontFamily: "Luckiest Guy",
                    fontSize: 42,
                    color: "0xfb387c",
                    offsetY: -80
              },
              {
                    type: "image",
                    content: "twitter",
                    offsetY: 20,
                    offsetX: 80,
                    contentScale: 0.8,
                    callback: function(){
                       window.open("https://twitter.com/intent/tweet?text=Cool%20modals%20%40%20http%3A%2F%2Fcodepen.io%2Fnetgfx%2Fpen%2FbNLgaX", 'twitter');
                    }
            },
                {
                    type: "image",
                    content: "facebook",
                    offsetY: 20,
                    offsetX: -80,
                    contentScale: 0.8,
                    callback: function () {
                        window.open("http://www.facebook.com/sharer.php?u=Cool%20modals%20%40%20http%3A%2F%2Fcodepen.io%2Fnetgfx%2Fpen%2FbNLgaX")
                    }
            }
            ]
   });
  /////// modal 5 //////////
  reg.modal.createModal({
            type:"modal5",
            includeBackground: false,
            modalCloseOnInput: true,
  itemsArr: [
                {
                    type: "image",
                    content: "modalBG",
                    offsetY: -20,
                    contentScale: 1
            },
                {
                    type: "image",
                    content: "clear",
                    contentScale: 0.5,
                    offsetY: -80
            },
                {
                    type: "image",
                    content: "star",
                    offsetY: 80,
                    offsetX: -100,
                    contentScale: 0.6
            },
    					{
                    type: "image",
                    content: "star",
                    offsetY: 50,
                    offsetX: 0,
                		contentScale: 0.6
            },
    					{
                    type: "image",
                    content: "star",
                    offsetY: 80,
                    offsetX: 100,
                		contentScale: 0.6
            },
            {
              			type : "text",
              			content: "X",
                    fontSize: 52,
              			color: "0x000000",
              			offsetY: -130,
                    offsetX: 240,
              			callback: function(){
                      reg.modal.hideModal("modal5");
                    }
            }

            ]
   });
  ////// modal 6 //////////

  reg.modal.createModal({
            type: "modal6",
            includeBackground: true,
            backgroundColor: "0xffffff",
    				backgroundOpacity: 0.8,
            itemsArr: [
                {
                    type: "text",
                    content: "Starting \nNext Level",
                    fontFamily: "Luckiest Guy",
                    fontSize: 52,
                    offsetY: -100
                },
                {
                    type: "text",
                    content: "5",
                    fontFamily: "Luckiest Guy",
                    fontSize: 42,
                    offsetY: 0
                }
            ]
        });
}

function showModal1(){
  reg.modal.showModal("modal1");
}
function showModal2(){
 reg.modal.showModal("modal2");
}
function showModal3() {
  reg.modal.showModal("modal3");
}
function showModal4() {
  reg.modal.showModal("modal4");
}
function showModal5() {
  reg.modal.showModal("modal5");
}
function showModal6() {
  reg.modal.showModal("modal6");
  countDown(updateCountdown, function () {
       reg.modal.hideModal("modal6");

  });
}

function countDown(fn, endFn) {
    var endFn = endFn || function(){};

    var _timer = game.time.create(false);
    _timer.start();
    _timer.onComplete.add(endFn);
    _timer.repeat(Phaser.Timer.SECOND, 5, fn, this);
    window.console.log("adding timer", game);
}

function updateCountdown() {
    var item = reg.modal.getModalItem("modal6", 2);
    var index = Number(item.text);

    window.console.log("index: ", index, item);

    item.setText(String(index - 1));
    item.update();
    item.x = game.width / 2 - (item.width / 2);
    item.y = game.height / 2 - (item.height / 2);
}

var game = new Phaser.Game(960, 480, Phaser.CANVAS, 'game');
game.state.add('game', GameState, true);
