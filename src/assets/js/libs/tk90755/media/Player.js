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
    // this._request;
    // this._total = NaN;
    // this._loaded = NaN;
    // this._percent = NaN;
    // this._request;
    // this._content;
    // this._dispatcher = new EventDispatcher(this);
    // this._callback = callback;
  }

  //__________________________________________________________________________________
  // methods 
  load(){
    
  }

  kill(){

  }

  play(){

  }

  resume(){

  }

  pause(){

  }

  stop(){

  }

  seek(){

  }

  //__________________________________________________________________________________
  // Event Handler
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
  // getter
  get request(){
    return this._request;
  }

  get total(){
    return this._total;
  }

  get loaded(){
    return this._loaded;
  }

  get percent(){
    return this._percent;
  }

  get content(){
    return this._content;
  }

  get dispatcher(){
    return _dispatcher;
  }

  get callback(){
    return _callback;
  }
}
