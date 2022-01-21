
//DOM - DOCUMENT OBJECT 
// console.log(document);

// //HTML Selector
// //ID
// const app = document.getElementById("app");
// console.log(app);

// //Class Name
// const apps = document.getElementsByClassName("app-1");
// console.log(apps);
// console.log(apps[0]);
// console.log(apps[1]);

// //Tag name
// const divList = document.getElementsByTagName("div");
// console.log(divList);

// //QuerySelector, QuerySelectorAll(id="#id,className = "className", tagname="div");

// //Important Properties Methods
// //Properties
// console.dir(app);

// //text content
// console.log(app.innerHTML);
// app.innerHTML="<i>HELLO KHOA ĐÃ IN NGHIÊNG</i>"
// console.log(app.innerText);
// app.innerText = "<i>Hello everyone</i>";

// //style
// console.log(app.style);
// console.log(app.style.backgroundColor);
// console.log(app.style.backgroundColor="red");


//CHIRLDRESS, PARENTELEMENT
// const ul = document.getElementById("list");
// console.log(ul);
// console.log(ul.children[1]);
// //Bo bullet
// console.log(ul.style.listStyle="none");
// console.log(ul.id);

// console.log(ul.classList);
// ul.classList.add("cl4");



/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});







