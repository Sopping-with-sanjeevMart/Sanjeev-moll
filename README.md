# E-Commerce-Frontend
This is my first project where I used HTML, CSS, Bootstrap to create it. For DOM manipulation I have used JavaScript. I have also used JS for giving small functionalities like increasing cart items after adding them. I have also made this website responsive.
Thought Note for the E-Commerce Website.

    1.First of all I have created a folder named E-Commerce Website
    2.Then I have downloaded all the required images and sorted them with structured folders.
    3.Then I have added the images folder to the main folder.
    4.Then I have opened the visual studio and opened the main folder there.
  
Note: 
    For this project I have used bootstrap version v5.0.2.

Pages:
 
    In the main folder I have created a sub-folder and in that I have created the required html blank pages for our project.

Creating the Header:

      1.Firstly I have created a dummy html file for header and footer(Will explain later) creation.
      2.I have created html, head and body tags.
      3.I have added the required Bootstrap CSS link in the head section and Bootstrap JS link just above the end body tag.
      4.Then I have created a div element with class 'container-fluid' and id as 'header'

  Logo, search box, Login button and Cart button:

      5.Inside the div element I have created another div element with class row and in that I have created 4 div elements using bootstrap column class.
      6.We know that bootstrap divides a page into 12 equal columns so I have allocated first 3 columuns to 1st div element, 7 columns to next div element,
      1 column each to next two div elements.
      7.I have used the class only for large screens i.e., 'col-lg' so that for medium and small screens the div elements will occupy 4 different rows.
      8.In the 1st div element I have added the name of my website i.e, "dreYESitt" with h1 tag.
      9.In the 2nd div element I have added an input with text type and added a placeholder text for it.
     10.I have applied internal styling for some necessary adjustments using height, width, margin, border-radius, padding and outline properties.
     11.Then in the same div element I have created a button and used the bootstrap primaty button with class name "btn btn-primary" and with inside text 
        as "Search"
     12.I have applied internal styling for some necessary adjustments using height, margin, padding, border-radius, background-color and font-weight properties.
     13.In the 3rd div element I have created a link with anchor tag 'a' and made it into a button using bootstrap primary button property and with inside 
        text as "Login".
     14.Using the href attribute I have linked this button to the "Login.html" page that I have created in the Pages.
     15.Then using inline styling I have added bg color and font weight.
     16.In the 4th div element I have created an image link with nested tags i.e., img tag inside the anchor tag.
     17.Added color to anchor tag and width, height and margin to the img tag using inline styling.
   
  Navigation Bar:
     18.Now I have created a new div with class row and id as 'navrow' inside the 'header' div.
     19.Using bootstrap class 'nav nav-tabs' I have added an unorder list ul.
     20.Inside the ul list I have created 6 list items with tag li and using bootstrap class 'nav-item'
     21.In the 1st list item I have created a link using anchor tag with class name 'nav-link', name as Home and linked it to "index.html" using href.
     22.Similarly in the 2nd list item I have created a link for 'All Products' and linked it to "All Products.html".
     23.So in the 3rd list item I needed a dropdown for Women products catogaries.
     24.For that I have used the bootstrap class 'nav-item dropdown' and id as "navdd1" in the list tag with inside text as "Women".
     25.Inside the list I have created an anchor tag with bootstrap class 'nav-item dropdown-toggle' and applied another attribute 'data-bs-toggle = "dropdown"'
        for the toggling of dropdown.
     26.Then I have created an unordered list with class as "dropdown-menu".
     27.Inside this I have created 4 list items with links inside them and linked them to the pages such as "WomenAll.html", "Dresses.html", "PantsW.html" and "Skirts.html".
     28.In the similar way I have created a dropdown to Men products and linked them to "MenAll.html", "Shirts.hmtl", "Hoodies.hmtl" and "Pants.html".
     29.Then in the last two list items I have created one link in each of them and linked them to "Kids.html" and "Contact.html" respectively.
    
