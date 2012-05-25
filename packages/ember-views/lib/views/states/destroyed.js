// ==========================================================================
// Project:   Ember - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('ember-views/views/states/default');
var destroyedError = "You can't call %@ on a destroyed view", fmt = Ember.String.fmt;

/** @private */
Ember.View.states.DestroyedState = Ember.State.extend({
    appendChild: function() {
      throw fmt(destroyedError, ['appendChild']);
    },
    rerender: function() {
      throw fmt(destroyedError, ['rerender']);
    },
    destroyElement: function() {
      throw fmt(destroyedError, ['destroyElement']);
    },
    empty: function() {
      throw fmt(destroyedError, ['empty']);
    },
  
    setElement: function() {
      throw fmt(destroyedError, ["set('element', ...)"]);
    },
  
    // Since element insertion is scheduled, don't do anything if
    // the view has been destroyed between scheduling and execution
    insertElement: Ember.K
});