# react-native-encrypted-storage

This is a fork of https://github.com/emeraldsanto/react-native-encrypted-storage/tree/4.0.2.

## What was changed

### Storage options

You can pass a set of **options** as the previous to last parameter of `setItem`, `getItem`, `removeItem` or `clear` functions:

```js
await EncryptedStorage.removeItem('user_session', {
  storageName: 'userStorage',
});
```

The following options are supported:

- `keychainAccessibility` (**iOS only**)

  Control item availability relative to the lock state of the device. If the attribute ends with the string `ThisDeviceOnly`, the item can be restored to the same device that created a backup, but it isn’t migrated when restoring another device’s backup data. [Read more](https://developer.apple.com/documentation/security/keychain_services/keychain_items/restricting_keychain_item_accessibility?language=objc)

  Default value: `kSecAttrAccessibleAfterFirstUnlock`

- `storageName`

  A string for identifying a set of storage items. Should not contain path separators. Uses [kSecAttrService](https://developer.apple.com/documentation/security/ksecattrservice?language=objc) on iOS and [fileName](https://developer.android.com/reference/kotlin/androidx/security/crypto/EncryptedSharedPreferences?hl=en#create) on Android.

  Default value: App's bundle id

## Collaboration instructions

### Release a new version

1. Bump version in `package.json`
1. Push to `main` branch
1. [ci workflow](.github/workflows/ci.yml) runs
1. A `tag` with the new version is added

### Storage options

You can pass a set of **options** as the previous to last parameter of `setItem`, `getItem`, `removeItem` or `clear` functions:

```js
await EncryptedStorage.removeItem('user_session', {
  storageName: 'userStorage',
});
```

The following options are supported:

- `keychainAccessibility` (**iOS only**)

  Control item availability relative to the lock state of the device. If the attribute ends with the string `ThisDeviceOnly`, the item can be restored to the same device that created a backup, but it isn’t migrated when restoring another device’s backup data. [Read more](https://developer.apple.com/documentation/security/keychain_services/keychain_items/restricting_keychain_item_accessibility?language=objc)

  Default value: `kSecAttrAccessibleAfterFirstUnlock`

- `storageName`

  A string for identifying a set of storage items. Should not contain path separators. Uses [kSecAttrService](https://developer.apple.com/documentation/security/ksecattrservice?language=objc) on iOS and [fileName](https://developer.android.com/reference/kotlin/androidx/security/crypto/EncryptedSharedPreferences?hl=en#create) on Android.

  Default value: App's bundle id

## Note regarding `Keychain` persistence

You'll notice that the iOS `Keychain` is not cleared when your app is uninstalled, this is the expected behaviour. However, if you do want to achieve a different behaviour, you can use the below snippet to clear the `Keychain` on the first launch of your app.

```objc
// AppDelegate.m

/**
 Deletes all Keychain items accessible by this app if this is the first time the user launches the app
 */
static void ClearKeychainIfNecessary() {
    // Checks wether or not this is the first time the app is run
    if ([[NSUserDefaults standardUserDefaults] boolForKey:@"HAS_RUN_BEFORE"] == NO) {
        // Set the appropriate value so we don't clear next time the app is launched
        [[NSUserDefaults standardUserDefaults] setBool:YES forKey:@"HAS_RUN_BEFORE"];

        NSArray *secItemClasses = @[
            (__bridge id)kSecClassGenericPassword,
            (__bridge id)kSecClassInternetPassword,
            (__bridge id)kSecClassCertificate,
            (__bridge id)kSecClassKey,
            (__bridge id)kSecClassIdentity
        ];

        // Maps through all Keychain classes and deletes all items that match
        for (id secItemClass in secItemClasses) {
            NSDictionary *spec = @{(__bridge id)kSecClass: secItemClass};
            SecItemDelete((__bridge CFDictionaryRef)spec);
        }
    }
}

```json
{
  "dependencies": {
    "react-native-encrypted-storage": "https://github.com/amsterdam-platform-creation/react-native-encrypted-storage.git#v4.1.2"
  }
}
```

> Note: The `lib/` directory contains the compiled library (results from running `yarn build`) and should not be changed directly.
