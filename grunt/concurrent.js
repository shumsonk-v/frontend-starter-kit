/**
 * Created by vissanus on 1/26/2016.
 */
module.exports = {
    first: ['clean:beforeInit'],
    second: ['jshint:allInApp','less','copy:modernizr'],
    third: ['concat:apps','concat:vendors','cssmin'],
    fourth: ['uglify:apps', 'uglify:vendors'],
    fifth: ['clean:afterInit', 'notify:initComplete'],
    gruntConcatFirst: ['clean:allJs'],
    gruntConcatSecond: ['concat:apps','concat:vendors'],
    gruntConcatThird: ['uglify:apps', 'uglify:vendors'],
    gruntConcatFourth: ['clean:appsJs', 'clean:vendorsJs']
};