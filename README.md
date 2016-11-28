# FacebookAutoInviteScript
This script will allow you to invite many people, minus the people you don't want to invite

## Usage instructions

1. Go to the page (/group/event/whatever) that you wish to invite people to. 
2. Find the link to "Invite Friends" on that page, and click it. Now, the dialog to select friends to invite should pop up. 
3. Scroll all the way down, for good measure, on your friends list there, so that all profiles load in that widget. 
4. Next, bring up the Developer Console (hit F12 on Windows machine keyboard)
5. This is where it gets a little icky. This script, client-side JavaScript, works by HTML manipulation: it activates the "click" event on the buttons corresponding to all the people you do wish to invite. My code also makes use of a widely-used JavaScript library called jQuery. Facebook, however, has made it hard to invite people, by disabling external scripts, and you will have to be careful as to how you input JavaScript manually. **Thus, you will have to [copy and paste all the code from this file][1], or the jquery.js file on this site, into the Console.**
6. Hit "enter" and wait.
7. Copy and paste the code from script.js on this site and hit "enter". 
8. A prompt will come up asking for the names of people you wish to not invite. Enter the Facebook names of these people, delimited by comma, or leave blank.
9. Click "OK", wait, and let the script do the inviting!


[1]: http://code.jquery.com/jquery-latest.min.js
