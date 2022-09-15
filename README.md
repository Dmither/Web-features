# Web-features

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

### Variables in CSS:
In class:  
.class{--variable: value;}  
Global:  
:root{--variable: value;}  
*:root - find root element (html)*
Apply field:  
.class{field: var(--variable);}

### Content on a 100% height:
`<html style="height: 100%">`  
`<body style="height: 100%">`  
`<div class="wrapper" style="display: flex; flex-direction: column; height: 100%"`

### Create burger-menu:
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
!Important! All content must be wrap in relative div


### Style checkbox and radio-buttons
1. Create html base:
- create form object;
- add wrap-block with label (no tags) and input.
! checkbox must have type and name; radio also value
2. Add js logic:
- select all of targeted inputs and add foreach func;
- add class active to checked inputs on start;
- add listener on click change checked attr and toggle .active.
3. Style inputs fields:




