var main_color = "c60118";
var page_background_color = "e6e6e6";
var Heading_Font = "Roboto";
var Site_Font = "Roboto";
var body_texture = "body-bg1.png";
var submitMessage = "Your form has been submitted successfully.";
var successParagraph = "We'll respond to your message within 24 hours. <br> Please call <b>123.456.789</b> for any urgent queries. Thank You!";
var successBoxColor = "f9ffef";
var successBoxBorderStyle = "solid";
var successBox_Border_Color = "bede8f";
var textColor = "7a994c";
var sub_submitMessage = "You have subscribed successfully.";
var sub_successBoxColor = "f9ffef";
var sub_successBoxBorderStyle = "solid";
var sub_successBox_Border_Color = "bede8f";
var sub_textColor = "7a994c";
jQuery.backstretch(["img/slider/slide1.jpg", "img/slider/slide2.jpg", "img/slider/slide3.jpg"], {
    fade: 1000,
    duration: 7000
});
WebFontConfig = {
    google: {
        families: ['Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic:latin']
    }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
