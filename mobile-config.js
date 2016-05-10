App.info({
    id: 'com.cityforks.prod',
    name: 'CityForks',
    description: 'Mobile app for TTi',
    author: 'Josh Owens',
    email: 'joshua.owens@gmail.com',
    website: 'https://eatwithcityforks.co',
    version: '1.0.0'
});

App.icons({
  // iOS
  'iphone': 'resources/ios/Icon-60.png',
  'iphone_2x': 'resources/ios/Icon-60@2x.png',
  'iphone_3x': 'resources/ios/Icon-60@3x.png',
  'ipad': 'resources/ios/Icon-76.png',
  'ipad_2x': 'resources/ios/Icon-76@2x.png'
});

// App.preference({'Orientation': 'portrait'});
App.accessRule('https://eatwithcityforks.co/*');
