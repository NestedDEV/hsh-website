
/* load twitter widget js */

    $(document).foundation();
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));



/* Facebook SDK load for embeds */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1524225797594594";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



/* Light YouTube Embeds by @labnol */
    /* Web: http://labnol.org/?p=27941 */
 
    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });
 
    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }
 
    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }
/*youtube

var videoURL = $('#player').prop('src');

$('[data-reveal]').on('open.zf.reveal', function() {
videoURL += "&autoplay=1";
$('#player').prop('src',videoURL);
   });

$('[data-reveal]').on('closed.zf.reveal', function() {
videoURL = videoURL.replace("&autoplay=1", "");
$('#player').prop('src','');
$('#player').prop('src',videoURL);
   });

   */

$(function() { 
       window.setTimeout('getHeight()',250);
});
function getHeight() {
   var height = $('section.promo, section.promo-video').height();
   $('#overlay').css({'height':height+'px'})
}
$(function() {
  
  $('#gallery a').on('click',function() {
    var image = $(this).find('img').attr('src');
    var imageSelected = image.split('thumbnail');
    var fullPath = imageSelected;
    $('#galleryModal #imageContainer').attr('src', fullPath);

  });
});
$(window).resize(function() {
  getHeight();
})