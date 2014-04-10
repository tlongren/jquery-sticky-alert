#jquery-sticky-alert
A minimal jQuery plugin to add a sticky alert bar to the top of your website. Inspired by [this pen on CodePen](http://codepen.io/thommybrowne/details/katou). A demo can be found running at [http://sticky.longren.io](http://sticky.longren.io), which is hosted on [GitHub Pages](https://pages.github.com/). For a more detailed writeup, see [this post on my blog](http://longren.io/sticky-alerts-a-new-tiny-jquery-plugin/).

---

##Installation

Include ```jquery.stickyalert.js``` after jQuery:

```html
<script src="/path/to/jquery.stickyalert.js"></script>
```

Also include ```jquery.stickyalerts.css```:

```html
<link href="/path/to/jquery.stickyalert.css" rel="stylesheet" type="text/css" />
```

##Usage

I usually add something like this in my ```<header>``` area, after jQuery and ```jquery.stickyalert.js``` have been loaded.
```javascript
$('#alert-container').stickyalert({
  barFontColor:'#eee',
  barColor:'#222',
  barFontSize: '1.1rem',
  barText:'Hey, need some web work done? Give me a shout!',
  barTextLink:'http://longren.io/work-with-me/'
});
```

You'll also need a div with id ```alert-container```, according to the usage example above, at least:
```html
<div id="alert-container"></div>
```

Your ```alert-container``` element will contain the sticky alert. ```:)```

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