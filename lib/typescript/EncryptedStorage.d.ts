import { KeychainAccessibility } from './constants';
declare type KeychainAccessibilityKeys = keyof typeof KeychainAccessibility;
export declare type EncryptedStorageOptions = {
    /**
     * **iOS only** - Control item availability relative to the lock state of the device.
     *
     * If the attribute ends with the string `ThisDeviceOnly`, the item can be restored to the same device that created a backup,
     * but it isn’t migrated when restoring another device’s backup data.
     * [Read more](https://developer.apple.com/documentation/security/keychain_services/keychain_items/restricting_keychain_item_accessibility?language=objc)
     *
     * Default value: `kSecAttrAccessibleAfterFirstUnlock`
     */
    keychainAccessibility?: typeof KeychainAccessibility[KeychainAccessibilityKeys];
    /**
     * A string for identifying a set of storage items. Should not contain path separators.
     *
     * Uses [kSecAttrService](https://developer.apple.com/documentation/security/ksecattrservice?language=objc) on iOS
     * and [fileName](https://developer.android.com/reference/kotlin/androidx/security/crypto/EncryptedSharedPreferences?hl=en#create) on Android.
     *
     * Default value: App's bundle id
     */
    storageName?: string;
};
export declare type StorageErrorCallback = (error?: Error) => void;
export declare type StorageValueCallback = (error?: Error, value?: string) => void;
export default class EncryptedStorage {
    /**
     * Writes data to the disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {string} key - A string that will be associated to the value for later retrieval.
     * @param {string} value - The data to store.
     */
    static setItem(key: string, value: string, options?: EncryptedStorageOptions): Promise<void>;
    /**
     * Writes data to the disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {string} key - A string that will be associated to the value for later retrieval.
     * @param {string} value - The data to store.
     * @param {Function} cb - The function to call when the operation completes.
     */
    static setItem(key: string, value: string, options?: EncryptedStorageOptions, cb?: StorageErrorCallback): void;
    /**
     * Retrieves data from the disk, using SharedPreferences or KeyChain, depending on the platform and returns it as the specified type.
     * @param {string} key - A string that is associated to a value.
     */
    static getItem(key: string, options?: EncryptedStorageOptions): Promise<string | null>;
    /**
     * Retrieves data from the disk, using SharedPreferences or KeyChain, depending on the platform and returns it as the specified type.
     * @param {string} key - A string that is associated to a value.
     * @param {Function} cb - The function to call when the operation completes.
     */
    static getItem(key: string, options?: EncryptedStorageOptions, cb?: StorageValueCallback): void;
    /**
     * Deletes data from the disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {string} key - A string that is associated to a value.
     */
    static removeItem(key: string, options?: EncryptedStorageOptions): Promise<void>;
    /**
     * Deletes data from the disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {string} key - A string that is associated to a value.
     * @param {Function} cb - The function to call when the operation completes.
     */
    static removeItem(key: string, options?: EncryptedStorageOptions, cb?: StorageErrorCallback): void;
    /**
     * Clears all data from disk, using SharedPreferences or KeyChain, depending on the platform.
     */
    static clear(options?: EncryptedStorageOptions): Promise<void>;
    /**
     * Clears all data from disk, using SharedPreferences or KeyChain, depending on the platform.
     * @param {Function} cb - The function to call when the operation completes.
     */
    static clear(options?: EncryptedStorageOptions, cb?: StorageErrorCallback): void;
}
export {};
