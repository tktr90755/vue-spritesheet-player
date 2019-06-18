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
//__________________________________________________________________________________
// How to use
/*
let callback = ()=>{
  console.log('_callback kitayo')
  console.log(loader.content)
}
let loader = new SpriteSheetLoader(callback);
loader.load('test.svg')
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
export default class SpriteSheetLoader extends Loader {

  constructor(callback) {
    super(callback);
    this.id = new Date().getTime().toString(16)  + Math.floor(1000 * Math.random()).toString(16);
  }

  //__________________________________________________________________________________
  // methods
  load(jsonPath, imagePath){
    
    this._content = {}

    let xhr = new XMLHttpRequest();

    xhr.open('GET', jsonPath, true);
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
            this._content['json'] = xhr.responseText;
          }else if(xhr0.status === 0){
            this._content['json'] = xhr.responseText;
          }
          this.secondLoad(imagePath);
        }
      }
    };
    xhr.send(null);
  }

  secondLoad(path){
    let xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
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
            this._content['image'] = URL.createObjectURL(xhr.response);
          }else if(xhr0.status === 0){
            this._content['image'] = URL.createObjectURL(xhr.response);
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
