function deleteProduct(index) {
	const confirmation = confirm("Ar tikrai norite pašaliti šį produktą?");
	if(confirmation) {
	// Iš masyvo šalinamas 1 elementas pradedant nuo index pozicijos
		produktai.splice(index, 1);
		updateHtmlTable();
		localStorage.setItem("produktai", JSON.stringify(produktai));
	}
}