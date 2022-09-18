

function calculator() {
    var option = document.getElementById("weight_option");
    let total_weight = document.getElementById("total_weight_input").value;
    let product_weight = document.getElementById("product_weight_input").value;
    if (option.value == 2){
        total_weight *= 1000;
        product_weight *= 1000;
    }
    let each_weight_price =  total_weight / product_weight ;
    let each_product_price = each_weight_price * document.getElementById("product_weight_input").value
    document.getElementById("each_weight_price_label").innerHTML = "مبلغ به ازای هر گرم";
    document.getElementById("product_price_label").innerHTML = "مبلغ هر عدد محصول";
    document.getElementById("each_weight_price").innerHTML = each_weight_price ;
    document.getElementById("product_price").innerHTML = each_product_price;
}