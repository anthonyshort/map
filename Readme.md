
# map

  Simple map, similar to ES6 map. Set and get values but it allows anything to be the key.

## Installation

    $ component install anthonyshort/map

## API

    var data = new Map();

    // Use a DOM element as a key
    var el = document.querySelector('#task-list');
    data.set(el, { 
      'model': 'task', 
      'height': 200 
    });

    console.log(data.get(el).height); // 200

    // Or use as a simple key/value store
    data.set('foo', 'bar');

    // Iterate over them
    data.forEach(function(value, key){

    });

    // Set initial data
    var moreData = new Map(['key', 'value'], ['key2', 'value']);
    console.log(moreData.get('key')); // 'value'

## License

  MIT