Styling the Header:
     
      1.I have done a bit part of the header styling as Inline styling which I have explained in the above points.
      2.For the remaining amount of styling for header I have used the external styling method.
      3.So I have created a sub-folder named CSS and inside that I have created a file named "style.css".
      4.I have linked this file in the head section of HTML file.
      5.So first of all I have targetted the id "header" using "#header" in the CSS and styled it using color, bg-color.
      6.To make it fix i.e., not to move while scrolling I have set the position to "fixed".
      7.Next I have targetted the id "navbar" using "#navbar" and set the display to flex aand aligned the items to center.
      8.I have also added the bg-color to the navbar.
      9.Next using CSS combinators property, I have targetted all the links(anchor tags) in the navbar and gave them color and font-weight.
     10.Then I styled the dropdown items which are given by ids #navdd1 and #navdd2.
     11.I have added the padding and border-radius for the dropdowns.
     12.Then using pseudo-classes I have set the outline for dropdowns while hovering.
     13.Then again using pseudo-classes I have gave some bg-color to all navbar elements while hovering.
     14.Then for the dropdown items I have given the display property as block so that the dropdown will be visible while hovering only and gave some margin.
     15.From this the header styling is completed.

Creating the footer:
      1.For creating the footer in the dummy sheet first I have created a div with id as "footer".
      2.Inside this I have created a div with class row and added some inline styling for aligning the text to center.
      3.Then inside the row element I have created 8 divs with bootstrap column classes.

   Large screens:
      4.For the 1st 4 divs I have given the class as "col-lg-3 col-12 d-lg-block d-none" which means the whole display will be 
        divided into 4 equal columns in large screens.
      5.I have used 'd-lg-block' so that in the large screens the screen will divide into 4 columns.
      6.I have used 'd-none' so that this content won't be visible in the medium and small screens.
      7.Then in the next 4 divs I have given the class as "col-lg-3 col-12 d-lg-none d-none".
      8.This means in the large screens the content under these divs won't be visibile.
      9.I have put "d-block" which means in the medium and small screens each row will be having only one column such
        that the 4 divs will take 4 different rows.
     10.Coming to the first 4 divs, in the 1st div I have created a h5 tag and insid that I have added a link using 
        anchor tag named "Women" and I have linked this to "WomenAll.html" using href.
     11.Then I have created an unordered list ul with three list items in it and gave some padding.
     12.In 3 list items I have created one link each and linked them to corresponding html files of dresses, women pants and 
        women skirts.
     13.Similarly in the second div element I have created an unordered list and created 3 list items with one anchor tag each and 
        linked them ti corresponding html files of Hoodies, shirts and pants.
     14.Coming to third div element I have created a h5 tag and created a link in it and linked it to kids.html.
     15.Meanwhile in the fourth div element I have created a h5 tag named Links.
     16.After that I have created the unordered list with 3 list items in it.
     17.In each list item there is a link and they are linked to index.html, login.html and contact.html using href.
     18.So the first 4 div elements are done such that for the large screens.
   
   Medium and small screens
     19.Now coming to next 4 div elements, such that for medium and small screens I have added the same data that I 
        have added in the large screens so that the same data will be sorted in 4 rows in medium and small screens.
     20.Then I have given horizontal line using <hr> tag.
     21.Then I have created p tag for copyright text and I have used "&copy" to get the copyright symbol.
     22.So the footer creation is completed.

Styling the footer:
      1.I have used inline styling for few tags.
      2.For remaining things I am using the external style sheet such that "style.css" as follows.
      3.Using combinators I have targetted all the ul tags inside the #footer id.
      4.In this I have set the list-style-type to none.
      5.Then I have selected all the 'h5' tags inside footer using combinators and added some top padding.
      6.Then I have selected all the 'a' tags inside footer using combinators and added text-decoration to none 
        and added color to the text.
      7.So the footer styling is done.

From above the header and footer creation is done. Since almost every page requires this header and footer it will take too much space if we copy paste it.
To overcome this it is better add the header and footer dynamically using Javascript.


