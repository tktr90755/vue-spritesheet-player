 /**
 * Copyright 2014, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 * 
 * @title tktr90755.media.SvgPlayer.js
 * @author 
 * @version 0.1.0 
 * @update 
 * 
 */
/**
 * @class SvgPlayer
 */
import SvgLoader from '@/assets/js/libs/tk90755/net/SvgLoader.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import EventDispatcher from '@/assets/js/libs/tk90755/events/EventDispatcher.js'
import Player from '@/assets/js/libs/tk90755/media/Player.js'
export default class SvgPlayer extends Player {

  constructor() {
    super();
    this.svgLoader;
    this.svg;
    this.path;
    this.dispatcher.addEventListener(Event.RENDER, this.renderHandler);
  }

  //__________________________________________________________________________________
  // methods
  load(path){
    let callback=()=>{
      this.createSvg();
    }
    this.svgLoader = new SvgLoader(callback);
    this.svgLoader.load(path);
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
  createSvg(){
    let targets = String(this.svgLoader.content).split('\n');
    let pathTexts = '';
    let i;
    for(i in targets){
      if(pathTexts === '' && String(targets[i].search('<path'))!=-1){
        pathTexts = targets[i];
      }
    }

    if(pathTexts == '') return;

    pathTexts = pathTexts.split('<path ').join('');
    pathTexts = pathTexts.split('/>').join('');
    pathTexts = String(pathTexts).split(' ');

    let o = {};
    for(i in pathTexts){
      let data = String(pathTexts[i]).split('=');
      o[data[0]] = data[1].split('"').join('');
    }

    let xmlns = "http://www.w3.org/2000/svg";
    this.svg = document.createElementNS (xmlns, "svg");
    this.svg.setAttributeNS (null, "version", 1.1);
    this.svg.setAttributeNS (null, "id", "svg" + this.id);
    this.svg.setAttributeNS (null, "x", "0px");
    this.svg.setAttributeNS (null, "y", "0px");
    this.svg.setAttributeNS (null, "viewBox", "0 0 0 0");

    this.path = document.createElementNS(xmlns,"path");  
    this.path.setAttribute("id", "path" + this.id);
    if(o['fill'] !== undefined) this.path.setAttribute("fill", o['fill']);
    if(o['stroke'] !== undefined) this.path.setAttribute("stroke", o['stroke']);  
    if(o['stroke-miterlimit'] !== undefined) this.path.setAttribute("stroke-miterlimit", o['stroke-miterlimit']); 
    if(o['d'] !== undefined) this.path.setAttribute("d", o['d']);

    this.svg.appendChild(this.path);

    this.totalFrames = this.path.getTotalLength();
    this.currentFrame = 0;
  }
  //__________________________________________________________________________________
  // Event Handler
  renderHandler=()=>{
    if(this.currentFrame > this.totalFrames) {
      this.currentFrame = 0;
    }
    var point = this.path.getPointAtLength(this.currentFrame);
    console.log(point.x,point.y);
    this.currentFrame++;
  }
  // loaderInitHandler() {
  //   this._dispatcher.dispatchEvent(new Event(Event.INIT));
  // };

  // loaderProgressHandler() {
  //   this._dispatcher.dispatchEvent(new Event(Event.RENDER));
  // };

  // loaderCompleteHandler() {
  //   if(this._callback !== null || this._callback !== undefined) _callback();
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
  // get request(){
  //   return this._request;
  // }

  // get total(){
  //   return this._total;
  // }

  // get loaded(){
  //   return this._loaded;
  // }

  // get percent(){
  //   return this._percent;
  // }

  // get content(){
  //   return this._content;
  // }

  // get dispatcher(){
  //   return _dispatcher;
  // }

  // get callback(){
  //   return _callback;
  // }
}
