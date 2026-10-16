# Adarsh Maths — Android APK project

This project wraps the existing Adarsh Maths game inside a native Android application. The game HTML is bundled in `app/src/main/assets/index.html`; the installed app loads that local file, so the core game works without internet. It does not request the Android `INTERNET` permission.

**This ZIP is the source project, not the APK file yet.** This workspace has no Android SDK/build tools, so an APK cannot be compiled here. The included GitHub Actions workflow can build it online and make the APK available to download.

## Easiest path: get the APK using GitHub Actions

1. Download and extract this ZIP on a computer.
2. Open https://github.com and create a repository named `adarsh-maths-android`. Public is simplest for the included free GitHub Actions workflow.
3. In that new repository choose **Add file → Upload files**.
4. Upload the **contents** of this extracted folder, including the hidden `.github` folder and everything inside it. If you do not see `.github`, enable viewing hidden files in your file manager or upload the project with GitHub Desktop.
5. Commit the files to the `main` branch. The workflow starts automatically.
6. Open the repository's **Actions** tab and choose **Build Adarsh Maths APK**. Wait for the run to finish with a green tick.
7. Open that completed run and scroll to **Artifacts**. Tap `Adarsh-Maths-Android-APK` to download a ZIP containing `app-debug.apk`.
8. Extract that downloaded ZIP, send `app-debug.apk` to your Android phone, tap it, and choose **Install**. Android may ask you to allow your file manager/browser to install unknown apps; only enable this for the trusted app source you are using, then turn it back off afterward if you prefer.

You need an internet connection for the cloud build and first transfer/download. Once the APK is installed, the game itself can be played offline.

## Alternative: build in Android Studio

1. Install Android Studio from https://developer.android.com/studio.
2. Open this extracted project folder (the one containing `settings.gradle`).
3. Let Android Studio sync and install the requested SDK components.
4. Select **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
5. The APK is produced at `app/build/outputs/apk/debug/app-debug.apk`.

## App details

- App name: Adarsh Maths
- Package ID: `com.adarshmaths.app`
- Minimum Android version: Android 6.0 (API 23)
- Game data uses WebView local storage on the device. Uninstalling the app or clearing its storage may erase progress.
- The app is built for personal installation/testing. It is a debug-signed APK, not a Google Play release package.
