#jquery-sticky-alert
A minimal jQuery plugin to add a sticky alert bar to the top of your website. Inspired by [this pen on CodePen](http://codepen.io/thommybrowne/details/katou). A demo can be found running at [http://sticky.longren.io](http://sticky.longren.io), which is hosted on [GitHub Pages](https://pages.github.com/).

---

##Installation

### Install manually
Include ```jquery.stickyalert.js``` after including jQuery itself:

```html
<script src="/path/to/jquery.stickyalert.js"></script>
```

Also include ```jquery.stickyalerts.css```:

```html
<link href="/path/to/jquery.stickyalert.css" rel="stylesheet" type="text/css" />
```

or


### Install using [npm](https://www.npmjs.com/):
```
npm install jquery-sticky-alert
```

or


### Install using [bower](http://bower.io/):

```
bower install jquery-sticky-alert
```

##Usage

I usually add this in my ```<header>``` area, after jQuery and ```jquery.stickyalert.js``` have been loaded.
```javascript
$(document).ready(function() {
  $('#alert-container').stickyalert({
    barFontColor:'#eee',
    barColor:'#222',
    barText:'Hey, need some web work done? Give me a shout!',
    barTextLink:'https://www.longren.io/,
    cookieRememberDays: '2'
  });
});
```

You'll also need a div with id ```alert-container```, according to the usage example above, at least:
```html
<div id="alert-container"></div>
```

Your ```alert-container``` will contain the sticky alert. ```:)```

##Issues
If you nocitce any problems, plese [submit an issue](https://github.com/tlongren/colors-anchor-theme/issues).

##How to Contribute
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

##A Screenshot
![jQuery Sticky Alert Screenshot](https://raw.githubusercontent.com/tlongren/jquery-sticky-alert/master/screenshot.png "jQuery Sitcky Alert Screenshot")

