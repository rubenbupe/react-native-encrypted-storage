"use strict";

var _reactNative = require("react-native");

var _EncryptedStorage = _interopRequireDefault(require("./EncryptedStorage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  RNEncryptedStorage
} = _reactNative.NativeModules;
describe('lib/EncryptedStorage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('using Promises', () => {
    describe('setItem(key, value)', () => {
      it('should return no errors if it could store the value', () => {
        return expect(_EncryptedStorage.default.setItem('key', 'value')).resolves.toBeUndefined();
      });
      it('should reject with an error if it could not store the value', () => {
        RNEncryptedStorage.setItem.mockImplementationOnce(() => Promise.reject(new Error('Set error')));
        return expect(_EncryptedStorage.default.setItem('key', 'value')).rejects.toThrow('Set error');
      });
    });
    describe('getItem(key)', () => {
      it('should return the value if it could be retrieved succesfully', () => {
        return expect(_EncryptedStorage.default.getItem('key')).resolves.toEqual('{ "foo": 1 }');
      });
      it('should return null if no value was found for that key', () => {
        RNEncryptedStorage.getItem.mockImplementationOnce(() => Promise.resolve(undefined));
        return expect(_EncryptedStorage.default.getItem('key')).resolves.toBeUndefined();
      });
      it('should reject with an error if it could not retrieve the value', () => {
        RNEncryptedStorage.getItem.mockImplementationOnce(() => Promise.reject(new Error('Get error')));
        return expect(_EncryptedStorage.default.getItem('key')).rejects.toThrow('Get error');
      });
    });
    describe('removeItem(key)', () => {
      it('should return no error if it could removed the stored value', () => {
        return expect(_EncryptedStorage.default.removeItem('key')).resolves.toBeUndefined();
      });
      it('should throw an error if it could not retrieve the stored value', () => {
        RNEncryptedStorage.removeItem.mockImplementationOnce(() => Promise.reject(new Error('Remove error')));
        return expect(_EncryptedStorage.default.removeItem('key')).rejects.toThrow('Remove error');
      });
    });
    describe('clear()', () => {
      it('should return no error if it could clear the storage', () => {
        return expect(_EncryptedStorage.default.clear()).resolves.toBeUndefined();
      });
      it('should throw an error if it could not clear the storage', () => {
        RNEncryptedStorage.clear.mockImplementationOnce(() => Promise.reject(new Error('Clear error')));
        return expect(_EncryptedStorage.default.clear()).rejects.toThrow('Clear error');
      });
    });
  });
  describe('using callbacks', () => {
    const options = {};
    describe('setItem(key, value)', () => {
      it('should return no errors if it could store the value', () => {
        _EncryptedStorage.default.setItem('key', 'value', options, error => {
          expect(error).toBeUndefined();
        });
      });
      it('should reject with an error if it could not store the value', () => {
        RNEncryptedStorage.setItem.mockImplementationOnce(() => Promise.reject(new Error('Set error')));

        _EncryptedStorage.default.setItem('key', 'value', options, error => {
          expect(error === null || error === void 0 ? void 0 : error.message).toEqual('Set error');
        });
      });
    });
    describe('getItem(key)', () => {
      it('should return the value if it could be retrieved succesfully', () => {
        _EncryptedStorage.default.getItem('key', options, (error, value) => {
          expect(error).toBeUndefined();
          expect(value).toEqual('{ "foo": 1 }');
        });
      });
      it('should return null if no value was found for that key', () => {
        RNEncryptedStorage.getItem.mockImplementationOnce(() => Promise.resolve(undefined));

        _EncryptedStorage.default.getItem('key', options, (error, value) => {
          expect(error).toBeUndefined();
          expect(value).toBeUndefined();
        });
      });
      it('should reject with an error if it could not retrieve the value', () => {
        RNEncryptedStorage.getItem.mockImplementationOnce(() => Promise.reject(new Error('Get error')));

        _EncryptedStorage.default.getItem('key', options, (error, value) => {
          expect(error === null || error === void 0 ? void 0 : error.message).toEqual('Get error');
          expect(value).toBeUndefined();
        });
      });
    });
    describe('removeItem(key)', () => {
      it('should return no error if it could remove the stored value', () => {
        _EncryptedStorage.default.removeItem('key', options, error => {
          expect(error).toBeUndefined();
        });
      });
      it('should throw an error if it could not retrieve the stored value', () => {
        RNEncryptedStorage.removeItem.mockImplementationOnce(() => Promise.reject(new Error('Remove error')));

        _EncryptedStorage.default.removeItem('key', options, error => {
          expect(error === null || error === void 0 ? void 0 : error.message).toEqual('Remove error');
        });
      });
    });
    describe('clear()', () => {
      it('should return no error if it could clear the storage', () => {
        _EncryptedStorage.default.clear(options, error => {
          expect(error).toBeUndefined();
        });
      });
      it('should throw an error if it could not clear the storage', () => {
        RNEncryptedStorage.clear.mockImplementationOnce(() => Promise.reject(new Error('Clear error')));

        _EncryptedStorage.default.clear(options, error => {
          expect(error === null || error === void 0 ? void 0 : error.message).toEqual('Clear error');
        });
      });
    });
  });
});
//# sourceMappingURL=EncryptedStorage.test.js.map