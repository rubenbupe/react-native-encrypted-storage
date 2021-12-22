/**
 * Values you use with the `kSecAttrAccessible` attribute key, listed from most to least restrictive.
 */
export declare const KeychainAccessibility: {
    /**
     * The data in the keychain can only be accessed when the device is unlocked. Only available if a passcode is set on the device.
     */
    readonly kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly: "kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly";
    /**
     * The data in the keychain item can be accessed only while the device is unlocked by the user.
     */
    readonly kSecAttrAccessibleWhenUnlockedThisDeviceOnly: "kSecAttrAccessibleWhenUnlockedThisDeviceOnly";
    /**
     * The data in the keychain item can be accessed only while the device is unlocked by the user.
     */
    readonly kSecAttrAccessibleWhenUnlocked: "kSecAttrAccessibleWhenUnlocked";
    /**
     * The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.
     */
    readonly kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly: "kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly";
    /**
     * The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.
     */
    readonly kSecAttrAccessibleAfterFirstUnlock: "kSecAttrAccessibleAfterFirstUnlock";
};
