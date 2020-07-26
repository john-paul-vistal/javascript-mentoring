$(document).ready(function() {

    // !! Don't delete those lines!!
    $('#description-hidden').hide();
    $('input#name-input').hide();


    // Question 1: Animate the logo! make it bigger by 50px when hovered
    // Attention: when mouse exits the logo, it should go back to its original size

    $('#logo').hover(
        function() {
            $('#logo').animate({ width: '+=50px', height: '+=50px' })
        },
        function() {
            $('#logo').animate({ width: '-=50px', height: '-=50px' })
        }
    );

    // Question 2: When you click on 'Toggle PN Theme', color all the headers in blue, and the other texts in orange
    // Bonus: when you click again on the button, colors should be back to normal

    $('#toggle-theme').click(function() {
        $(":header").toggleClass('blueHeader')
        $("p ,span,button,table").toggleClass('orangeText')
    });



    // Question 3: When you click on the 'show more' button, you should see the rest of the paragraph,
    // and 'show more' should become 'show less'.
    // When you click the 'show less' button, you should hide the rest of the paragraph, 
    // and 'show less' should become 'show more'

    $('#more').click(function() {
        $('#description-hidden').toggle();
        $('#more').text($('#more').text() == 'show more' ? 'show less' : 'show more');
    });


    // Question 4: When you click 'Edit' button next to the name, it should toggle the display of the editable input next to the button
    $('#edit-name-btn').click(function() {
        $('input#name-input').show();
    });

    // Question 5: When you change the name in that input, it should update the name in the text, and hide the input
    $('input#name-input').change(function() {
        let name = $('input#name-input').val();
        $('#name').html(name)
        $('#name').addClass("edited")
        $('#age').addClass("edited")
    });

    // Question 6: When you click the + button, age should increase by 1
    $('#increase-age').click(function() {
        var val = $('#age').html();
        $('#age').html(parseInt(val) + 1)
        $('#age').addClass("edited")
        $('#name').addClass("edited")
    });

    // Question 6b: When you click the - button, age should decrease by 1
    $('#decrease-age').click(function() {
        var val = $('#age').html();
        val--
        if (val <= 0) {
            val = 0
        }
        $('#age').html(parseInt(val))
        $('#age').addClass("edited")
        $('#name').addClass("edited")
    });

    // Question 7: When you change the age or the name, the changed text should become bold and italic
    // Tip: look at the CSS classes already available to you in the HTML files

    // Question 8: When you input a new skill, it should append to the list
    $('#skill-input').change(function() {
        let skill = $('#skill-input').val();
        $('#skills-list').append('<span>' + skill + '</span>');
        $('#skill-input').val('');
    })

    // Question 9: when you click the X button on a todo, delete the corresponding item from the table
    $('.remove-btn').click(function() {
        //$(this).closest('tr').remove();
        $(this).parent().parent().remove()
    });

    // Question 9b: When you click the 'Delete All' button, it should delete all items from the table
    $('#delete-all').click(function() {
        $('#todos').children().children().remove();
        //$('#todos tr').remove();
    });

    // Question 10: When you click the 'Complete' button on a todo, it should move the corresponding 
    // item to the Completed list
    // Optional: after moving the element, delete the 'Complete' button
    $('.complete-btn').click(function() {
        let item1 = $(this).closest('tr').children();
        $('#completed').append('<tr>', item1[0], item1[1], '</tr>')
        $(this).closest('tr').remove();
    });

    // Question 10b: When you click the 'Complete all' button, it should move ALL todos to the Completed list
    // Optional: after moving the elements, delete every 'Complete' button
    $('#complete-all').click(function() {
        let item1 = $('#todos').children().children();
        for (let index of item1) {
            index.children[1].remove();

        }
        for (let index1 of item1) {
            index1.children[1].remove();
        }
        $('#completed').append(item1)
    });

    // Question 11: when the 'Retrieve old comments' button is clicked, GET the comments from
    // https://testapi.io/api/reneab/comments
    // and display them at the BEGINNING of the comments list  
    $('#get-comments-btn').click(function() {
        $.ajax({
            type: 'GET',
            url: 'https://testapi.io/api/reneab/comments',
            success: function(data) {
                for (let item of data) {
                    $('#comments-list').append('<li>' + item.name + ' - ' + item.content + '</li')
                }
            },
            error: function() {
                alert('Error Retrieving Comments.\n TRY AGAIN!')
            }

        });

    });

    // Question 12: when the 'Submit' button is clicked for a comment, POST the new comment 
    // (and the user name) to https://testapi.io/api/reneab/comments/new
    // If response is a success:
    // 1) display the Response message
    // 2) display the new comment in the comments list 
    // 3) clear the inputs
    $('#submit-comment-btn').click(function() {
        let comment = $('#comment-body').val();
        let sender = $('#comment-name').val();
        $.ajax({
            type: 'POST',
            data: { name: sender, content: comment },
            dataType: 'text',
            url: 'https://testapi.io/api/reneab/comments/new',
            success: function(data) {
                $('#response-msg').text('Success');
            },
            error: function() {
                $('#response-msg').text('An error occured.\n TRY AGAIN!');
            }
        });
        $('#comments-list').append('<li>' + sender + '-' + comment + '</li')
        $('#comment-body').val('');
        $('#comment-name').val('');
    });

})