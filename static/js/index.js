exports.eejsBlock_timesliderScripts = function (hook_name, args, cb) {
  args.content =
    args.content +
    require('md_mudoc-lite/node/eejs/').require(
      'md_insert_table/templates/datatablesScriptsTimeslider.ejs',
    );
};
exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content =
    args.content +
    require('md_mudoc-lite/node/eejs/').require('md_insert_table/templates/datatablesScripts.ejs');
};
exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content =
    args.content +
    require('md_mudoc-lite/node/eejs/').require(
      'md_insert_table/templates/datatablesEditbarButtons.ejs',
    );
};
exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content =
    require('md_mudoc-lite/node/eejs/').require('md_insert_table/templates/styles.ejs') +
    args.content;
};
