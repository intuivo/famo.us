function getURLParameter(name) {
    var param = decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
    return (param === 'null') ? null : param;
}

$(window).load(function(){
    $('#main_container').delay(500).animate({
        opacity: 1
    }, 500);
    var referrerId = getURLParameter('r');
    if (referrerId) {
        $('#subscribeForm #referrer_id').val(referrerId);
    }
});

$(document).ready(function(){
    $('#close_thankyou').click(function(){
        $('#thankyou_container').fadeOut();
    });

    $('#subscribeForm').submit(function(e) {
        e.preventDefault();
        _gaq.push(['_trackEvent', 'sign-up', 'submit',, 1, true]);
        var developer = {
            'email': $('#email').val(),
            'referrerId': $('#referrer_id').val()
        };
        $.ajax({
            type: "POST",
            url: '/developers',
            dataType: 'json',
            data: developer,
            success: function(data, textStatus, jqXHR) {
                if(data.status == 'OK') {
                    _gaq.push(['_trackEvent', 'sign-up', 'success',, 1, false]);
                    $('#message').html(data.msg).addClass('success').removeClass('error').fadeIn();
                    var href = "https://twitter.com/share?text=Get%20early%20access%20to%20the%20Famo.us%203D%20libraries&url=http%3A%2F%2Ffamo.us%2Fr%2F" + data.socialId + "&via=befamous"
                    $("#custom-tweet-button a").attr('href', href);
                    $('#thankyou_container').fadeIn();
                }
                else {
                    $('#validation-message').html(data.msg).addClass('error').removeClass('success').fadeIn();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                _gaq.push(['_trackEvent', 'sign-up', 'error',, 1, true]);
                $('#message').html("Oops! Something went wrong. Try again.").addClass('error').removeClass('success').fadeIn();
            }
        });
    });
});