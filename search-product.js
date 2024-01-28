document.getElementById('searchInput').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var products = document.getElementById('productList').getElementsByTagName('li');

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.textContent.toLowerCase();

        if (productName.indexOf(searchQuery) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
});