# Adarsh Maths — installable website (PWA)

This project wraps the Adarsh Maths single-page game as an installable Progressive Web App. It includes a web manifest, app icons, an install button, and a service worker for caching the app shell after its first successful visit.

## Publish it free with GitHub Pages

1. Extract `Adarsh_Maths_PWA.zip` on your computer.
2. Sign in to GitHub and create a **new public repository** named `adarsh-maths` (or another name you like).
3. Open the new repository. Choose **Add file → Upload files**.
4. Upload the *contents* of the extracted folder — `index.html`, `manifest.webmanifest`, `service-worker.js`, the `icons` folder, and this README. Do not upload only the ZIP file. Keep `index.html` at the repository root.
5. Click **Commit changes**.
6. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/(root)`, then save.
7. Wait for GitHub Pages to publish the page. The public URL will look like `https://YOUR-USERNAME.github.io/adarsh-maths/`.
8. Open that HTTPS URL in Chrome or Edge, play/load the page once while online, then use the **Install App** button if the browser offers installation. You can also use the browser menu's **Install app** option.

The first publish can take a few minutes. GitHub Pages uses HTTPS, which is important for PWA installation and service workers.

## Install on a phone or computer

- **Android (Chrome):** open the website, then tap **Install App** or use Chrome's menu and choose Install app / Add to Home screen.
- **iPhone/iPad:** open the website in Safari, tap **Share**, then **Add to Home Screen**. iOS does not support the custom `beforeinstallprompt` event, so the browser's Share menu is used.
- **Desktop Chrome/Edge:** open the HTTPS site and use **Install App** or the browser's install option.

Exact wording varies by browser and OS. If the in-page button cannot open a prompt yet, the website explains the manual route. The site must be hosted over HTTPS (localhost is suitable only for local testing); double-clicking `index.html` directly does not enable service-worker installation/offline caching.

## Offline behavior and saved progress

The service worker caches the app shell on first load, allowing the page itself to reopen offline after it has been cached. Questions and progress are handled by the existing client-side game code. Progress uses browser local storage, so it is saved on that browser/device and is not automatically synchronized to other devices. Some browser features, such as sound, may behave differently offline.

## Updating the app later

Upload updated files and commit them to the same GitHub repository. The service worker cache name is versioned in `service-worker.js`; increment `adarsh-maths-static-v1` when you want to force a fresh cache after major static-file changes.
