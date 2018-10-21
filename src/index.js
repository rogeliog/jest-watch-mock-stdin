class MockStdinWatchPlugin {
  constructor({ stdin, config }) {
    this._stdin = stdin;
    if (typeof this._stdin.setRawMode !== 'function') {
      this._stdin.setRawMode = function mockedSetRawMode() {};
    }
    this._config = config;
  }

  apply(jestHooks) {
    jestHooks.onTestRunComplete(() => {
      const { keys } = this._config.input.shift();
      setImmediate(() => {
        keys.forEach(key => this._stdin.emit('data', key));
      });
    });
  }
}

module.exports = MockStdinWatchPlugin;
