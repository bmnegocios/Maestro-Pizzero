// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

// CUSTOM JQUERY FUNCTIONALITY
$(function () {
    
    function removeWarning() {
        // REMOVE WARNING SECTION WHEN PUBLISHED
        $('#warningSection').addClass('displayNone');
    }
    
    function optionClick() {
        // SET CLICK HANDLER FOR FADE
        $('#voteA, #voteB').click(function() {
            $('#opt01').removeClass('visible').addClass('hidden displayNone');
            $('#opt02').removeClass('hidden displayNone').addClass('visible');
            $('html, body').animate({scrollTop:0}, 'slow');
            return false;
        });
    }

    function removeArrowElements() {
        // PUBLISH ONLY, ELEMENTS NOT PRESENT IN DOM IF HIDDEN IN BUILDER
        if ( $('.step1').length < 1 ) {
            $('.step2').removeClass('step1-a');
        } else {
            $('.step2').addClass('step1-a');
        }
        if ( $('.step1-2').length < 1 && $('.step2-2').length < 1 ) {
            $('.step3-2').removeClass('step2-2-a');
        } else if ( $('.step1-2').length < 1 ) {
            $('.step2-2').removeClass('step1-2-a');
        }
    }
    function removeArrowElementsBuilder() {
        // BUILDER ONLY, DISPLAY NONE APPLIED TO VISUALLY SHOW HIDDEN
        if ( $('.step1').is(':hidden') ) {
            $('.step2').removeClass('step1-a');
        } else {
            $('.step2').addClass('step1-a');
        }
        if ( $('.step1-2').is(':hidden') ) {
            $('.step2-2').removeClass('step1-2-a');
        } else {
            $('.step2-2').addClass('step1-2-a');
        }
        if ( $('.step1-2').is(':hidden') && $('.step2-2').is(':hidden') ) {
            $('.step3-2').removeClass('step2-2-a');
        } else {
            $('.step3-2').addClass('step2-2-a');
        }
    }

if ( typeof window.top.App === 'undefined' ) {
        // Published page
        $(document).ready(function() {
            // RESET SECTION 2 TO BE HIDDEN ON DOM READY
            $('#opt02').removeClass('visible').addClass('hidden displayNone');
        });
        $(window).on('load', function(){
            removeWarning();
            optionClick();
            removeArrowElements();
        });
    } else {
        // within the builder
        setInterval( function(){
            removeArrowElementsBuilder();
        }, 500);
    }

});



