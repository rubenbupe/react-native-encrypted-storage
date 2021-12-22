"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

/* eslint-disable no-dupe-class-members */
const {
  RNEncryptedStorage
} = _reactNative.NativeModules;

if (!RNEncryptedStorage) {
  throw new Error('RNEncryptedStorage is undefined');
}

class EncryptedStorage {
  /**
   * Writes data to the disk, using SharedPreferences or KeyChain, depending on the platform.
   * @param {string} key - A string that will be associated to the value for later retrieval.
   * @param {string} value - The data to store.
   */

  /**
   * Writes data to the disk, using SharedPreferences or KeyChain, depending on the platform.
   * @param {string} key - A string that will be associated to the value for later retrieval.
   * @param {string} value - The data to store.
   * @param {Function} cb - The function to call when the operation completes.
   */
  static setItem(key, value, options, cb) {
    if (cb) {
      RNEncryptedStorage.setItem(key, value, options).then(cb).catch(cb);
      return;
    }

    return RNEncryptedStorage.setItem(key, value, options);
  }
  /**
   * Retrieves data from the disk, using SharedPreferences or KeyChain, depending on the platform and returns it as the specified type.
   * @param {string} key - A string that is associated to a value.
   */


  static getItem(key, options, cb) {
    if (cb) {
      RNEncryptedStorage.getItem(key, options).then(cb).catch(cb);
      return;
    }

    return RNEncryptedStorage.getItem(key, options);
  }
  /**
   * Deletes data from the disk, using SharedPreferences or KeyChain, depending on the platform.
   * @param {string} key - A string that is associated to a value.
   */


  static removeItem(key, options, cb) {
    if (cb) {
      RNEncryptedStorage.removeItem(key, options).then(cb).catch(cb);
      return;
    }

    return RNEncryptedStorage.removeItem(key, options);
  }
  /**
   * Clears all data from disk, using SharedPreferences or KeyChain, depending on the platform.
   */


  static clear(options, cb) {
    if (cb) {
      RNEncryptedStorage.clear(options).then(cb).catch(cb);
      return;
    }

    return RNEncryptedStorage.clear(options);
  }

}

exports.default = EncryptedStorage;
//# sourceMappingURL=EncryptedStorage.js.map