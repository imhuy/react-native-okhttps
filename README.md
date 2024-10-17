# React Native Module for Custom OkHttpClient

This module provides a custom OkHttpClient implementation for React Native apps, allowing you to easily add SSL pinning and other custom network configurations to your Android app.

## How does it work?

This module creates a custom OkHttpClientFactory that disables SSL certificate validation. This is useful for development and testing purposes, but should not be used in production without careful consideration of the security implications.

## Supported React Native Platforms

- Android

## Getting Started

1. Install the package:

```bash
npm install rn-okhttps
# or
yarn add rn-okhttps
```

2. Rebuild and reinstall your app:

Note: If you encounter any issues, try uninstalling the app from your device/emulator before rebuilding and reinstalling.

## Security Considerations

The current implementation disables SSL certificate validation, which can be a significant security risk. This should only be used for development and testing purposes. For production use, implement proper SSL pinning or certificate validation.

## Contributing

We welcome contributions to improve this module. Please submit issues and pull requests on our GitHub repository.
