/**
 * Created by vissanus on 1/26/2016.
 */
module.exports = {
    beforeInit: ['dist/**/*', 'less/**/*.css'],
    afterInit: ['dist/**/*.js', '!dist/**/*.min.js', '!dist/modernizr*.js'],
    allJs: ['dist/**/*.js', '!dist/modernizr*.js'],
    onlyNonMinJs: [!'dist/**/*.min.js', '!dist/modernizr*.js', 'dist/**/*.js'],
    appsJs: ['dist/apps.js'],
    vendorsJs: ['dist/vendors.js'],
    cssFiles: ['less/**/*.css']
};