// package metadata file for Meteor.js

Package.describe({
  name: 'Orange-OpenSource:Orange-Boosted-Bootstrap', // https://atmospherejs.com/Orange-OpenSource/Orange-Boosted-Bootstrap
  summary: 'Orange Boosted with Bootstrap is an Orange branded, accessible and ergonomic framework library, based on Bootstrap.',
  version: '4.3.1',
  git: 'https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'dist/css/boosted.css',
    'dist/js/boosted.js'
  ], 'client');
});
