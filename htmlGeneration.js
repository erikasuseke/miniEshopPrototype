function createHtmlProductsTable(products = produktai) {
  let htmlCode = "";
  for (const indeksas in products) {
    const product = products[indeksas];
    htmlCode += `<tr>
        <td>${deleteIcon(indeksas)}${updateIcon(indeksas)}</td>
        <td>${product.title}</td>
        <td>${product.description.slice(0, 15)}...</td>
        <td>${product.stock}</td>
        <td>${product.price}€</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
    </tr>`;
  }
  return htmlCode;
}

function updateHtmlTable(products = produktai) {
  const htmlCode = createHtmlProductsTable(products);
  const tbodyElement = document.getElementById("products-list");
  tbodyElement.innerHTML = htmlCode;
}

function generateProducts() {
  const paruostiProduktai = produktai.map((product) => {
    return {
      ...product,
      priceWithDiscount: (
        (product.price * (100 - product.discount)) /
        100
      ).toFixed(2),
      displayPrice: product.price.toFixed(2),
    };
  });
  console.log(paruostiProduktai);
  let html = "";
  for (const produktas of paruostiProduktai) html += generateProduct(produktas);
  return html;
}

function generateProduct(product) {
  let html = "";
  if (product.discount > 0) html = generateProductWithDiscount(product);
  else html = generateProductWithoutDiscount(product);
  return html;
}

function generateProductWithDiscount(product) {
  return `<div class="product">
					<hr />
					<div class="product-details">
						<div class="image">
							<img
								src="https://placehold.co/200x200"
								alt="Produkto nuotrauka"
							/>
							<span class="discount">-${product.discount}%</span>
						</div>
						<div class="details">
							<h4>${product.title}</h4>
							<div data-coreui-toggle="rating" data-coreui-value="3"></div>
							<div class='rating' product-index='1'>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
							</div>
							<p>
								${product.description}
							</p>
						</div>
						<div class="price-and-actions">
							<div class="price-with-discount">
								<span class="discounted">${product.priceWithDiscount}€</span>
								<span class="old-price">${product.displayPrice}€</span>
							</div>
							<button>Add to cart</button>
						</div>
					</div>
				</div>`;
}
function generateProductWithoutDiscount(product) {
  return `<div class="product">
					<hr />
					<div class="product-details">
						<div class="image">
							<img
								src="https://placehold.co/200x200"
								alt="Produkto nuotrauka"
							/>
						</div>
						<div class="details">
							<h4>${product.title}</h4>
							<div class='rating'>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
								<i class='bi bi-star'></i>
							</div>
							<p>
								${product.description}
							</p>
						</div>
						<div class="price-and-actions">
							<div class="price">${product.displayPrice}€</div> 
							<button>Add to cart</button>
						</div>
					</div>
				</div>`;
}
