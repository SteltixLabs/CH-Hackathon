/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./book-tile-view.html', './book-tile-viewModel', 'text!./component.json', 'css!./book-tile-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('book-tile', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);