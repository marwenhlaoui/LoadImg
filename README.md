
#LoadImg
###Description : 
LoadImg is JQuery function , you can load and preview picture before upload with ajax , php or any framework .


----------


###Install : 
easy to include in your application , just [download](https://github.com/marwenhlaoui/LoadImg/archive/master.zip) or clone from github

```git
$git clone https://github.com/marwenhlaoui/LoadImg.git 
```
###Include:
add style file `loadimg.min.css` in head
```html
<head>
	...
	<link rel="stylesheet" type="text/css" href="assets/css/loadimg.min.css">
	...
</head>
```


add javascript  files `loadimg.min.js`  and `jquery.min.js`
```html
	...
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/loadimg.min.js"></script>
	...
```
###Use : 
in your form
```html
<label id="upload">
	<input type="file">
</label>
```

in your application js 
```js
$('#upload').loadImg({});
```
###Optional parameters : 
####Text : 
```js
$('#upload').loadImg({
	"text"	: "Upload Picture ...",
});
```
default text: Upload
####Image extension : 
```js
$('#upload').loadImg({
	"fileExt" : ["png","jpg"],
});
```
default values : jpg

####Image Size : 
```js
$('#upload').loadImg({
	"fileSize_min"	: 0,//0Mo
	"fileSize_max"	: 1,//1Mo
});
```
default values : min = 0 Mo and max = 2Mo
If you want to use default picture just add `exist-img` attribut in lab 

```html
<label id="upload" exist-img="{ Url here }">
	<input type="file" name="img"> 
</label>
```

### [Demo](http://app.loadimg.marwenhlaoui.me/)

### License :

This Jquery Projects is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).


----------
Made with &#9829; by [Marwen Hlaoui](http://marwenhlaoui.me)