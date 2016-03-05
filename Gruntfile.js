/**
 * Created by vissanus on 2/19/2016.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: "MP Website Project",
                success: false,
                duration: 2
            }
        }
    });

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);
    grunt.task.run('notify_hooks');
};