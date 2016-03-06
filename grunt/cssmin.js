/**
 * Created by vissanus on 1/26/2016.
 */
module.exports = {
    options: {
        shorthandCompacting: false,
        roundingPrecision: -1
    },
    target: {
        files: {
            'dist/styles.min.css': [
                "less/compiled/_reset.css",
                "node_modules/normalize.css/normalize.css",
                "less/compiled/utilities.css"
            ]
        }
    }
};
