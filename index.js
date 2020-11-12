/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-tinymce',
  contentFor: function(type, config) {
    var content = '';

    if (type === 'head-footer' && config['tinyMCE'] && config['tinyMCE']['load']) {
      // var src = "https://cdn.tiny.cloud/1/cjdxme930fb7znk6l7qzlymh7mtqudc70nv6rf5mpwv3fwsh/tinymce/5/tinymce.min.js";
      // var sriHash = config['tinyMCE']['sriHash'];
      content = '<script src="https://cdn.tiny.cloud/1/cjdxme930fb7znk6l7qzlymh7mtqudc70nv6rf5mpwv3fwsh/tinymce/5/tinymce.min.js" crossorigin="anonymous" referrerpolicy="origin"></script>';
    }
    return content;
  },
  included: function(app) {
    app.import('app/styles/addons.css');
  }
};
