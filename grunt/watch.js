/**
 * Created by vissanus on 1/26/2016.
 */
 var appJsDir = 'scripts',
	vendorsJsDir = 'vendors/js',
	vendorsCssDir = 'vendors/css',
	lessScriptDir = 'less';
 
module.exports = {
    "less": {
        files: [lessScriptDir + '/**/*.less'],
        tasks: ['clean:cssFiles', 'less', 'cssmin', 'notify:cssCreated']
    },
    "jsApp": {
        files: [appJsDir + '/**/*.js'],
        tasks: ['jshint:allInApp', 'clean:appsJs', 'concat:apps', 'uglify:apps', 'clean:appsJs', 'notify:jsAppCompiled']
    },
    "jsVendors": {
        files: [vendorsJsDir + '/**/*.js'],
        tasks: ['clean:vendorsJs', 'concat:vendors', 'uglify:vendors', 'clean:vendorsJs', 'notify:jsVendorsCompiled']
    },
    "cssVendors": {
        files: [vendorsCssDir + '/**/*.css'],
        tasks: ['cssmin', 'notify:cssCreated']
    },
    "gruntConcat": {
        files: ['grunt/concat.js'],
        tasks: ['concurrent:gruntConcatFirst', 'concurrent:gruntConcatSecond', 'concurrent:gruntConcatThird', 'concurrent:gruntConcatFourth', 'notify:gruntConfigChanged']
    },
    "gruntLess": {
        files: ['grunt/less.js'],
        tasks: ['clean:cssFiles', 'less', 'cssmin', 'notify:gruntConfigChanged']
    },
    "gruntCssmin": {
        files: ['grunt/cssmin.js'],
        tasks: ['cssmin', 'notify:gruntConfigChanged']
    },
    "jshintConfig": {
        files: ['.jshintrc'],
        tasks: ['jshint:allInApp', 'clean:appsJs', 'concat:apps', 'uglify:apps', 'clean:appsJs', 'notify:gruntConfigChanged','notify:jsHintConfigChanged']
    }
};