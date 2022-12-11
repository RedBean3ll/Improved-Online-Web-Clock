# Improved-Online-Web-Clock
Improved code of an old clock written in HTML and JS. 

## About: 
This was a quick project done on behalf of a friend as a request for their [Twitch](https://www.twitch.tv/diddy7kong) streams. The original code is under copyright from Simple Style. This was just to clean up the code and add user controlable toggles for greater usage.

## Future:
Soon, I will create a new repository containing a new version without images and the letters/numbers wrapped up as a font. There are lator plans on filling the blanks with custom characters to form a complete font file.

## Code:
The updated code is in a file named digitalClockImage.js. An untouched copy remains further down in the folder hieararchy named "digitalClockImage - originalcopy".

## Features:
There are four rules within the java script file. These can be broken up into:
- 12HR Mode
- Display AMPM
- Display Seconds
- Colon Blinks

All four rules are stored in an Array of boolean variables. To enable a rule, set the boolean value of the rule at its position in the rules Array. It is that simple. If you notice a tiny desync, decrease the time interval at the bottom of the file from 500ms to around 250ms. This should eliminate that.
