# Web-features

### Plagins for VSCode
+ Auto Rename Tag (rename open or close tag like an opposite)
+ Auto Prefixer* (add prefixes)
+ CSS Peak (show CSS when hover on the HTML element)
+ eCSStractor* (extract the classes from HTML to CSS)
+ Google Fonts* (add fonts faster)
+ Live SASS Compiler* (compile SASS or SCSS to CSS)  
Auto Prefixer needs setting a shortcut  
eCSStractor runs from context menu  
Google Fonts runs from command palette  
!!! Add "&display=swap"  
Live SASS Compiler toggle is on bottom panel  

### Different size breackpoints
/* Large desktops and laptops */  
@media (min-width: 1200px) {}  
/* Landscape tablets and medium desktops */  
@media (min-width: 992px) and (max-width: 1199px) {}  
/* Portrait tablets and small desktops */  
@media (min-width: 768px) and (max-width: 991px) {}  
/* Landscape phones and portrait tablets */  
@media (min-width: 481px) and (max-width: 767px) {}  
/* Portrait phones and smaller */  
@media (min-width: 321px) and (max-width: 480px) {}  
/* Iphone 5 */  
@media (max-width: 320px) {}  

Extra small         None  <576px
Small               sm 	  ≥576px
Medium 	            md 	  ≥768px
Large 	            lg 	  ≥992px
Extra large 	      xl 	  ≥1200px
Extra extra large 	xxl 	≥1400px

### Download slick-slider:  
https://kenwheeler.github.io/slick/

### Proportions
aspect-ratio: 100 / 50;

### Color mix
mix-blend-mode: multiply;

### Adaptive values for CSS styles:
(for padding between 50px and 20px with starting vw 767px and final vw 320px)  
@media (max-width: 767px){  
  padding: calc(20px + (50 - 20) * ((100vw - 320px) / (767 - 320)));  
}  

### Variables in CSS:
In class:  
.class{--variable: value;}  
Global:  
:root{--variable: value;}  
*:root - find root element (html)*
Apply field:  
.class{field: var(--variable);}

### Disable blue frame during tap on mobile
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

### Content on a 100% height
`<html style="height: 100%">`  
`<body style="height: 100%">`  
`<div class="wrapper" style="display: flex; flex-direction: column; height: 100%"`

### Create burger-menu
1. Create header html:
- add logo;
- add navbar, it contains navbar-list for links, buttons, else;
- add div burger with one span and onclick function.
2. Style header for desktop:
- header-wrapper, navbar, navbar-list display: flex;
- burger's span add :before and :after elements in burger;
- burger display: none.
3. Style changes for mobile sizes:
- change navbar, navbar-list flex-direction and other style;
- for navbar add position: fixed (absolute) and top: -100%;
- add burger display: block.
4. Add style classes for open menu: navbar-open position, burger span rotate
5. Add js function for click on burger: navbar and burger toggle classes -open
6. Optional, if header is fixed:
- add menu copy above the header (menu-mobile)
- copy menu style to menu-mobile
- change menu-selector in js to menu-mobile
  
!!! All content must be wrap in relative div
!!! Add z-index in menu-links
### Alternate burger-menu
1. Style desktop:
- header fixed (sticky) t0 l0 w100% zi50;
- substrate for header (optional): header::before absolute t0 l0 w100% h100%.
2. Style mobile (@): header-menu fixed t0 l0 w100% h100% under substrate.
3. Script: burger-click toggle burger and menu active-class
  
additionally, lock scroll while menu is open (toggle body overflow: hidden),
add menu scroll overflow: auto.

### Style checkbox and radio-buttons
1. Create html base:
- create form object;
- add wrap-block with label (no tags) and input.
! checkbox must have type and name; radio also value
2. Add js logic:
- select all of targeted inputs and add foreach func;
- add class active to checked inputs on page ready;
- add listener on click change checked attr and toggle .active.
3. Style inputs fields:
- wrap-block add position: relative; cursor: pointer;
- add padding for own inputs, add own inputs like ::before and ::after
- add active changes in _active class and _active::before/::after
- disable standard inputs

### Style spoiler ???
1. Create html spoiler > title, text, add .active to spoiler
2. In js for each title add listener, which toggle .active to spoiler:
- query all spoilers;
- for each titles get spoiler-text height, and set it height 0px;
- add listener on click, which toggle spoiler .active;
- if spoiler contains .active, set spoiler-text height like on ready;
- else - set spoiler-text height 0px;
!!! if other spoilers should close, above set spoiler-text height
  for each spoilers remove .active, set spoiler-text height 0px,
  for targeted spoiler add .active !!!
3. Style toggle-icon in title and height: 1px, overflow: hidden in text
4. Change style on active.

### Fullscreen
1. Add fullscreen block to html
2. Add css style to html, body height: 100%
3. Add css to block wrapper (main-block, container, else):
- display: flex; flex-direction: column;
- min-height: 100vh; (100% viewing area's height)
4. Add css for fullscreen block:
- min-height: 100vh;
- width: 100%; (fix center in IE)
