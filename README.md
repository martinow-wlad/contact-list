# Task For #YOU
## Overview
Hi everybody who read this description.
I just wanted to clearify some things (if needed) what and why I did this way.

## 1. Webpack configuration.
I made decision not to use starter kit provided in task description and setup from scratch.
To be totaly honest it was first time for me.
Thanks webpack documentations it was not so hard.
Profit - using only actually nedeed packages, plugins, loaders for building process.
In this project I use: 
- plugins:
    - "mini-css-extract-plugin",
    - "html-webpack-plugin",
- loaders: 
    - css-loader,
    - sass-loader,
    - babel-loader,
    - file-loader 

## 2. File structure.
- src/ - root directory for building parts. 
    - index.html - as main (and single) project page.
    - assets/ - all related content (img/, fonts/, styles/).
    - tools/ - js helper functions.
    - components/ - functions which build "Contact List".

## 3. How it actually works?
1. There is "App" constructor function with 2 methods:
    - .init() - to get contacts first time,
    - .loadContacts() - to load more contacts.  

    Basicly would be enough only 1 method ".loadContact()" and call this method first time as well.  
    But more intuitivly using method init() first time.

2. App has state object which contains related data (next page, contacts per page) for next "loadContacts" call.
3. updateLoadingState() - manage loader element (show/hide)
4. loadContacts() - getting array of contact items and insert to contact list.

## 4. Google Maps 
1. Links with user coordinates go to Google Maps by this link:  
"https://www.google.com/maps/search/?api=1&query={longitude},{latitude}"  
But sometimes coordinates are in ocean or in desert, so it looks a bit strange).  
2. For emebede map use the same way with coordinates:  
"https://www.google.com/maps/embed/v1/place?key=apiKey&q={longitude},{latitude}&zoom=5"  
Only one thing which make me a bit confusing, user address (country, city, street, number) is quite different than coordinates.  
I guess it happend due to random user data, but ...). 
3. Also google map allows to use as query country + city, address + number but it works not for all contacts (by the reasons from prev poin).

## 5. Loader
Data fetching is quite fast and loader appear/disappear very fast. So I made artificial delay in 500ms to prevent blinking.