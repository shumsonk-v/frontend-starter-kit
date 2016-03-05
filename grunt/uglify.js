/**
 * Created by vissanus on 1/26/2016.
 */
module.exports = {
    options: {
        separator: ';'
    },
    apps: {
        files: {
            'dist/apps.min.js': ['dist/apps.js']
        }
    },
    vendors: {
        files: {
            'dist/vendors.min.js': ['dist/vendors.js']
        }
    }
};