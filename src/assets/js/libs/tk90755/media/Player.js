// import Base from './Base';

 /**
 * Copyright 2014, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 * 
 * @title tktr90755.media.Player.js
 * @author 
 * @version 0.1.0 
 * @update 
 * 
 */
/**
 * @class Player
 */
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import EventDispatcher from '@/assets/js/libs/tk90755/events/EventDispatcher.js'
import Ticker from '@/assets/js/libs/tk90755/display/Ticker.js'
export default class Player {

  constructor() {
    this._id = new Date().getTime().toString(16)  + Math.floor(1000000 * Math.random()).toString(16);
    this._totalFrames = NaN;
    this._currentFrame = 0;
    this._percent = 0;
    this._dispatcher = new EventDispatcher(this);
  }

  //__________________________________________________________________________________
  // methods 
  load(){
    
  }

  kill(){

  }

  play(){
    Ticker.add(this._render, 'play_' + this._id)
    this._currentFrame = 0;
    this.setPercent();
  }

  resume(){
    Ticker.add(this._render, 'play_' + this._id)
  }

  pause(){
    Ticker.kill('play_' + this._id)
  }

  stop(){
    Ticker.kill('play_' + this._id)
    this._currentFrame = 0;
    this.setPercent();
  }

  seek(seekTime){
    this._currentFrame = seekTime;
    this.setPercent();
  }

  _render=()=>{
    if(
       isNaN(this._totalFrames) === true ||
       isNaN(this._currentFrame) === true ||
       isNaN(this._percent) === true
      ){
      
    }else if(this._percent >= 1){
      Ticker.kill('play_' + this._id)
      this._percent = 1;
      this._currentFrame = this._totalFrames;
    }else{
      this.setPercent();
      this.renderEvent();
    }
  }

  setPercent(){
    if( isNaN(this._totalFrames) === false && isNaN(this._currentFrame) === false ){
      this._percent = this._currentFrame / this._totalFrames;
    }
  }

  //__________________________________________________________________________________
  // Event Handler
  renderEvent() {
    this._dispatcher.dispatchEvent(new Event(Event.RENDER));
  };

  // loaderInitHandler() {
  //   this._dispatcher.dispatchEvent(new Event(Event.INIT));
  // };

  // loaderProgressHandler() {
  //   this._dispatcher.dispatchEvent(new Event(Event.RENDER));
  // };

  // loaderCompleteHandler() {
  //   if(this._callback !== undefined) this._callback();
  //   this._dispatcher.dispatchEvent(new Event(Event.COMPLETE));
  // };

  // loadIOErrorHandler() {
  //   this._dispatcher.dispatchEvent(new Event(Event.IO_ERROR));
  // };

  // loadSecurityHandler() {
  //   this._dispatcher.dispatchEvent(new Event(Event.SECURITY_ERROR));
  // };

  //__________________________________________________________________________________
  // getter / setter
  get id(){
    return this._id;
  }

  get totalFrames(){
    return this._totalFrames;
  }
  set totalFrames(value){
    this._totalFrames = value;
    this.setPercent();
  }

  get currentFrame(){
    return this._currentFrame;
  }
  set currentFrame(value){
    this._currentFrame = value;
    this.setPercent();
  }

  get percent(){
    return this._percent;
  }
  set percent(value){
    this._percent = value;
  }

  get content(){
    return this._content;
  }

  get dispatcher(){
    return this._dispatcher;
  }
}
