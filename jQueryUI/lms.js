$(document).ready(function() {
    let books = [
        { id: 0, title: 'PYTHON', category: "ict", img: "py.jpg", qty: '5' },
        { id: 1, title: 'JAVA', category: "ict", img: "java.jpg", qty: '5' },
        { id: 2, title: 'SQL', category: "ict", img: "sql.jpg", qty: '5' },
        { id: 3, title: 'RUBY', category: "ict", img: "ruby.jpg", qty: '5' },
        { id: 4, title: 'JAVASCRIPT', category: "ict", img: "js.jpg", qty: '5' },
        { id: 5, title: 'JQUERY', category: "ict", img: "jquery.jpg", qty: '5' },
        { id: 6, title: 'BIOLOGY', category: "sci", img: "bio.jpg", qty: '5' },
        { id: 7, title: 'GEOLOGY', category: "sci", img: "geo.jpg", qty: '5' },
        { id: 8, title: 'PHYSICS', category: "sci", img: "physics.jpg", qty: '5' },
        { id: 9, title: 'ASTRONOMY', category: "sci", img: "astro.jpg", qty: '5' },
        { id: 10, title: 'EARTH SCI.', category: "sci", img: "earth.jpg", qty: '5' },
        { id: 11, title: 'TECHNOLOGY', category: "sci", img: "scitech.jpg", qty: '5' },
    ]

    $('#information').hide();
    $('.info').click(function() {
        $('#information').show();
        $('.books').hide();
    });

    $('.close-info').click(function() {
        $('#information').hide();
        $('.books').show();
    });
})