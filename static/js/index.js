exports.eejsBlock_timesliderScripts = function (hook_name, args, cb) {
  args.content =
    args.content +
    require('md_mudoc-lite/node/eejs/').require(
      'md_insert_table/templates/datatablesScriptsTimeslider.ejs',
    );
    return cb();
};
exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content =
    args.content +
    require('md_mudoc-lite/node/eejs/').require('md_insert_table/templates/datatablesScripts.ejs');
    return cb();
};
exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content =
    args.content +
    require('md_mudoc-lite/node/eejs/').require(
      'md_insert_table/templates/datatablesEditbarButtons.ejs',
    );
    return cb();
};
exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content =
    require('md_mudoc-lite/node/eejs/').require('md_insert_table/templates/styles.ejs') +
    args.content;
    return cb();
};
