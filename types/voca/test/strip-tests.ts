import stripBom = require('voca/strip_bom');
import stripTags = require('voca/strip_tags');

stripBom();
stripBom('\uFEFFsummertime sadness');

stripTags();
stripTags('<span><a href="#">Summer</a> is nice</span>');
stripTags('<span><i>Winter</i> is <b>cold</b></span>', ['b', 'i']);
stripTags('Sun<br/>set', '', '-');
