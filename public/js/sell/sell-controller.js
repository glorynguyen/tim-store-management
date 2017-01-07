var app = angular.module('tim', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.addManual = addManual;

    //Internal function
    function addManual() {
    	var disCount = document.querySelector('input[name="sex"]:checked').value;
	    var name = prompt("Vui lòng nhập tên sản phẩm");
	    if (name != null) {
	        var data = prompt("Giá");
	        if (data != null) {
	            var quantity = prompt("Số lượng", 1);
	            var price = parseInt(data);
	            var x = document.createElement("h6");
	            x.setAttribute("ondblclick", "selfRemove()");
	            // not display giam gia
	            if (disCount == "0") {
	                x.innerHTML = "<b>" + name + "</b><br/>Giá <b>" + addCommas(price.toString()) + " SL " + quantity + "       <br/>Thành tiền: <b>" + addCommas((price * quantity).toString()) + "</b>";
	            } else {
	                x.innerHTML = "<b>" + name + "</b><br/>Giá <b>" + addCommas(price.toString()) + "</b> Giảm giá <b>" + disCount * 100 + "%</b> SL " + quantity + "       <br/>Thành tiền: <b>" + addCommas(((price - price * parseFloat(disCount)) * quantity).toString()) + "</b>";
	            }

	            var div = document.getElementById("dataView");
	            if (price != null && name != null && !isNaN(price)) {
	                div.appendChild(x);
	                total();
	            }
	        }
	    }
    	$http({
    		method: 'GET',
    		url: 'http://localhost:3000/get-hello'
    	}).then(function(res) {
    	},function (err) {
    	})
    }
});