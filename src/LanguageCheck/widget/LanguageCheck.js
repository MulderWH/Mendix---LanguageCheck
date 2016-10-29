define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",
    "dijit/registry"

], function (declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, dojoRegistry) {
    "use strict";

    return declare("LanguageCheck.widget.LanguageCheck", [ _WidgetBase ], {


        // Internal variables.
        _handles: null,
        _contextObj: null,

        language: "",

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");

        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._updateRendering(callback);
        },

        resize: function (box) {
          logger.debug(this.id + ".resize");
        },

        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
        },

        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");

            if (this.language !== mx.session.getConfig().uiconfig.locale) {
                mx.session.getConfig().uiconfig.locale = this.language;
                mx.ui.openForm(this.mxform.path, {callback:function(){
                    mx.ui.cleanupProgress = true;
                }, context:this.mxform._context.trackObject});
                mx.ui.hideProgress(0);
            }

            mendix.lang.nullExec(callback);
        }
    });
});

require(["LanguageCheck/widget/LanguageCheck"]);
