# X330-Backlight
Brightness control support on the X330 (13.3" ThinkPad X230 Mod) for MacOS.

## How to Use
1. Download .backlight directory to home directory.
```bash
wget -P ~/ https://github.com/timothy-ha/X330-Backlight/tree/master/.backlight
```
2. Set path in "up.js" and "down.js" to location of .backlight directory if home directory isn't used.
```js
path = '~/.backlight/level';
```
3. Use [iCanHazShortcut](https://github.com/deseven/icanhazshortcut) to link keys to "up.js" and "down.js".

```bash
node ~/.backlight/up.js
```
or
```bash
node ~/.backlight/down.js
```
## Compatibility
Tested on Mojave and Catalina
