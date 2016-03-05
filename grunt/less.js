/**
 * Created by vissanus on 1/26/2016.
 */
module.exports = {
    dev: {
        options: {
            compress: true,
            yuicompress: true,
            optimization: 2
        },
        files: {
            "less/compiled/_reset.css": "less/_reset.less",
            "less/compiled/utilities.css": "less/utilities.less"
        }
    }
};
