function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

//function sleep(delay) {
//    var start = new Date().getTime();
//    while (new Date().getTime() < start + delay);
//}

//var jq = document.createElement('script');
//jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
//document.getElementsByTagName('head')[0].appendChild(jq);
//sleep(1500);
//jQuery.noConflict();

downloadURI($('.mejs-mediaelement .player')[0].src,"cap5_2.mp4")
