<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
//frappe.provide("shopping_cart");
var item_code,order_qty;

$('#item_menu').on('click','#btn-add-to-cart', function(){
  var row= $(this).closest("tr")[0];
  item_code=row.cells[0].innerHTML;
  order_qty=row.cells[5].getElementsByTagName("input")[0].value;
cart(item_code,order_qty);
//alert(item_code);
//change();
})
function cart(item_code,order_qty){

  frappe.call({
  	method: "opcart.www.opcart.update_cart",
    args: {
          item_code:item_code,
          qty: order_qty
        },
  	callback: (response) => {
  		console.log(response.message);
  	}
  });
//code to change the button app_color

//location.reload();
}
</script>
