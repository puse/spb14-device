# Device

Random device

### Example

~~~js
const Device = require('spb14-device');

const random = n => Math.floor(Math.random() * n);

class RandomNatural extends Device {
    next (n) {
        return super.next(random(n));
    }

    init (n) {
        return super.init(n);
    }
}

let die = new RandomNatural(10);

die.get().then(console.log); // '6'
~~~


## Install

~~~sh
npm install spb14-device
~~~

## API

- `.derive()`

### License

MIT License
