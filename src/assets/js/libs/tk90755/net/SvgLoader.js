 /**
 * Copyright 2014, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 * 
 * @title tktr90755.net.HtmlLoader.js
 * @author 
 * @version 0.1.0 
 * @update 
 * 
 */
/**
 * @class HtmlLoader
 */
if (!window.XMLHttpRequest){
  XMLHttpRequest = function(){
      try{
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      }catch(e){}
      try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      }catch(e){}
      try{
          return new ActiveXObject("Msxml2.XMLHTTP");
      }catch(e){}
      throw new Error("This browser does not support XMLHttpRequest.");
  };
}

import Loader from '@/assets/js/libs/tk90755/net/Loader.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import EventDispatcher from '@/assets/js/libs/tk90755/events/EventDispatcher.js'
export default class SvgLoader extends Loader {

  constructor(callback) {
    super(callback);
    this.id = new Date().getTime().toString(16)  + Math.floor(1000 * Math.random()).toString(16);
  }

  //__________________________________________________________________________________
  // methods
  load(path){
    let xhr = new XMLHttpRequest();
    let result;
    

    xhr.open('GET', path, true);
    xhr.onreadystatechange = ()=>{
      if(xhr.status === 404){
        super.loadIOErrorHandler()
      }else{
        if(xhr.readyState === 0){ }
        else if(xhr.readyState === 1){ 
          super.loaderProgressHandler();
        }
        else if(xhr.readyState === 2){ }
        else if(xhr.readyState === 3){ }
        else if(xhr.readyState === 4){
          if(xhr.status === 200){
            result = document.getElementById('xhr-result1');
            this._content = xhr.responseText;
            this.createSvg()
          }else if(xhr.status === 0){
            result = document.getElementById('xhr-result1');
            this._content = xhr.responseText;
          }
          super.loaderCompleteHandler();
        }
      }
    };
    xhr.send(null);
  }

  // kill(){

  // }

  // cancel(){

  // }

  //__________________________________________________________________________________
  // svg
  createSvg(){
    let targets = String(this._content).split('\n');
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
    let svgElem = document.createElementNS (xmlns, "svg");
    svgElem.setAttributeNS (null, "version", 1.1);
    svgElem.setAttributeNS (null, "id", "レイヤー_1");
    svgElem.setAttributeNS (null, "x", "0px");
    svgElem.setAttributeNS (null, "y", "0px");
    svgElem.setAttributeNS (null, "viewBox", "0 0 0 0");

    let newpath = document.createElementNS(xmlns,"path");  
    newpath.setAttribute("id", "pathIdD");
    if(o['fill'] !== undefined) newpath.setAttribute("fill", o['fill']);
    if(o['stroke'] !== undefined) newpath.setAttribute("stroke", o['stroke']);  
    if(o['stroke-miterlimit'] !== undefined) newpath.setAttribute("stroke-miterlimit", o['stroke-miterlimit']); 
    if(o['d'] !== undefined) newpath.setAttribute("d", o['d']);

    svgElem.appendChild(newpath);

    let path = newpath;
    let pathLength = path.getTotalLength();
    let nowPos = 0;
    
    function anime() {
      if(nowPos > pathLength) {
        nowPos = 0;
      }
      var point = path.getPointAtLength(nowPos);
      console.log(point.x,point.y);
      nowPos++;
      setTimeout(function() { anime(); }, 1000/120);
    }
    anime()
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
