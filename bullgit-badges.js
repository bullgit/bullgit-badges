/*! Bullgit badges 
==================================
Let the world know you're a Gitch!
Author : @LukyVj 
==================================
*/
var bullbadge = (function(id, url, tag) {
  var core = document.createElement(tag);
  core.id = id;
  var styles = ("html:before{content:'';display:block;width:200px;height:200px;background:#eff0f2;background-size:80px;transform:rotate(-45deg);position:fixed;bottom:-100px;left:-100px}html:after{content:\"I'm a Gitch\";display:block;background:url(https://trello-attachments.s3.amazonaws.com/52b57aac03e6be715d005d6e/52cdb9a36c53c3b956f11a18/eb0e6d60c57fdbe795494dd0a680c5d7/bullgit.png) no-repeat bottom right;background-size:60px;position:fixed;bottom:-100px;left:-100px;width:200px;height:200px;z-index:1000;background-position:110px 10px}#bullbadge{display:block;opacity:0;text-indent:-9999999px;width:200px;height:200px;position:absolute;bottom:0;left:0;cursor:pointer;z-index:999999999;background:red;transform:rotate(-45deg);bottom:-100px;left:-100px}");
  core.innerHTML = styles;
  document.body.appendChild(core);
  var tag = document.getElementById(id);
  tag.onclick = function() {
  document.location = url;
};

})("bullbadge", "http://bullg.it", "style");
