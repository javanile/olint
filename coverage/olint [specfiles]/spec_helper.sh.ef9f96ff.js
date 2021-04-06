var data = {lines:[
{"lineNum":"    1","line":"# shellcheck shell=bash"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"# Defining variables and functions here will affect all specfiles."},
{"lineNum":"    4","line":"# Change shell options inside a function may cause different behavior,"},
{"lineNum":"    5","line":"# so it is better to set them here."},
{"lineNum":"    6","line":"# set -eu"},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"# This callback function will be invoked only once before loading specfiles."},
{"lineNum":"    9","line":"spec_helper_precheck() {"},
{"lineNum":"   10","line":"  # Available functions: info, warn, error, abort, setenv, unsetenv"},
{"lineNum":"   11","line":"  # Available variables: VERSION, SHELL_TYPE, SHELL_VERSION"},
{"lineNum":"   12","line":"  : minimum_version \"0.28.1\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   13","line":"}"},
{"lineNum":"   14","line":""},
{"lineNum":"   15","line":"# This callback function will be invoked after a specfile has been loaded."},
{"lineNum":"   16","line":"spec_helper_loaded() {"},
{"lineNum":"   17","line":"  :","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   18","line":"}"},
{"lineNum":"   19","line":""},
{"lineNum":"   20","line":"# This callback function will be invoked after core modules has been loaded."},
{"lineNum":"   21","line":"spec_helper_configure() {"},
{"lineNum":"   22","line":"  # Available functions: import, before_each, after_each, before_all, after_all"},
{"lineNum":"   23","line":"  : import \'support/custom_matcher\'","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   24","line":"}"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "shellspec spec", "date" : "2021-04-06 02:25:40", "instrumented" : 3, "covered" : 0,};
var merged_data = [];
