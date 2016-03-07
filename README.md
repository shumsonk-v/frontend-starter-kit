# frontend-starter-kit
This is my starter kit for front end web development which using Grunt. I've prepared the beginner set of grunt tasks for web development. I like to develop stylesheet with LESS so I added LESS compiler to the grunt config. Here how to use it.



### Preparation
First, you need to install Node JS and Grunt. If you don't how, check [this](http://gruntjs.com/installing-grunt) out for the guide and a starter guide for Grunt.



### Installation
1. After Grunt has been installed, grab all files in this repository (except README.md) and put them in your project folder.
2. You can edit the project name and description in **package.json** if you want.
3. Then open command promt (if you're on Windows) or shell (if you're on Linux) and run **'npm install'** and wait for it to complete the packages installation.
4. After packages installation complete, run **'grunt'** command to start grunt tasks.
5. The task will end with 'watch' task to monitor all LESS, css and javascript files in the specified folder (see **watch.js** in **grunt** folder, the directories are defined on the top).
6. The ready-to-use stylesheet and javascript files will be put in the **'dist'** folder.
7. Include all those processed files in your index HTML page and that's it.



### How's it work for javascript?
1. The key task is **watch**. In the initialize config, if there is any change in javascript file in **scripts** folder (including sub-directories), grunt will perform **jshint** task first to check the javascript coding best practice (and you can change the JSHINT options in _.jshintrc_ file).

2. After JSHint, the **concat** task to combine all those files (which were defined in **grunt/concat.js** at **src** property of **apps** property) into one file name *'apps.js'* and put it in **dist** folder temporary. 

3. Next, grunt will continue with **uglify** task to minify the combined javascript file name **apps.js** in **dist** folder. The minified file name is **apps.min.js** and it will be put in **dist** folder.

4. Finally, **apps.js** will be deleted automatically because it is no longer needed. The one you need for your production is **apps.min.js**.

> For third-party libraries besides from **node_modules**, I've usually put them in **'vendors/js'** folder and config _concat_ and _uglify_ task to create a production version name is **vendors.min.js** and put it in the **dist** folder (same location as _apps.min.js_). You can change those settings if you want.

**Note:** I have separated the minified version of application scripts and third-party scripts. It's good for me to development them separately because I usually not modify or touch the third-party code anyway. But if you want to combine them in one file, just change some grunt config.



### How's it work for stylesheet?
As I have mentioned about LESS. I already prepared some mixins and some utilities classes (written by myself) in **less** folder. But for the third-party stylesheet besides from node_modules, I will put it in **vendors/css** folder.

1. **watch** task will monitor both LESS and CSS files. It will monitor LESS files in **less** folder and CSS files in **vendors/css** folder.

2. If any LESS file was changed, **less** task will be performed to compile LESS file into a CSS file and put it in the **compiled** folder inside **less** folder. The compiled filename can be configured in **grunt/less.js**.

3. Then right after **less** task completed, **cssmin** task will be performed immediately to combine all css files into one file and minify it. The result filename is **styles.min.css** which is ready to use in your webpage as a production stylesheet.

4. For the CSS files, no any compilers are needed. If any changes has been made with CSS files in **vendors/css**, the **cssmin** task will be performed and the result will be the same file as 3).

**Note:** If you have updated any third-party css in **node_modules** folder via npm install, I recommend you to restart grunt instead of config your **watch** task to monitor the node_modules folder. Unless you really want to specify the exact location for **watch**  task to monitor those CSS in node_modules folder so that you don't need to restart grunt, then it's up to you (because when you run 'npm install', you have to stop grunt anyway).


> The order of the css files specified in **grunt/cssmin.js** might effect your stylesheet in your webpage. So you might want to check those files order before running grunt.


Enjoy! Feel free to ask if you have any question, I will answer if I can.
