/**
 * Created by NU on 2/20/2016.
 */
var notifyTitle = "Your Project Name";
module.exports = {
    initComplete: {
        options: {
            title: notifyTitle,
            message: 'Grunt is now up and running'
        }
    },
    cssCreated: {
        options: {
            title: notifyTitle,
            message: 'All stylesheet files has been compiled and built'
        }
    },
    jsAppCompiled: {
        options: {
            title: notifyTitle,
            message: 'JS files for application has been built'
        }
    },
    jsVendorsCompiled: {
        options: {
            title: notifyTitle,
            message: '3rd-party JS files has been built'
        }
    },
    gruntConfigChanged: {
        options: {
            title: notifyTitle,
            message: 'Grunt config file has been changed and rebuilt'
        }
    },
    jsHintConfigChanged: {
        options: {
            title: notifyTitle,
            message: 'JSHint config has been changed and re-validated'
        }
    }
};

