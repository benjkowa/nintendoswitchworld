// JavaScript Document
/* Style the navbar */

#navbar {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

/* Page content */
.content {
  padding: 16px;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}

red = [0, 100, 63];
orange = [40, 104, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];

message = 'Welcome to Nintendo Switch World!';

drawName(message, red);
bounceBubbles();
