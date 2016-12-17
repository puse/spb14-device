class Device {
    constructor (...args) {
        this.args = args;
    }

    /**
     * Generate a value
     * @returns {Promise}
     * @public
     */
    derive () {
        let awaitIndex = this.index;

        // no cache
        if (!awaitIndex)
            this.index =
            awaitIndex = this.init(...this.args); // lazy

        let yieldNext = args => {
                let next = val => {
                        if (val instanceof Device)
                            val = val.derive(); //

                        return Promise.resolve(val);
                    };

                return this.next(...args) // spread arguments
                    .then(next);
            };

        return awaitIndex.then(yieldNext);
    }

    /**
     * Get next value
     * @param {...Array} args resolved on init
     * @returns {Promise}
     * @private
     */
    next (...args) {
        return Promise.resolve(...args);
    }

    /**
     * Initialize
     * @param  {...Array} args from constructor
     * @return {Promise<Array>}
     */
    init (...args) {
        // pass arguments as array
        return Promise.resolve(args);
    }

    // Sugar

    get [Symbol.toStringTag] () {
        return this.constructor.name;
    }

    * [Symbol.iterator] () {
        while (true)
            yield this.valueOf();
    }

    valueOf () {
        return this.derive();
    }
}

module.exports = Device;
