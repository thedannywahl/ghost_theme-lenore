# Lenore: A Theme for Writing

The Lenore theme version 1.2 (2015.03.19.00) for Ghost, by Danny Wahl.

## Demo

A demo of this theme is available at [lenore.iyware.com](http://lenore.iyware.com)

## Changelog
* v1.2 (2015.03.19)
    * fix hcard schema
    * update share links to Ghost 0.5.10 API
* v1.1 (2015.03.13)
    * fix missing margin when an article has no image 
    * fix last article in loop sometimes having a bottom border 
* v1.0 (2015.03.11)
    * Initial release :)

## Installation

To install this theme add it to the /content/themes/ folder of your ghost installation and restart node.js

## Template Structure

This theme follows the standard ghost file layout:

* lenore/
    * author.hbs
    * default.hbs
    * index.hbs
    * page.hbs
    * post.hbs
    * tag.hbs
    * partials/
        * footer.hbs
        * loop.hbs
        * pagination.hbs
    * assets/
        * css/
            * screen.css
            * screen.min.css
        * fonts/
            * openSans-light.woff
            * openSans-light.woff2
            * openSans-light-italic.woff
            * openSans-light-italic.woff2

## Styles

Lenore includes two stylesheets `screen.css` and `screen.min.css` which is a minified (all the spaces removed) version of `screen.css`.  By default lenore includes `screen.min.css` as its filesize is smaller.  `screen.css` includes a table of contents that itemizes and labels all the items you might want to customize.  Here's a snippet of the table of contents:

```language-css
/* Lenore screen.css (search "<==##")
 * 00. Color values reference table
 * 01. Mobile font size
 * 02. Site font-family
 * 03. Font color
 */
```

If you want to change the font color then you would search for `<==03` and your editor will scroll to the location in the code where the css is declared.

```language-css
html {
    font-size: 1em; /*<==01*/
    font-family: "Open Sans"; /*<==02*/
    color: #444; /*<==03*/
}
```

And then you would change the value to whatever color you desire.  However, after you save the document you will not see the changes reflected in your site.  Remember that the theme by default includes `screen.min.css` and not `screen.css`.  You will need to make the changes in `screen.css` as well.  I recommend that you copy the whole content of your now edited `screen.css` and go to the website http://cssminifier.com/ and re-minify your code.  Then take the minified code and paste it into `screen.min.css`.

Another option is to open `default.hbs` and change the theme to use `screen.css` instead and your changes will be instantly changed.  This will increase the size of your page a bit.

```language-handlebars
    <link rel="stylesheet" type="text/css" href="{{asset "css/screen.min.css"}}" />
```

becomes:

```language-handlebars
    <link rel="stylesheet" type="text/css" href="{{asset "css/screen.css"}}" />
```

## Social Links

By default Lenore has 5 social sharing links enabled, with 14 more disabled.  The enabled links are: Email, twitter, facebook, google+, and LinkedIn.  To enable another site open `post.hbs` and find the social site you want and remove the handlebar comments around it.  Here's an example of how to enable sharing to reddit:

```language-handlebars
{{!--REDDIT
	<li><a class="reddit" href="http://www.reddit.com/submit/?url={{@blog.url}}{{url}}&title={{title}}">reddit</a></li>
--}}
```

will become:

```language-handlebars
	<li><a class="reddit" href="http://www.reddit.com/submit/?url={{@blog.url}}{{url}}&title={{title}}">reddit</a></li>
```

save the document and now your posts will have a share to reddit link available.

## Images, Logos, Navigation

Lenore does not need any customization to work with images, covers, or navigation.  If you upload them in ghost then Lenore will use them, but if you don't use them then Lenore will look just as great.

## Custom Code

Ghost 0.5.9 allows for "code injection" so if you want to add extra styles or JavaScript then using ghost's code injection feature is a great way to customize your site without having to edit the theme.  Simply enable code injection in ghost and write your custom code in the provided text box.

## Sources and Credits

The 'Open Sans' font is licensed under the Apache 2 license, a copy of that license is included in the file `LICENSE`.  "normalize.css" is licensed under the MIT license, a copy of that license is included in the file `LICENSE`.

## Copyright & License

Copyright (c) 2015 Danny Wahl [MIT License](LICENSE)

## Issues

If you have an issue please open a [new issue](https://github.com/thedannywahl/ghost_theme-lenore/issues) here github.