/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
  ['knockout', 'ojL10n!./resources/nls/book-tile-strings', 'ojs/ojcontext', 'ojs/ojbootstrap', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojknockout',  'ojs/ojbutton'], 
  function (ko, componentStrings, Context, Bootstrap, responsiveUtils, responsiveKnockoutUtils) {
    function BookTileComponentModel(context) {
      var self = this;
      // self.deleteEvent = document.createEvent('Event');
      // self.deleteEvent.initEvent('delete', true, true);

      context.props.then(function (properties) {

        if (properties.book) {
          self.updateBook(properties.book);
        }

        
      });

      self.title = ko.observable("No Title");
      self.authors = ko.observableArray([]);
      self.smallThumbnail = ko.observable("");
      self.categories = ko.observable([]);
      self.bookId = ko.observable("");

      this.itemValues = ko.observableArray([
        { id: 'Loan', icons: { start: 'demo-icon-font demo-library-icon-24' } }
      ]);
      
     var busyContext = Context.getContext(context.element).getBusyContext();
      var options = { "description": "Web Component Startup - Waiting for data" };
      self.busyResolve = busyContext.addBusyState(options);
      self.composite = context.element;

      //Example observable

      // this.deleteBook = function (event) {
      //   event.currentTarget.parentElement.parentElement.dispatchEvent(this.deleteEvent);
      //   return true;
      // }.bind(this);

      self.properties = context.properties;
      self.res = componentStrings['book-tile'];
      self.busyResolve();


    };

    BookTileComponentModel.prototype.updateBook = function(book) {
      this.bookId (book._id);
      this.title(book.title);
      this.smallThumbnail(book.imageLinks.smallThumbnail);
      this.authors(book.authors);
      if (book.categories)
      this.categories(book.categories);
    }

    //Lifecycle methods - uncomment and implement if necessary 
    BookTileComponentModel.prototype.activated = function (context) {
      // console.log(context);
    };

    BookTileComponentModel.prototype.connected = function (context) {

    };

    BookTileComponentModel.prototype.bindingsApplied = function (context) {

    };

    //ExampleComponentModel.prototype.disconnect = function(context){
    //};

    BookTileComponentModel.prototype.propertyChanged = function (context) {

      if (context.property == "book") {
        //   // this.book(context.value);
        //  this.book = context.value;
        this.updateBook(context.value);
      }
    };

    return BookTileComponentModel;
  });