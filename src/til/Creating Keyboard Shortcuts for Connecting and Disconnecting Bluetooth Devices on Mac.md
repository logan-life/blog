---
layout: tilLayout
title: Creating Keyboard Shortcuts for Connecting and Disconnecting Bluetooth Devices on Mac
topic: "macOS"
---

How to create keyboard shortcuts on macOS for quickly connecting and disconnecting to your AirPods (or any Bluetooth device) using `blueutil`. <!-- excerpt -->

This method requires `blueutil` to be installed via Homebrew and leverages Automator to create quick actions.

- `blueutil` is a command-line utility for managing Bluetooth connections on macOS.
- Homebrew is a package manager for macOS, allowing easy installation of command-line tools.

### Installing blueutil

First, ensure Homebrew is installed on your Mac. Then, install `blueutil`:

```bash
brew install blueutil
```

### Finding Your Device's Bluetooth Address

Before creating the shortcuts, you need to know the Bluetooth hardware address of the device you want to connect or disconnect. Run the following command in the Terminal to list all paired devices and their addresses:

```bash
blueutil --paired
```

Look for your device in the output and note down its address, formatted like `00-00-00-00-00-00`.

### Creating a Connect Shortcut

1. Open **Automator** and create a new **Quick Action**.
2. Set **Workflow receives** to **no input**.
3. Search for **Run Shell Script** and drag it to the workflow area.
4. Enter the command to connect, replacing `your-bluetooth-device-address` with the actual Bluetooth address of your device:

   ```bash
   /opt/homebrew/bin/blueutil --connect your-bluetooth-device-address
   ```

5. Save the Quick Action as "Connect AirPods".

### Creating a Disconnect Shortcut

Repeat the steps for creating a connect shortcut, but use the disconnect command instead:

```bash
/opt/homebrew/bin/blueutil --disconnect your-bluetooth-device-address
```

Save this Quick Action as "Disconnect AirPods".

### Assigning Keyboard Shortcuts

1. Go to **System Preferences > Keyboard > Shortcuts**.
2. Select **Services** from the left menu.
3. Find your Quick Actions ("Connect AirPods" and "Disconnect AirPods") under **General**.
4. Assign a unique keyboard shortcut to each.

Note: you may need to grant permissions for the Quick Actions to run in **System Preferences > Security & Privacy > Privacy > Accessibility**.
