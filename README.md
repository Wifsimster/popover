# Ultra Simple jQuery Popover

The main goal of this plugin is to be the most simple possible.

There are no css styling or template embedded, only a small ``_popover.scss`` file.

## Usage

**HTML**
```html
<link type="text/css" rel="stylesheet" href="css/popover.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
<script type="text/javascript" src="js/popover.js"></script>
```
```html
<a data-popover="myPopover">Pop me</a>
<div class="popover" id="myPopover">HTML content</div>
```

**JavaScript**
```javascript
$('[data-popover]').popover();
```

##Position
Default position is bottom but you can specified it thought data attribute :

**HTML**
```html
<a data-popover="myPopover" data-popover-position="left">Pop me</a>
<a data-popover="myPopover" data-popover-position="right">Pop me</a>
<a data-popover="myPopover" data-popover-position="top">Pop me</a>
<a data-popover="myPopover" data-popover-position="bottom">Pop me</a>
```
