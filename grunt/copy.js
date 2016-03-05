/**
 * Created by vissanus on 9/1/2015.
 */

module.exports = {
    modernizr: {
        src: ['modernizr-custom.js'],
        dest: 'dist/',
        cwd: 'vendors/js/',
        expand: true,
        filter: 'isFile'
    }
};
