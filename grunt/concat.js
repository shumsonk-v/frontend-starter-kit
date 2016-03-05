/**
 * Created by vissanus on 1/26/2016.
 */
module.exports = {
    options: {
        separator: ';'
    },
    apps: {
        src: [
            'scripts/main.js'
        ],
        dest: 'dist/apps.js'
    },
    vendors: {
        src: [
            'node_modules/jquery/dist/jquery.min.js'

        ],
        dest: 'dist/vendors.js'
    }
};
