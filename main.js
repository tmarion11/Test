$(document).ready(function () {
    'use strict';
//Predefined flavors

    var flavors = [
        {
            'flavor': 'Vanilla Bean',
            'favorite': 'Yes!',
            'notes': 'Great for sundaes.'
        },
        {
            'flavor': 'Chocolate Mint',
            'favorite': 'Yes!',
            'notes': 'All parts chocolate. What\'s not to love?'
        },
        {
            'flavor': 'Neapolitan',
            'favorite': 'No',
            'notes': 'I dislike the strawberry chunks.'
        }
    ];


//Display flavors from Array
//Note: I will show you how to pull in the JQM listview styles in ASD when we use jQuery.
//Don't worry about the formatting at this point... just get the data to display

    var showFlavors = function() {
        for (var i=0, length=flavors.length; i<length; i++) {
            var newLi = $('<li>');

            $('#list').append(newLi);

            var heading = $('<h3>');
            heading.html(flavors[i].flavor);
            newLi.append(heading);
            var pNotes = $('<p>');
            pNotes.html(flavors[i].notes);
            newLi.append(pNotes);
            var pFav = $('<p>');
            pFav.html('Is this a favorite? ' + flavors[i].favorite);
            newLi.append(pFav);
        }
    };

    var display = $('#display');
    display.click(function() { showFlavors(); });

//Check status of Checkbox

    var getFavorite = function() {
        var favCheck = $('#favorite');
        var status;
        if (favCheck.is(':checked')) {
            status = 'Yes!';
        } else {
            status = 'No';
        }
        return status;
    };

//Save Function

    var submitFlavor = function() {
        var fav = getFavorite();

        var newFlavor = {};
        newFlavor.flavor = $('#flavor').val();
        newFlavor.favorite = fav;
        newFlavor.notes = $('#notes').val();
        flavors.push(newFlavor);
        location.href='#home';
        $('#list').html('');
    };
    var save = $('#submitFlavor');
    save.click(function() { submitFlavor(); });


//Clear Flavors

    var clearFlavors = function() {
        flavors.length = 0;
        $('#list').html('');
    };
    var clear = $('#clear');
    clear.click(function() { clearFlavors(); });

});/**
 * Created with JetBrains WebStorm.
 * User: tmarion11
 * Date: 6/11/13
 * Time: 3:24 PM
 * To change this template use File | Settings | File Templates.
 */
