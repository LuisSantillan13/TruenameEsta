var filters = [];
$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');
  
	var catSelected = []; // array que almacenará las categorías seleccionadas
  
	// FILTRANDO PRODUCTOS  ============================================
  
	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);
	  
		// AGREGANDO O QUITANDO LA CATEGORÍA SELECCIONADA DEL ARRAY
		if (catProduct === 'all') {
		  catSelected = []; // Si se selecciona "Todo", vacía el array
		} else {
		  var index = catSelected.indexOf(catProduct);
		  if (index === -1) {
			catSelected.push(catProduct); // Agrega la categoría seleccionada al array
		  } else {
			catSelected.splice(index, 1); // Quita la categoría seleccionada del array
		  }
		}
	  
		// AGREGANDO O QUITANDO LA CLASE ACTIVE DEL ENLACE SELECCIONADO
		if ($(this).hasClass('ct_item-active')) {
		  $(this).removeClass('ct_item-active');
		} else {
		  $(this).addClass('ct_item-active');
		}
	  
		// AGREGANDO CLASE ACTIVE A LOS ENLACES SELECCIONADOS
		catSelected.forEach(function(cat){
		  $('.category_item[category="'+cat+'"]').addClass('ct_item-active');
		});
	  
		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
		  $('.product-item').hide();
		} setTimeout(hideProduct,400);
	  
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
		  if (catSelected.length === 0) {
			// Si no se ha seleccionado ninguna categoría, muestra todos los productos
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		  } else {
			// Muestra los productos que pertenecen a cualquier categoría seleccionada
			catSelected.forEach(function(cat){
			  $('.product-item[category="'+cat+'"]').show();
			  $('.product-item[category="'+cat+'"]').css('transform', 'scale(1)');
			});
		  }
		} setTimeout(showProduct,400);
	  });
  });

  