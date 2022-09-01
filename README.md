# Web-features

## Different size breackpoints
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

## Download slick-slider:  
https://kenwheeler.github.io/slick/

## Variables in CSS:
In class:  
.class{--variable: value;}  
Global:  
:root{--variable: value;}  
*:root - find root element (html)*
Apply field:  
.class{field: var(--variable);}
