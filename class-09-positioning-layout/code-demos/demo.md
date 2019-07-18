Go to code pen and do the following:
```HTML
<div class="navbar"></div>
<div class="main-content">
  <div class="left-menu"></div>
  <div class="right-pane"></div>
</div>
```  

and CSS:
```CSS
* {
  margin: 0;  
}

div {
  border: 1px solid;
  background-color: darkgrey;
}

.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: lightblue;
  opacity: 0.5;
  height: 150px;
}

.left-menu, .main-content, .right-pane {
  height: 1000px;
}

.main-content {
  margin-top: 150px;
  background-color: lightgreen;
}


.left-menu{
  float: left;
  background-color: darkblue;
  width: 75px;
}

.right-pane{
  float: right;
  background-color: pink;
  width: 150px;
}
```
