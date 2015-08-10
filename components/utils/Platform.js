import os from 'os';

let platform = os.platform();
platform = platform.indexOf('win') === 0 ? 'win'
         : platform.indexOf('darwin') === 0 ? 'osx'
         : 'linux';

module.exports = {
  isOSX: platform === 'osx',
  isWindows: platform === 'win',
  isLinux: platform === 'linux',
  arch: os.arch()
};