Using JS for header and footer:

   Header using JS:
      1.Firtsly I have created a sub-folder named 'JS' and in that I have cerated a file named 'header.js'
      2.In this I have declared a variable named 'header' using let.
      3.Using the query selector property such that "document.querySelector" I have targetted the id header (#header) and assigned this to the 
        header variable.
      4.This means the varible header stores the value "document.querySelector('#header')".
      5.Then I have created a method 'header.innerHTML' and I have added all the html code which is used to created header to it inside the backticks.
      6.So we can use this file to add the header dynamically to all the pages which I will show further.
 
   Footer using JS:
      1.Similar to header creation in the JS sub-folder I have created a file named 'footer.js'
      2.In this I have declared a variable named 'footer' using let.
      3.Using the query selector property such that "document.querySelector" I have targetted the id header (#footer) and assigned this to the 
        footer variable.
      4.This means the varible footer stores the value "document.querySelector('#footer')".
      5.Then I have created a method 'footer.innerHTML' and I have added all the html code which is used to created footer to it inside the backticks.
      6.So we can use this file to add the footer dynamically to all the pages which I will show further.


****Since I have added all the header and footer HTML code in the innerHTML of JS files I deleted the dummy html file Which I have used to created header 
    and the footer. 


Home Page Creation (index.html) : 

     1.First of all in the index.html, I have created the html, head and body tags with required prerequisties.
     2.Then in the head tag I gave the title of the document as "Home Page".
     3.Then I linked the external style sheet "style.css" by using link tag.
     4.Then below it I have added the bootstrap CSS link.
     5.Below it I have used style tags for internal styling.
     6.Also above the end body tag I have linked the bootstrap JS link.

  Injecting header dynamically using JS:
     7.In the body I have created a div tag with class "container-fluid" and id as "header" and I have left it empty 
       without any content.
     8.Then above the end body tag I have linked the "header.js" file using the script tag.
     9.So doing this the header can be injected dynamically into the Home page.

  Injecting footer dynamically using JS:
     10.Similar to above in the body I have created a div tag with id as "footer" and I have left it empty 
       without any content.
     11.Then above the end body tag I have linked the "footer.js" file using the script tag.
     12.So doing this the footer can be injected dynamically into the Home page.

  Note: 
      By this way we can inject the header and footer to all the available pages dynamically using js.
     
   Home page content:

     13.After injecting the header and footer now we need to add the content in the home page between these two.
     14.First I have created a div with id 'home' and added height and width using inline styling.
     15.Inside this div I have created h1 tag with name of the website "dreYESitt".
     16.Then I have added some text using p tag.

   Carousels:
     17.I have created a div using id 'products'.
     18.Inside this div I have created a h1 tag named 'Featured Products' and added some inline styling.
     19.Then using bootstrap I have copied the code used for carosuels and added it in the body.
     20.After adding it inside the carosuel-inner class I have replaced the img tags inside the carousel items using divs with class as row.
     21.So coming to the 'carousel-item active' which is the active item I have added the required data as follows.
   
  Slider-1 (Men Products):

   Large Screens:

     22.Inside the row class div first I have created 4 div items with class "col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none" which means
        the data under these divs will be displayed only in larger screens but not in medium and smaller screens.
     23.And also in the large screens, the screen will be divided into 4 equal columns as we used "col-lg-3"
     24.Then inside each div I have added bootstrap cards with image of the men products and price and some text and I have also added a button
        named 'add to cart'.
     25.So that in large screens 4 cards will be displayed.

  Medium Screens:
     26.Then I have created two more divs items with class "col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none" which means the data under these
        divs will be displayed only in medium screens.
     27.And also in the medium screens, the screen will be divided into 2 equal columns as we used "col-md-6"
     28.Then inside each div I have added the bootstrap cards with image of the men products and price and some text and I have also added a button
        named 'add to cart'
     29.So that in medium screens 2 cards will be displayed.

  Small Screens:
     30.Then I have created one more div item with class "col-lg-3 col-md-6 col-12 d-lg-none d-md-none d-block" which means the data under this
        div will be displayed only in small screens.
     31.And also in the small screens, the screen will be displayed as only one column as we used "col-12"
     32.Then inside each div I have added the bootstrap cards with image of the men product and price and some text and I have also added a button
        named 'add to cart'
     33.So that in medium screens 2 cards will be displayed.
 
     34.By this the first slider is created.
   
  Slider-2 (Women Products) and Slider-3 (Kids):

     35.Similar to Slider-1 I have created the next two slider for large, medium and small screens.

Styling the Home page:

   1.For few elements I have used inline styling.
   2.For the remaining part (excluding header and footer) I have used internal styling in the head tag as follows.
   3.In the id home such that #home, I have added a bg-image with bg-repeat as 'no-repeat' and bg-size as 'cover' so that the image won't repeat
     and it will cover the fully available viewport.
   4.Now using combinators property I have styled the h1 tag in the id home as follows.
   5.I have added the color to the text, font-size, aligned the text to center, added some padding on top and added text shadow.
   6.Now again using combinators I have styled the p tag in the home id as follows.
   7.I have added the color, text alignment, text-shadow and font-size.
   8.Since the card is showing on top of header while scrolling, I have sorted it using z-index property.
   9.Now using CSS media queries, I have adjusted the font-size and text-alignment for h1 element in the home id at different screen resolutions.
  10.Then for the cards in the products id I have added the margin as auto.
  11.I have also added some bg-color to the button inside the cards.

  So from this the Home page creation is completed.

All Products Page (All Products.html) :
    
    1.First of all in the All Products.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "All Products".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

  Page Content:
     
    8.First of all between header and footer I have created a div with two class names "container-fluid proCards" and
      id as "Allp".
    
   Men Section:
     
    9.Coming to the men section inside the above div I have created 3 divs with class row.
   10.In the 1st div I have created a h1 tag named "All Products", a h2 tag named "Men" and a h3 tag named "Shirts".
   
   Large screens:
    
    11.In this I have created 6 divs for 6 items, and used bootstrap class named "col-lg-2 col-md-4 col-6 d-lg-block d-md-none d-none".
    12.This will show the content inside the divs only in larger screens and col-lg-2 means it will divide the screen into 6 equal columns.
    13.Inside each div I have place a bootstrap card (width 12rem in larger screens) with images of shirts, price, some text and a button named "Add to cart".
    14.So this will show 6 cards in large screens in one row.

   Medium screens:

    15.In this I have created 6 divs for 6 items, and used bootstrap class named "col-lg-2 col-md-4 col-6 d-lg-none d-md-block d-none".
    16.This will show the content inside the divs only in medium screens and col-md-4 means it will divide the screen into 3 equal columns
       so that the 6 cards will be shown in two different rows.
    17.Inside each div I have place a bootstrap card (width 15rem in medium screens) with images of shirts, price, some text and a button named "Add to cart".
    18.So this will show 3 cards in medium screens in each row.

   Small screens:
     
    19.In this I have created 6 divs for 6 items, and used bootstrap class named "col-lg-2 col-md-4 col-6 d-lg-none d-md-none d-block".
    20.This will show the content inside the divs only in small screens and col-6 means it will divide the screen into 2 equal columns
       so that the 6 cards will be shown in three different rows.
    21.Inside each div I have place a bootstrap card (width 9rem in small screens) with images of shirts, price, some text and a button named "Add to cart".
    22.So this will show 2 cards in small screens in each row.

  In the similar way I have created the remaining prdoucts in men section i.e., men pants and hoodies.

  
  Women Section and Kids Section:
   
   Just similar to above I have created the items for women and kids section.


Styling the All Products Page:

    1.Apart from inline styling I have used internal styling in the style tag of head section as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #Allp.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h1 tag I have added some font color.
    9.Then for the h3 tag I have added some font color.
   
   So from this the All products page is created.


Note******: I have styled all the images in the external style sheets using the class ".proCards" at different screen resolutions using the CSS media queries.
            I have also added the color to all "Add to Cart" buttons in the external stylesheets.

Women All page (WomenAll.html):

    1.First of all in the WomenAll.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Women All Products".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpW'.
    9.Then I have copied the Women products code from the Allp products page and pasted in between the header and footer tags.
    
Styling the Women All page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpW.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Women All products page is created.

Women Dresses page (Dresses.html):

    1.First of all in the Dresses.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Women Dresses".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpW'.
    9.Then I have copied the Women Dresses code from the Allp products page and pasted in between the header and footer tags.
   10.I have added the same items in the both rows for the content.
    
Styling the Women Dresses page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpW.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Women dresses page is created.

Women Pants page (PantsW.html):

    1.First of all in the PantsW.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Women Pants".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpW'.
    9.Then I have copied the Women Pants code from the Allp products page and pasted in between the header and footer tags.
   10.I have added the same items in the both rows for the content.
    
Styling the Women Pants page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpW.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Women Pants page is created.

Women Skirts page (PantsW.html):

    1.First of all in the Skirts.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Women Skirts".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpW'.
    9.Then I have copied the Women Skirts code from the Allp products page and pasted in between the header and footer tags.
   10.I have added the same items in the both rows for the content.
    
Styling the Women Skirts page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpW.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Women Skirts page is created.


Men All page (MenAll.html):

    1.First of all in the MenAll.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Men All Products".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpM'.
    9.Then I have copied the Men products code from the Allp products page and pasted in between the header and footer tags.
    
Styling the Men All page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpM.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Men All products page is created.

Men Shirts page (Shirts.html):

    1.First of all in the Shirts.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Men Shirts".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpM'.
    9.Then I have copied the Men Shirts code from the Allp products page and pasted in between the header and footer tags.
   10.I have added the same items in the both rows for the content.
    
Styling the Men Shirts page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpM.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Men Shirts page is created.

Men Pants page (PantsM.html):

    1.First of all in the PantsW.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Men Pants".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpM'.
    9.Then I have copied the Men Pants code from the Allp products page and pasted in between the header and footer tags.
   10.I have added the same items in the both rows for the content.
    
Styling the Men Pants page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpM.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Men Pants page is created.

Men Hoodies page (Hoodies.html):

    1.First of all in the Hoodies.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Men Hoodies".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.
    
    7.Then I have injected the header and footer dynamically using JS.

   Page Content:

    8.Coming to page content first I have created a div using two classes named "container-fluid proCards" and id as 'AllpM'.
    9.Then I have copied the Men Hoodies code from the Allp products page and pasted in between the header and footer tags.
   10.I have added the same items in the both rows for the content.
    
Styling the Men Hoodies page:
    
    1.I have styled this using internal styling as follows.
    2.Added margin and padding as 0 and box-sizing to border-box for whole container.
    3.The for the whole body I have added bg-color.
    4.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    5.Using CSS media queries added top padding at different screen resolutions for id #AllpM.
    6.Then for all the cards in the container I have added the margin as 'auto'.
    7.Then for all the heading tags I have added some bg-color and aligned the text to center.
    8.Then for the h3 tag I have added some font color.

   So from this the Men Hoodies page is created.


  Similar to above process I have created the Kids page such that (kids.html)
 
 
Login Page:

    1.First of all in the Login.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Login".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.

   Page Content:
    
    7.I have created a div element with class "container-fluid".
    8.Inside this I have added a h1 tag with some inline styling and named as 'Login'.
    9.Then I have created a form using form tag and the name as "loginform".
    10.Inside the form I have added a h5 tag named 'Email:'.
    11.Then I have created a text type input field with name as 'id' and with some placeholder.
    12.Then I have added some space using br.
    13.Then again I have added a h5 tag named "Password:".
    14.Then I have created a text type input field with name as 'pass' and with some placeholder.
    15.Then I have added some space using br.
    16.Then I have created a primary button using bootstrap and applied some inline styling.
    17.So from this the visual part is done.


Styling Login Page:
    18.In the internal styling of login page, I have added margin and padding as 0 and box-sizing to border-box for whole container.
    19.Then I have added the bg-color to the body.
    20.Then using CSS media queries, I have added the width of input field and button, margin for the form at different screen resolutions.


   Page functionality using JS:

    1.First of all in the button I have added an "onclick" event and assigned it to a function named login(this.form).
    2.Then in the JS sub-folder I have created a login.js file and linked it to the login.html above the end body tag using script tag.
    3.Now in the login page I have created a function named login with parameter as 'form'.
    4.In the funcyion I have declared two variables named 'eMail' and 'password' and assigned the value from the form in the login.html as follows.
    5.So 'form.id.value' will target the id named input field and the value will be stored in the eMail variable.
    6.So 'form.pass.value' will target the pass named input field and the value will be stored in the password variable.
    7.Now I have used the if condition as follows.
    8.So that if the value stored in the eMail variable is equal to the text "admin@admin.com", then I have used and condition (&&)
       and if the value stored in the eMail variable is equal to the text "123456".
    9.Since we have used the && logic, the condition will be true only if the both the conditions are true.
    10.So if the whole condition is true I have added the output as alert type such that the output after clicking on the button will 
       be an alert saying with text "Login Successful".
    11.Then I have used else which means if the condition fails that means atleast one of the statement is false then the output after 
       clicking on the button will be an alert saying "Incorrect email or password"
    

  Hence the Login page creation is successful.

Cart Page creation:

    1.First of all in the cart.html, I have created the html, head and body tags with required prerequisties.
    2.Then in the head tag I gave the title of the document as "Cart Page".
    3.Then I linked the external style sheet "style.css" by using link tag.
    4.Then below it I have added the bootstrap CSS link.
    5.Below it I have used style tags for internal styling.
    6.Also above the end body tag I have linked the bootstrap JS link.

    7.Then I have injected the header and footer dynamically using JS.

   Page Content: 
 
    8.First of all I have created a div with class as "container-fluid" and id as "cartP".
    9.Then in that div I have created another div with class row.
    
   Large Screens:
    10.In the row div, I have created two divs with the class name as "col-lg-8 col-md-12 col-12 d-lg-block d-md-none d-none".
    11.This bootstrap class makes the content only visible in large screens.
    12.Then for the first div I have used "col-lg-8" and for second div I have used "col-lg-4" which means the content under
       the first div will occupy 8 bootstrap columns and second div will occupy rest 4 columns.
    13.Then in the first div I have created another div with class 'row' and in that I have made a heading with h2 tag.
    14.Then I have created three more divs with class "col-4" so that space will be ocuupied by the 3 divs equally.
    15.Then in the 1st div I have placed an image.
    16.In the second div I have placed a heading, price, and a bootstrap button using delete icon with inline styling.
    17.Then in the 3rd div I have created two buttons for increment and decrement of products quantity and an input field
       in between them with some inline styling adjustments.
    18.I have also added 'readonly' property so that the field can't be edited by user.
    19.By now the first div with class "col-lg-8" is created.
    20.Now coming to the second div with class "col-lg-4", I have added a bootstrap card inside it and edited with the cost, shipping cost and total.
    21.I have also added a bootstrap button as "Checkout".
    22.I have also made some inline styling for some adjustments.
 
  Medium Screens and Small Screens:
    23.Similar to above using the classes "col-lg-8 col-md-12 col-12 d-lg-none d-md-block d-none" and "col-lg-8 col-md-12 col-12 d-lg-none d-md-none d-block"
       I have created the content for medium and small screens.
 
   By this I have created the cart page.


Styling the cart Page: 

    24.Apart from inline styling I have also made some internal styling.
    25.I have styled this using internal styling as follows.
    26.Added margin and padding as 0 and box-sizing to border-box for whole container.
    27.Then for the whole body I have added bg-color.
    28.Sorted the issue where the card is clipping the header while scrolling using z-index property.
    29.Using CSS media queries added top padding to card and image width, height at different screen resolutions.


Functionality to Cart Page using JS:
    
     1.First of all I have created a JS file in the JS sub-folder and named it as "cart.js"
     2.Now in the html code for the + and - buttons I have added onclick events with functions.
     3.At first I have added the same functions fin all screen resolutions and it resulted in disturbances of the page.
     4.So I have added funtions separately as follows.
     5.For + and - buttons in large screens I have added the onclick events with functions "addL()" and "subL"
     6.Then for medium screens I have added "addM()" and "subM()".
     7.Then for small screens I have added "addS()" and "subS()".
     8.Then in the "cart.js" file I have created the functions as follows.

  Addition function:
 
     1.First I have declared a variable named "value" with var.
     2.Then I have assigned the value "document.getElementByID("numL").value" which will target the id in the html which is an 
       input field and that input field's value will be stored in the variable 'value'.
     3.Then I have used ternary operator as follows.
     4.I took the varaible named 'value' and checked the value stored in it is a "not a number" or not by using "isNaN()".
     5.So if the value is not a number then the condition is true so the value will '0' and if the condition is flase the value of
       the variable will remain same.
     6.So by this the varible named 'value' will have a number type value in it.
     7.Then I took if condition and used the condition as "value<100" so that it will check the value is less than 100 or not.
     8.If it is true then the value will be incremented by 1 since I have used "value++".
     9.Then I have set the output as follows.
    10. "document.getElementById("numL").value = value;" which will set the input field value in html.
    11.So by this if the value in input field is less than 100 on clicking the + button it will be incremented by 1.

 Subtarction function: 
     
     1.First I have declared a variable named "value" with var.
     2.Then I have assigned the value "document.getElementByID("numL").value" which will target the id in the html which is an 
       input field and that input field's value will be stored in the variable 'value'.
     3.Then I have used ternary operator as follows.
     4.I took the varaible named 'value' and checked the value stored in it is a "not a number" or not by using "isNaN()".
     5.So if the value is not a number then the condition is true so the value will '0' and if the condition is flase the value of
       the variable will remain same.
     6.So by this the varible named 'value' will have a number type value in it.
     7.Then I took if condition and used the condition as "value<100" so that it will check the value is less than 100 or not.
     8.If it is true then the value will be decremented by 1 since I have used "value--".
     9.Then I have set the output as follows.
    10. "document.getElementById("numL").value = value;" which will set the input field value in html.
    11.So by this if the value in input field is less than 100 on clicking the - button it will be decremented by 1.

  By using the exact same logic I have created the functions "addM()", "addS()", "subM()" and "subS()".

    Hence the cart page creation is done.




    By this the Ecommerce Website is created.


    Thank you, 
    Hemanth
   



    








