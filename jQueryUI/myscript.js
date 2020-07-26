$(document).ready(function() {


    let qty = $('.card').children().find('.qty');
    for (let item of qty) {
        if ($(item).text() == 0) {
            $(item).parent().css('opacity', .4)
            $(item).parent().parent().find('.btn').addClass('btn-secondary')
            $(item).parent().parent().find('.btn').attr('disabled', 'disabled')
        }
    }

    $('.item').click(function() {
        let qty = parseInt($(this).parent().parent().find('.qty').text())
        let bookTitle = $(this).parent().attr('title');
        if ($('#cartlist').children().length != 6) {
            $(this).parent().parent().find('.qty').text(qty -= 1)
            if (qty == 0) {
                $(this).parent().parent().find('.qty').addClass('bg-danger')
                $(this).text('NOT AVAILABLE')
                $(this).attr('disabled', 'disabled')
                $(this).addClass('btn-secondary')
                $(this).parent().css('opacity', .4)
            }
            $('#cartlist').append('<button class = "cartItem btn btn-secondary mx-2 mt-2">' + bookTitle + '</button>');
        } else(
            alert('You reach the maximum book to borrow')
        )

    });
    var id = "#book1"
    $('#science').on('click', function() {
        let cat = $('#science').attr('id');
        if (cat == 'science') {
            id = '#book2'
        }
    })

    $('#cartlist').on('click', '.cartItem', function() {
        let bookTitle = $(this, '.cartItem').text();
        let array = $(id).children().children().children();
        $(this).remove()
        for (let item of array) {
            if (item.title == bookTitle) {
                let qty = parseInt(item.children[0].children[1].innerHTML);
                item.style.opacity = 1;
                item.children[0].children[1].innerHTML = qty + 1;
                $(item).parent().find('.btn').removeClass('btn-secondary');
                $(item).parent().find('.btn').removeAttr('disabled');
                $(item).children().find('.qty').removeClass('bg-danger')
            }

        }

    });

    function printData() {
        var divToPrint = document.getElementById("cartlist");
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
    }

    $('#print').on('click', function() {
        printData();
    })


    $('#science').on('click', function() {
        $('#sciencecat').removeClass('w3-hide')
        $('#itcat').addClass('w3-hide')
    })

    $('#it').on('click', function() {
        $('#sciencecat').addClass('w3-hide')
        $('#itcat').removeClass('w3-hide')
    })
})