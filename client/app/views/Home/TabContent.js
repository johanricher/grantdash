/**
 * VIEW: HOME Tab Layout (Search header + collection)
 *
 */

var template = require("./templates/tabContent.hbs");

var Search = require("./Search");
var EntityList = require("./EntityList");

module.exports = Backbone.Marionette.LayoutView.extend({

  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  template: template,

  regions: {
    "header": ".header",
    "content": ".content"
  },

  //--------------------------------------
  //+ INHERITED / OVERRIDES
  //--------------------------------------

  onRender: function(){

    if (!this.header.currentView){

      this.header.show(new Search({
        collection: this.collection
      }));

      this.content.show(new EntityList({
        collection: this.collection
      }));
    }

  },

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  //--------------------------------------
  //+ EVENT HANDLERS
  //--------------------------------------

  //--------------------------------------
  //+ PRIVATE AND PROTECTED METHODS
  //--------------------------------------

});