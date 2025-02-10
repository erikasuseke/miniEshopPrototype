function deleteIcon(index) {
	return `<span
			class="icon icon-red"
			title="Pašalinti produktą"
            onclick="deleteProduct(${index})"
		>
			<i class="bi bi-trash-fill"></i>
		</span>`;
}

function updateIcon(index) {
	nowUpdatingProductIndex = index;
	return `<span
			class="icon icon-blue"
			title="Atnaujinti produktą"
			onclick="openModal(${index})"
		>
			<i class="bi bi-pencil-fill"></i>
		</span>`;
}

function nav () {
	return `<nav>
            <h2>Pardutuvė</h2>
            <div class = "navContainer">
                <a href="/shop/index.html">Shop</a>
                <a href="/">Admin</a>
            </div>
			<hr />
        </nav>`
}

function fillNavs () {
	const navigations = document.querySelectorAll('Navigation');
	for(const navigation of navigations) {
		navigation.innerHTML = nav();
	}
}

function halfStar () {
	return `<i class='bi bi-star-half'></i>`;
}

function emptyStar () {
	return `<i class='bi bi-star'></i>`;
}

function fullStar () {
	return `<i class='bi bi-star-fill'></i>`;
}

fillNavs();