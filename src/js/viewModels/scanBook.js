/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['knockout', 'services/book-service', 'ojs/ojbootstrap', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext',
    'ojs/ojtable', 'ojs/ojlabelvalue', 'ojs/ojformlayout', 'ojs/ojknockouttemplateutils', 'ojs/ojarraydataprovider', 'book-tile/loader'],
    function (ko, bookService, Bootstrap) {

        function AboutViewModel() {

            var self = this;

            self.clickedButton = function (book) {

                if (book) {
                    let id = book._id;
                    bookService.deleteBook(id);
                    self.scannedBook({ title: null, authors: [], imageLinks: { smallThumbnail: "" } });
                    self.hasBook(false);
                }

            }

            self.hasBook = ko.observable(false);
            self.scannedBook = ko.observable({ title: null, authors: [], imageLinks: { smallThumbnail: "" } }).extend({ 'notify': 'always' });
            self.isbn = ko.observable();

            self.isbn.subscribe(function (isbn) {
                if (isbn.length >= 10) {
                    const regex = /-/gi;

                    isbn = isbn.replace(regex, '');


                    bookService.getBook(isbn).then(item => {
                        self.isbn("");
                        if (item !== null) {
                            self.scannedBook(item);
                            self.hasBook(true);
                        }


                    });
                }
            });

            this.buttonClick = function (event) {
                this.clickedButton(this.scannedBook());
                return true;
            }.bind(this);

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * This method might be called multiple times - after the View is created
             * and inserted into the DOM and after the View is reconnected
             * after being disconnected.
             */
            self.connected = function () {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function () {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after transition to the new View is complete.
             * That includes any possible animation between the old and the new View.
             */
            self.transitionCompleted = function () {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new AboutViewModel();
    }
);
