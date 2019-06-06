 /**
 * Copyright 2014, "tktr90755" All rights reserved.
 * Proprietary and Confidential
 * Do not redistribute
 * 
 * @title tktr90755.net.Loader.js
 * @author 
 * @version 0.1.0 
 * @update 
 * 
 */
/**
 * @class Base
 */
export default class Loader {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  constructor(name) {
    // props
    this.name = name;

		this.LOAD_START = "loadStart";
		this.LAODING = "loading";
		this.LOAD_COMPLETE = "loadComplete";
  }

  /**
   * setup
   * @return {[type]} [description]
   */
  setup() {
    console.log('super : ' + this.name);
  }

  /**
   * update
   * @return {[type]} [description]
   */
  update() {
  }
}
