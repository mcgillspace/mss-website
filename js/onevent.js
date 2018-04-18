$(document).ready(function() {

    var END_DATE = "October 05, 2017 8:00:00";
    var MAILCHIMP = {
      // URL_BASE : 'https://us16.api.mailchimp.com',
      URL_BASE : '//mcgillspace.us16.list-manage.com',
      KEY : 'b3b20348afe430ea46d41668cc873ef9-us16',
      LIST_ID : 'fe5dcc06e9',
    };

    setTimeout(function() {
        $('#options').animate({
            left: '-180px'
        });
    }, 400);
    $('span.dialog').click(function() {
        var optionsPos = $('#options').css("left");
        if (optionsPos == "0px") {
            $('#options').animate({
                "left": "-180px"
            }, "fast");
            $(this).find('h4').html('&raquo;').parent().css({
                'background': '#333'
            });
        } else {
            $('#options').animate({
                "left": "0px"
            }, "fast");
            $(this).find('h4').html('&laquo;').parent().css({
                'background': '#000'
            });
        }
    });
    $('#options .readyColors a').each(function(index) {
        var ownColor = $(this).text();
        $(this).css({
            'background-color': '#' + ownColor + ''
        });
    });
    $('#options .backColors a').each(function(index) {
        var ownBgColor = $(this).text();
        $(this).css({
            'background-color': '#' + ownBgColor + ''
        });
    });
    $('body').append('<input type="text" style="visibility:hidden; position:fixed; top:20px; right:20px;" id="siteColorBox">');
    $('body').append('<input type="text" style="visibility:hidden; position:fixed; top:20px; right:20px;" id="siteTexBox"><i id="hiddenhead" style="visibility:hidden; font-size:1px; position:absolute; left:-500px;"></i>');
    $('body').append('<input type="text" style="visibility:hidden; position:fixed; top:20px; right:20px;" id="siteBgColorBox">');
    $('body').append('<input type="text" style="visibility:hidden; position:fixed; top:20px; right:20px;" id="siteBgTexBox">');

    function DynamicCss() {
        var mainColor = $('#siteColorBox').val();
        var mainBgColor = $('#siteBgColorBox').val();
        $('#hiddenhead').attr('style', 'color:#' + mainColor + '; position:absolute; left:-550px; visibility:hidden;');
        var gethexcolor = $('#hiddenhead').css("color");
        var matchingColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
        var match = matchingColors.exec(gethexcolor);
        var transCustomColor = "rgba(" + match[1] + ', ' + match[2] + ', ' + match[3] + ", 0.9)";
        $('figcaption').css("background-color", transCustomColor);
        $('head style').append('h1,h2,h3,h4,h5,h6, .navigation ul li a, blockquote,.btnMain,.btnColor2,.btnColor3,.btnLte {font-family:"' + Heading_Font + '"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav {font-family:"' + Site_Font + '"; }  body {background-color:#' + mainBgColor + ';} .navbar-header, .btn, .schedule-box h6.section-head span, header.colored, .panel-heading a, .navigation nav ul li, .styled div strong, .priceBox:hover .heading, .priceBox.featured .heading, a.top {background-color:#' + mainColor + '; }  a, #home li a:hover, h3 span, .speaker .col-md-2 i, #directionsPanel .adp-summary, #schedule .nav-tabs li.active h5, #main h2, .price strong  {color:#' + mainColor + '} #schedule .nav-tabs li.active i, #schedule .nav-tabs li a:hover h5, #schedule .nav-tabs li:hover i, .schedule-box li h6 strong {color:#' + mainColor + ';}    div.section, #home, .speaker-section {border-top:5px solid #' + mainColor + ';  } .styled div {border-color:#' + mainColor + ';  } #texture {background:url(img/' + body_texture + ') repeat 0 0;} ::selection {background-color:#' + mainColor + '; color:#fff;} ::-moz-selection {background-color:#' + mainColor + '; color:#fff;} ');
    }
    $('.readyColors a').click(function(event) {
        var getColor = $(this).text();
        $('#siteColorBox').val(getColor);
        DynamicCss();
        event.preventDefault();
    });
    $('.backColors a').click(function(event) {
        var getBgColor = $(this).text();
        $('#siteBgColorBox').val(getBgColor);
        DynamicCss();
        event.preventDefault();
    });
    $('#customcolorsform').submit(function() {
        var getCustColor = $('#customColor').val();
        $('#siteColorBox').val(getCustColor);
        DynamicCss();
        return false;
    });
    $('#custombackform').submit(function() {
        var getCustColor = $('#customBackColor').val();
        $('#siteBgColorBox').val(getCustColor);
        DynamicCss();
        return false;
    });
    $('head style').append('h1,h2,h3,h4,h5,h6, .navigation ul li a, blockquote,.btnMain,.btnColor2,.btnColor3,.btnLte {font-family:"' + Heading_Font + '"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav {font-family:"' + Site_Font + '"; }  body {background-color:#' + page_background_color + ';} .navbar-header, .btn, .schedule-box h6.section-head span, header.colored, .panel-heading a, .navigation nav ul li, .styled div strong, .priceBox:hover .heading, .priceBox.featured .heading, a.top {background-color:#' + main_color + '; }  a, #home li a:hover, h3 span, .speaker .col-md-2 i, #directionsPanel .adp-summary, #schedule .nav-tabs li.active h5, #main h2, .price strong  {color:#' + main_color + '} #schedule .nav-tabs li.active i, #schedule .nav-tabs li a:hover h5, #schedule .nav-tabs li:hover i, .schedule-box li h6 strong {color:#' + main_color + ';}    div.section, #home, .speaker-section {border-top:5px solid #' + main_color + ';  } .styled div {border-color:#' + main_color + ';  } #texture {background:url(img/' + body_texture + ') repeat 0 0;} ::selection {background-color:#' + main_color + '; color:#fff;} ::-moz-selection {background-color:#' + main_color + '; color:#fff;} ');
    $(' #eg-thumbs > li ').each(function() {
        $(this).hoverdir();
    });
    $("a[rel^='prettyPhoto']").prettyPhoto({
        overlay_gallery: true
    });
    $('.gallery a').append('<span class="link"><i class="fa fa-search-plus"></i></span>');
    $('.container').each(function() {
        var highestBox = 0;
        $('.column', this).each(function() {
            if ($(this).height() > highestBox)
                highestBox = $(this).height();
        });
        $('.column', this).height(highestBox);
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('a.top').fadeIn('slow');
        } else {
            $('a.top').fadeOut('slow');
        }
    });
    $('#register').hide();
    $('.register-trigger').click(function(event) {
        $('#register').slideToggle('fast');
        event.preventDefault();
    });
    var winWidth = $('body').width();
    if (winWidth <= 767) {
        $('#Navigation li a').attr('data-toggle', 'collapse');
        $('#Navigation li a').attr('data-target', '#Navigation');
    } else {}
    $('a.tips').tooltip();
    $(".container").fitVids();
    $('#schedule .nav-tabs li').append('<span class="arrow"></span>');
    $('#schedule .nav-tabs li span.arrow').hide();
    $('.countdown.styled').countdown({
        date: END_DATE,
        render: function(data) {
            var years = this.leadingZeros(data.years, 2);
            if (years != '00') {
                $(this.el).html("<div><span>" + this.leadingZeros(data.years, 2) + " </span><strong>years</strong></div><div><span>" + this.leadingZeros(data.days, 2) + " </span><strong>days</strong></div><div><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>hrs</strong></div><div><span>" + this.leadingZeros(data.min, 2) + "</span><strong>min</strong></div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>sec</strong></div>");
            } else {
                $(this.el).html("<div><span>" + this.leadingZeros(data.days, 2) + " </span><strong>days</strong></div><div><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>hrs</strong></div><div><span>" + this.leadingZeros(data.min, 2) + "</span><strong>min</strong></div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>sec</strong></div>");
            }
        }
    });
    $('.panel-heading a').click(function() {
        var thisParent = $(this).parent().next();
        if (thisParent.hasClass('in')) {
            $(this).parent().removeClass('active');
        } else {
            $('.panel-heading').removeClass('active');
            $(this).parent().addClass('active');
        }
    });
    $('nav a[href^="#"]').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 1000);
    });
    var curYear = new Date().getFullYear();
    $('.year').html(curYear);
    $("#subscribeForm input").focus(function() {
        $(this).prev("label").hide();
        $(this).prev().prev("label").hide();
    });
    // $("#subscribeForm").submit(function() {
    //     var emailSubscribe = $("#emailSubscribe").val();
    //     if (emailSubscribe == "") {
    //         $('#emailSubscribe').addClass('reqfld');
    //         $('<span class="error" style="display:none; color:#cc0000"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
    //         $("#emailSubscribe").focus(function() {
    //             $('#emailSubscribe').removeClass('reqfld');
    //             $(this).prev().fadeOut(400);
    //         });
    //         return false;
    //     } else if (emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
    //         $('#emailSubscribe').addClass('reqfld');
    //         $('<span class="error" style="display:none;  color:#cc0000">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
    //         $("#emailSubscribe").focus(function() {
    //             $('#emailSubscribe').removeClass('reqfld');
    //             $(this).prev().fadeOut(400);
    //         });
    //         return false;
    //     }
    //     var dataString = 'emailSubscribe=' + emailSubscribe;
    //     $.ajax({
    //         type: "POST",
    //         url: "form/subscribe.php",
    //         data: dataString,
    //         success: function() {
    //             $("#subscribeForm").hide();
    //             $("<div id='subscribesuccess' class='alert alert-success' style='border:#" + sub_successBox_Border_Color + " 1px " + sub_successBoxBorderStyle + "; background:#" + sub_successBoxColor + ";' ></div>").insertAfter('.subscribeHeading');
    //             $('#subscribesuccess').html("<h5 style='color:#" + sub_textColor + ";'>" + sub_submitMessage + "</h5>").hide().delay(300).fadeIn(1500);
    //             $('#subscribeForm').delay(6000).slideUp('fast');
    //         }
    //     });
    //     return false;
    // });
    $('.loader').hide();
    $("#register input, #register textarea").focus(function() {
        $(this).prev("label").hide();
        $(this).prev().prev("label").hide();
    });

    function validateInput(fieldId, val) {
      if (!val) {
          $('#'+fieldId).addClass('reqfld');
          $('<span class="error" style="display:none; margin-top:0px; color:#cc0000"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#'+fieldId).fadeIn(400);
          $("#"+fieldId).focus(function() {
              $('#'+fieldId).removeClass('reqfld');
              $(this).prev().fadeOut(400);
          });
          return false;
      } else if (fieldId === 'email' && (val.indexOf('@') == -1 || val.indexOf('.') == -1)) {
          $('#'+fieldId).addClass('reqfld');
          $('<span class="error" style="display:none;  color:#cc0000">Invalid!</span>').insertBefore('#'+fieldId).fadeIn(400);
          $("#"+fieldId).focus(function() {
              $('#email').removeClass('reqfld');
              $(this).prev().fadeOut(400);
          });
          return false;
      }
      return true;
    }

    function registerSubmit(ev) {
        ev.preventDefault();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();

        var allValid = validateInput('firstname', firstname);
        allValid = allValid && validateInput('lastname', lastname);
        allValid = allValid && validateInput('email', email);

        if(!allValid) {
          return false;
        }

        var dataString = JSON.stringify({
          "email_address": email,
          "status": "subscribed",
          "merge_fields": {
            "FNAME": firstname,
            "LNAME": lastname
          }
        })
        $.ajax({
            url: '//mcgillspace.us16.list-manage.com/subscribe/post?u=6440336a0de6185994638b439&amp;id=fe5dcc06e9',
            // url: MAILCHIMP.URL_BASE + "/3.0/lists/"+MAILCHIMP.LIST_ID+"/members/",
            dataType: "jsonp",
            data: $('#register').serialize(),
            // url: MAILCHIMP.URL_BASE + "/3.0/lists/"+MAILCHIMP.LIST_ID+"/members/",
            // dataType: "json",
            // headers: {
            //   Authorization: 'apikey b3b20348afe430ea46d41668cc873ef9-us16',
            // },
            // contentType: "application/json; charset=utf-8",
            // data: dataString,
            success: function() {
                $("#register").animate({
                    opacity: '1'
                }, 500);
                $('.loader').hide();
                $("<div id='success' class='alert alert-success' style='border:#" + successBox_Border_Color + " 1px " + successBoxBorderStyle + "; background:#" + successBoxColor + ";' ></div>").insertAfter('.field-wrapper');
                $('.field-wrapper').slideUp(300);
                $('#success').html("<h5 style='color:#" + textColor + ";'>" + submitMessage + "</h5><p style='color:#" + textColor + ";'>" + successParagraph + "</p>").hide().delay(300).fadeIn(1500);
                $('#register').delay(6000).slideUp('fast');
            }
        });
        return false;
    }

    window.registerSubmit = registerSubmit;
    // $("#register").submit(registerSubmit);
    var getcolor = $('.speaker i').css("color");
    var matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    var match = matchColors.exec(getcolor);
    var transColor = "rgba(" + match[1] + ', ' + match[2] + ', ' + match[3] + ", 0.9)";
    $('figcaption').css("background-color", transColor);
});
