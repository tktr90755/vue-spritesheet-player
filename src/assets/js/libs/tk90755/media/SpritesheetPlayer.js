 /**
 * Copyright 2014, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 * 
 * @title tktr90755.media.SpriteSheetPlayer.js
 * @author 
 * @version 0.1.0 
 * @update 
 * 
 */
//__________________________________________________________________________________
// How to use
/*
let myImage0 = document.getElementById('hello0');
let myImage1 = document.getElementById('hello1');

let spriteSheetPlayer = new SpriteSheetPlayer();
spriteSheetPlayer.dispatcher.addEventListener(Event.INIT, ()=>{
  console.log("Event.INIT")

  myImage1.style.backgroundImage = 'url("/Animal.png")';
  myImage1.style.backgroundRepeat = 'no-repeat';

  var image = new Image();
  image.src = spriteSheetPlayer.image;//使っているスプライトシートはこれ
  image.id = 'my-image';
  this.$el.append(image);

  spriteSheetPlayer.play()
});
spriteSheetPlayer.dispatcher.addEventListener(Event.START, ()=>{
  console.log("Event.START")
});
spriteSheetPlayer.dispatcher.addEventListener(Event.RENDER, ()=>{
  let x = spriteSheetPlayer.x;
  let y = spriteSheetPlayer.y;
  let w = spriteSheetPlayer.width;
  let h = spriteSheetPlayer.height;
  let paddingTop = spriteSheetPlayer.spriteSourceSizeY;
  let marginLeft = spriteSheetPlayer.spriteSourceSizeX;

  myImage1.style.width = w + "px";
  myImage1.style.height = h + "px";
  myImage1.style.backgroundPosition = -x + 'px ' + -y + 'px';
  myImage0.style.paddingTop = paddingTop + 'px'; 
  myImage1.style.marginLeft = marginLeft + 'px';

  console.log("Event.RENDER: x:" + x + " y:" + y + " w:" + w + " h:" + h )
});
spriteSheetPlayer.dispatcher.addEventListener(Event.COMPLETE, ()=>{
  console.log("Event.COMPLETE")
  spriteSheetPlayer.play()
});
spriteSheetPlayer.load('Animal.json', 'Animal.png', false)//第二引数をtrueにすると自動的にplay()する
*/
import SpriteSheetLoader from '@/assets/js/libs/tk90755/net/SpriteSheetLoader.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import Player from '@/assets/js/libs/tk90755/media/Player.js'
export default class SpriteSheetPlayer extends Player {

  constructor() {
    super();
    this._loader = null;
    this._spriteSheet = null;
    this._path = null;
    this._point = null;
    this._frameData = [];
    this._currentFrameData = null;
    this.dispatcher.addEventListener(Event.RENDER, this.renderHandler);
  }

  //__________________________________________________________________________________
  // methods
  load(jsonPath, imagePath, autoPlay){
    let callback=()=>{
      this.createSpriteSheet();
      this.renderInitEvent();
      if(autoPlay !== false) this.play();
    }
    this._jsonPath = jsonPath;
    this._imagePath = imagePath;
    this._loader = new SpriteSheetLoader(callback);
    this._loader.load(jsonPath, imagePath);
  }

  kill(){
    this.dispatcher.removeEventListener(Event.RENDER, this.renderHandler);

    this.stop()
    super.kill()

    this._loader = null;
    this._spriteSheet = null;
    this._path = null;
    this._point = null;
    this._frameData = [];
    this._currentFrameData = null;
  }

  play(){
    super.play()
  }

  resume(){
    super.resume()
  }

  pause(){
    super.pause()
  }

  stop(){
    super.stop()
  }

  seek(seekTime){
    super.seek(seekTime)
  }
  
  //__________________________________________________________________________________
  // svg
  createSpriteSheet(){
    this.speed = 1;

    const json = this.json.frames;

    this._frameData = [];
    for(let i in json){
      this._frameData.push(json[i]);
    }
    this.totalFrames = this._frameData.length;
    this.currentFrame = 0;
  }

  //__________________________________________________________________________________
  // Event Handler
  renderHandler=()=>{
    if(this._frameData.length !== 0){
      let data = this._frameData[parseInt(this.currentFrame)]
      if(data) this._currentFrameData = data;
    }
  }

  //__________________________________________________________________________________
  // getter
  get json(){
    return JSON.parse(this._loader.content['json']);
  }

  get image(){
    return this._loader.content['image'];
  }

  get loader(){
    return this._loader;
  }

  get jsonPath(){
    return this._jsonPath;
  }

  get imagePath(){
    return this._imagePath;
  }

  get spriteSheet(){
    return this._spriteSheet;
  }

  get path(){
    return this._path;
  }

  get point(){
    return this._point;
  }

  get frameData(){
    return this._frameData;
  }

  get currentFrameData(){
    // console.log(this._currentFrameData.frame)
    // console.log(this._currentFrameData.rotated)
    // console.log(this._currentFrameData.trimmed)
    // console.log(this._currentFrameData.spriteSourceSize)
    // console.log(this._currentFrameData.sourceSize)
    return this._currentFrameData;
  }

  get x(){
    return (this._currentFrameData)?this._currentFrameData.frame.x:0;
  }

  get y(){
    return (this._currentFrameData)?this._currentFrameData.frame.y:0;
  }

  get width(){
    return (this._currentFrameData)?this._currentFrameData.frame.w:0;
  }

  get height(){
    return (this._currentFrameData)?this._currentFrameData.frame.h:0;
  }

  get rotated(){
    return (this._currentFrameData)?this._currentFrameData.rotated:0;
  }

  get trimmed(){
    return (this._currentFrameData)?this._currentFrameData.trimmed:false;
  }

  get spriteSourceSizeX(){
    return (this._currentFrameData)?this._currentFrameData.spriteSourceSize.x:0;
  }

  get spriteSourceSizeY(){
    return (this._currentFrameData)?this._currentFrameData.spriteSourceSize.y:0;
  }

  get spriteSourceSizeWidth(){
    return (this._currentFrameData)?this._currentFrameData.spriteSourceSize.w:0;
  }

  get spriteSourceSizeHeight(){
    return (this._currentFrameData)?this._currentFrameData.spriteSourceSize.h:0;
  }

  get sourceSizeWidth(){
    return (this._currentFrameData)?this._currentFrameData.sourceSize.w:0;
  }

  get sourceSizeHeight(){
    return (this._currentFrameData)?this._currentFrameData.sourceSize.h:0;
  }
}
