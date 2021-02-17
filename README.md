# X330-Backlight
Brightness control support on the X330 (13.3" ThinkPad X230 Mod) for MacOS.

## Dependencies
1. Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. Node.js
```bash
brew install node
```
3. node-hid
```bash
npm install node-hid
```
4. wget (optional)
```bash
brew install wget
```

## How to Use
1. Download .backlight directory to home directory.
```bash
wget -P ~/ https://github.com/timothy-ha/X330-Backlight/tree/master/.backlight
```
2. Set path in "up.js" and "down.js" to location of .backlight directory.
```js
path = '/Users/NAME/.backlight/level';
```
3. Use [iCanHazShortcut](https://github.com/deseven/icanhazshortcut) to map any key to "up.js" and "down.js".

```bash
node ~/.backlight/up.js
```
and
```bash
node ~/.backlight/down.js
```
## Compatibility
Tested on Big Sur (11.2.1)