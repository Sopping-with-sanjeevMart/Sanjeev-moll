let header = document.querySelector('#header'); 
header.innerHTML = `
<div class="row"> <!--Header Creation-->
    <div class="col-lg-3">
        <h1>Sanjeev&R</h1> <!--Logo-->
    </div>

    <div class="col-lg-7"> <!--Search box and button -->
        <div class="position-relative">
            <input 
                type="text" 
                id="searchInput" 
                placeholder="Product name, Category name etc." 
                style="height: 38px; width: 70%; margin-top: 12px; border-bottom-left-radius: 10px; padding-bottom: 3px; outline: none;" 
                oninput="showSuggestions(this.value)">
            <button 
                type="button" 
                class="btn btn-primary" 
                style="height: 38px; margin-top:8 px; margin-left: -5px;margin-bottom: 3px; border-bottom-right-radius: 10px; background-color: #008080; font-weight: bold;">
                Search
            </button>
            <div id="suggestions" class="suggestions"></div>
        </div>
    </div>

    <div class="col-lg-1" style="margin-top: 8px;"> <!--Login Button-->
        <a href="../Pages/Login.html"><button type="button" class="btn btn-primary" style="background-color: #008080; font-weight: bold;">Login</button></a>
    </div>

    <div class="col-lg-1"> <!--Cart Icon-->
        <a style="color: #008080;" href="../Pages/Cart.html"><img src="../Images/Icon/Cart.png" style="width: 45px; height: 45px; margin-top: 6px;"></a>
    </div>
</div>

<div class="row" id="navrow"> <!--Navigation bar creation-->
    <ul class="nav nav-tabs" id="navbar">
        <li class="nav-item"> <!--Home tab-->
            <a class="nav-link" href="../Pages/index.html">Home</a>    
        </li>
        <li class="nav-item"> <!--All Products tab-->
            <a class="nav-link" href="../Pages/All Products.html">All Products</a>   
        </li>

        <li class="nav-item dropdown" style="margin-right: 10px; margin-left: 5px;"> <!--Women tab-->
            <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" style="text-decoration: none;" id="navdd1">Women</a>   
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="../Pages/WomenAll.html">All</a></li>
                <li><a class="dropdown-item" href="../Pages/Dresses.html">Dresses</a></li>
                <li><a class="dropdown-item" href="../Pages/PantsW.html">Pants</a></li>
                <li><a class="dropdown-item" href="../Pages/Skirts.html">Skirts</a></li>
            </ul>
        </li>

        <li class="nav-item dropdown"> <!--Men tab-->
            <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" style="text-decoration: none;" id="navdd2">Men</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="../Pages/MenAll.html">All</a></li>
                <li><a class="dropdown-item" href="../Pages/Shirts.html">Shirts</a></li>
                <li><a class="dropdown-item" href="../Pages/PantsM.html">Pants</a></li>
                <li><a class="dropdown-item" href="../Pages/Hoodies.html">Hoodies</a></li>
            </ul>
        </li>
        <li class="nav-item"> <!--Kids tab-->
            <a class="nav-link" href="../Pages/Kids.html">Kids</a>
        </li>
        <li class="nav-item"> <!--Contact tab-->
            <a class="nav-link" href="../Pages/Contact.html">Contact</a>
        </li>
    </ul>
</div>
`;

const suggestions = [
"Men's Clothes",
    "Women's Clothes",
    "Kids' Clothes",
    "Shoes",
    "Accessories",
    "Dresses",
    "Shirts",
    "Pants",
    "Skirts",
    "Hoodies"
];

function showSuggestions(value) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    
    if (!value) return;

    const filteredSuggestions = suggestions.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
    );

    filteredSuggestions.forEach(item => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = item;
        suggestionItem.className = 'suggestion-item';
        suggestionItem.onclick = () => {
            document.getElementById('searchInput').value = item;
            suggestionsDiv.innerHTML = ''; // Clear suggestions
        };
        suggestionsDiv.appendChild(suggestionItem);
    });
}