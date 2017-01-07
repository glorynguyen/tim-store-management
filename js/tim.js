function fire() {
    var key = document.getElementById("textInput").value;
    var file = document.getElementById("file").files[0];
    // var my_file = new File(["C:\\"],"data.txt");
    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        // Entire file
        //console.log(this.result);

        // By lines
        //Check isExist product.
        var count = 0;
        // Get % discount
        var disCount = document.querySelector('input[name="sex"]:checked').value;
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            if (lines[line].split(",")[1] == key) {
                count++;
                var quantity = prompt(lines[line].split(",")[0] + "\nSố lượng", 1);
                var x = document.createElement("h6");
                x.setAttribute("ondblclick", "selfRemove()");
                var pr = parseInt(lines[line].split(",")[2]);
                // not display giam gia
                if (disCount == "0") {
                    x.innerHTML = "<b>" + lines[line].split(",")[0] + "</b><br/>Giá <b>" + addCommas(lines[line].split(",")[2]) + " SL " + quantity + "       <br/>Thành tiền: <b>" + addCommas((pr * quantity).toString()) + "</b>";
                } else {
                    x.innerHTML = "<b>" + lines[line].split(",")[0] + "</b><br/>Giá <b>" + addCommas(lines[line].split(",")[2]) + "</b> Giảm giá  <b>" + disCount * 100 + "% </b> SL " + quantity + "       <br/>Thành tiền: <b>" + addCommas(((pr - parseInt(lines[line].split(",")[2]) * parseFloat(disCount)) * quantity).toString()) + "</b>";
                }

                var div = document.getElementById("dataView");
                if (!isNaN(pr) && quantity != null) {
                    div.appendChild(x);
                    total();
                }

            }
        }
        if (count == 0) {
            alert("Mã sản phẩm không tồn tại, vui lòng nhập tên sản phẩm");
            var caption = document.getElementById('captioninput');
            caption.innerHTML = 'Tìm sản phẩm theo tên';
            caption.setAttribute('style', 'color:#941594; cursor: pointer;');
            document.getElementById('inputDiv').appendChild(caption);
            var input = document.getElementById('textInput');
            input.setAttribute('searchName', true);
            input.setAttribute('style', 'color: #941594');

        }
    };
    reader.readAsText(file);
}

function onkeyDown() {
    resetHint();
    var input = document.getElementById('textInput');
    if (input) {
        var isSearchName = input.getAttribute('searchName');
        if (isSearchName && isSearchName == "true") {
            var file = document.getElementById("file").files[0];
            var reader = new FileReader();
            reader.onload = function(progressEvent) {
                var disCount = document.querySelector('input[name="sex"]:checked').value;
                var input = document.getElementById('textInput');
                var lines = this.result.split('\n');
                for (var line = 0; line < lines.length; line++) {
                    var removedUnicode = removeVni(lines[line].split(",")[0]);
                    if (removedUnicode.indexOf(input.value.toLowerCase()) > -1 && input.value.length > 2) {
                        var hint = document.getElementById("hint");
                        var ul = document.createElement('ul');
                        var li = document.createElement('li');
                        li.textContent = lines[line].split(",")[0] + ": " + lines[line].split(",")[2];
                        li.setAttribute('style', 'color:#941594; cursor: pointer;');
                        li.onmouseover = function() {
                            this.setAttribute('style', 'color: #EF08EF; cursor: pointer;');
                        }
                        li.onmouseleave = function() {
                            this.setAttribute('style', 'color: #941594; cursor: pointer;');
                        }
                        li.onclick = function() {
                            var name = this.innerHTML.split(':')[0].trim();
                            var data = this.innerHTML.split(':')[1].trim();
                            if (data && name) {
                                var quantity = prompt("Số lượng", 1);
                                var price = parseInt(data);
                                if (price) {
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
                            resetHint();
                            input.value = "";
                        }
                        ul.appendChild(li);
                        hint.appendChild(ul);
                    }
                }
            };
            reader.readAsText(file);
        } else {
            if (event.keyCode == 13) {
                var text = document.getElementById("textInput");
                if (text.value != "") {
                    fire();
                    text.value = "";
                }
            }
        }
    }
}

function reset() {
    var myNode = document.getElementById("dataView");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    document.getElementById("total").innerHTML = "Tổng: 0";
}

function removeVni(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

/**Selected file in file input**/
function onSelectedFile() {
    var fileInput = document.getElementById('file');
    //Hide file input after selected
    if (fileInput) {
        fileInput.setAttribute('style', 'display: none;');
    }
}

function resetHint() {
    var myNode = document.getElementById("hint");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function total(remove) {
    var div = document.getElementById("dataView");
    var totalField = document.getElementById("total");
    if (div.children.length == 0) {
        totalField.innerHTML = "Tổng: 0";
    } else {
        var total = 0;
        for (var i = 0; i < div.children.length; i++) {
            var value = div.children[i].innerHTML.split(":")[1];
            //add STT
            if (div.children[i].innerHTML.split(".").length == 1 || remove) {
                if (remove) {
                    div.children[i].innerHTML = div.children[i].innerHTML.substring(3, div.children[i].innerHTML.length - 1)
                }
                div.children[i].innerHTML = (i + 1).toString() + ". " + div.children[i].innerHTML;
            }
            value = replaceAll(value, "<b>", "");
            value = replaceAll(value, "</b>", "");
            // remove commas
            value = removeCommas(value);
            total += parseInt(value);
        }
        totalField.innerHTML = "Tổng: " + addCommas(total);
    }
}

function print() {
    hiddenElements(["file", "inputDiv", "textInput", "print", "choose", "tinhtien", "addmanual", "thongtinkhachhangbtn", "captioninput"], true);
    var datetime = "Ngày: " + getCurrentDateTime();
    var dateField = document.getElementById("dateField");
    dateField.innerHTML = datetime;
    tienthua();

}

function reset1() {
    hiddenElements(["file", "inputDiv", "textInput", "print", "choose", "tinhtien", "addmanual", "thongtinkhachhangbtn", "captioninput"], false);
    reset();
}

function addMore() {
    hiddenElements(["file", "inputDiv", "textInput", "print", "choose", "tinhtien", "addmanual", "thongtinkhachhangbtn", "captioninput"], false);
    document.getElementById("tinhtien").innerHTML = "";
}

function focusTo() {
    document.getElementById("textInput").focus();
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function removeCommas(str) {
    var result = replaceAll(str, ',', '');
    return result;
}

function changeInputMode() {
    var input = document.getElementById('textInput');
    var searchName = input.getAttribute('searchName');
    if (searchName) {
        if (searchName == 'true') {
            input.setAttribute('searchName', 'false');
            input.setAttribute('style', 'color: #000000;cursor: pointer;');
            var caption = document.getElementById('captioninput');
            caption.innerHTML = 'Tìm sản phẩm theo mã vạch';
            caption.setAttribute('style', 'color:black');
        } else {
            input.setAttribute('searchName', 'true');
            input.setAttribute('style', 'color: #941594;cursor: pointer;');
            var caption = document.getElementById('captioninput');
            caption.innerHTML = 'Tìm sản phẩm theo tên';
            caption.setAttribute('style', 'color:#941594');
        }
    }

}

function removeBTab(str) {
    var result = replaceAll(str, '<b>', '');
    return replaceAll(result, '</b>', '');
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function selfRemove() {
    var div = document.getElementById("dataView");
    for (var i = 0; i < div.children.length; i++) {
        if (div.children[i].innerHTML == event.target.innerHTML) {
            div.removeChild(div.children[i]);
            break;
        }
    }
    total(true);
    focusTo();
}

function tienthua() {
    var tien = 0;
    while (isNaN((tien = parseInt(prompt("Tiền khách hàng đưa:"))))) {
        break;
    }
    if (!isNaN(tien)) {
        var total = parseInt(removeCommas(document.getElementById("total").innerHTML.split(":")[1]));
        alert("Tiền thối: " + addCommas((parseInt(tien) - total).toString()));
        var tinhtienField = document.getElementById("tinhtien");
        tinhtienField.innerHTML = "Tiền nhận: " + addCommas(tien) + "; Tiền thối: " + addCommas((parseInt(tien) - total).toString());
        //Save to cloud
        var div = document.getElementById("dataView");
        var textPre = "[";
        for (var i = 0; i < div.children.length; i++) {
            var temp = "[";
            var textbk = div.children[i].innerHTML;
            temp += '\"' + getCurrentDateTime() + '\"' + ',' + '\"' + getNameProduct(textbk) + '\"' + ',' + removeCommas(getPrice(textbk)) + "]";
            if (i < div.children.length - 1) {
                temp += ",";
            }
            textPre += temp;
        }
        textPre += "]";
        var value = JSON.parse(textPre);
        console.log("Save value: " + value);
        blockspring.runParsed("append-to-google-spreadsheet", {
            "file_id": "1IBpKFjcPYoZlfYjFaEn6UYnI5cKT5OhhX2-qobJYghw",
            "worksheet_id": "0",
            "values": value
        }, {
            "api_key": "br_12097_6b1c0e0b32dd830852fb6e0ef699a4a045f51ec9"
        }, function(res) {
            if (res.params.status) {
                // var alert = document.getElementsByClassName("alert alert-info")[0];
                // alert.setAttribute('class', 'alert alert-success');
                // alert.getElementsByTagName('strong')[0].innerHTML = "Lưu thành công";
                // // Enable table 
                // var table = document.getElementById('list');
                // table.setAttribute('style', 'width: 100%;');
            } else {
                alert("Đã xảy ra lỗi trong lúc lưu. Hêu pư nên đánh dấu bill này để anh về kiểm tra! ^^ ");
                // var alert = document.getElementsByClassName("alert alert-info")[0];
                // alert.setAttribute('class', 'alert alert-error');
                // alert.getElementsByTagName('strong')[0].innerHTML = "Lỗi trong lúc lưu";
            }
        })
    } else {
        tinhdiem(14);
    }
}

function getCurrentDateTime() {

    var currentdate = new Date();
    var result = currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return result;
};

function getNameProduct(str) {
    return removeBTab(str.split("<br>")[0]).split(".")[1].trim();
}

function getPrice(str) {
    return removeBTab(str.split("Thành tiền: ")[1]);
}

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
}

/*
* This function is called when user clicked the button to show customer information.
* @param {String} targetID: The id of where to place customer area
*/
function addCustomserArea(targetId) {
    var customerIdField, inputDiv = document.getElementById(targetId),
        customerArea = document.getElementById('customerArea'),
        existCustomerDiv = document.getElementById('existCustomerDiv'),
        newCustomerDiv = document.getElementById('newCustomerDiv');
    if (customerArea) {
        customerIdField = document.getElementById('customerID');
        if (newCustomerDiv) {
            customerArea.removeChild(newCustomerDiv);
        } else {
            customerIdField.disabled = false;
        }
        if (existCustomerDiv) {
            customerArea.removeChild(existCustomerDiv);
        } else {
            customerIdField.disabled = false;
        }
    } else {
        // Create customer div then append to div
        customerArea = document.createElement('div');
        customerArea.setAttribute('id', 'customerArea');
        // Create input then append to customerArea
        var customerIdField = document.createElement('input');
        // Create label for input field
        var labelInputField = document.createElement('label');
        labelInputField.textContent = 'Mã khách hàng: ';
        customerIdField.setAttribute('id', 'customerID');
        // TODO: implement on keydown (Enter) for check customer ID

        // Add label for input field to customerArea
        customerArea.appendChild(labelInputField);
        // Add customer field to customerArea
        customerArea.appendChild(customerIdField);
        // Append customerArea to inputDiv
        inputDiv.appendChild(customerArea);
    }
    // Focus on customerID field
    customerIdField.focus();

    /**
     * FEATURE: CHECK AND ADD CUSTOMER
     **/
    // Set event listener for customerIdField
    customerIdField.addEventListener('keydown', function(e) {
        if (e.keyIdentifier == 'Enter' && this.value != '') {
            var customerArea = document.getElementById('customerArea'),
                customerIdField = document.getElementById('customerID');
            customerIdField.disabled = true;
            // Create label
            var label = document.getElementById('labelSearching');
            if (label) {
                label.textContent = 'đang tìm kiếm ...';
            } else {
                label = document.createElement('label');
                label.setAttribute('id', 'labelSearching');
                label.textContent = 'đang tìm kiếm ...';
            }
            customerArea.appendChild(label);
            blockspring.runParsed("query-public-google-spreadsheet", {
                "query": "SELECT B, C, D, E WHERE A = " + this.value,
                "url": "https://docs.google.com/spreadsheets/d/1Yca1LQIHhKPkUEVL3sE4o1qBtRzqszqQMpjbb2MsbZI"
            }, {
                "api_key": "br_26892_d56eb893b96a41f5fbf188c05b2d9d0c4e6df811"
            }, function(res) {
                var data = res.params.data,
                    label = document.getElementById('labelSearching'),
                    customerArea = document.getElementById('customerArea'),
                    existCustomerDiv = document.getElementById('existCustomerDiv'),
                    newCustomerDiv = document.getElementById('newCustomerDiv');
                // Check data
                if (data) {
                    label.textContent = '';
                    if (data.length > 0) {

                        // Remove new customer area
                        if (newCustomerDiv) {
                            customerArea.removeChild(newCustomerDiv);
                        }

                        // Check is exist div
                        if (existCustomerDiv) {

                        } else {
                            existCustomerDiv = document.createElement('div');
                            existCustomerDiv.setAttribute('id', 'existCustomerDiv');
                            customerArea.appendChild(existCustomerDiv);
                        }
                        // Customer is exist
                        createTable(existCustomerDiv, data);

                        // set the index of data to update
                        setIndex();
                    } else {
                        // Remove exist area
                        if (existCustomerDiv) {
                            customerArea.removeChild(existCustomerDiv);
                        }

                        // Region of new customer
                        if (newCustomerDiv) {

                        } else {
                            newCustomerDiv = document.createElement('div');
                            newCustomerDiv.setAttribute('id', 'newCustomerDiv');
                            // Create form to input customer infor
                            var form = document.createElement('form');
                            form.setAttribute('role', 'form');
                            form.setAttribute('class', 'form-horizontal');

                            var fields = ['username', 'address', 'phonenumber'];
                            var labels = ['Tên khách hàng', 'Địa chỉ', 'Số điện thoại'];
                            for (var i = 0; i < fields.length; i++) {

                                var divFormGroup = document.createElement('div');
                                divFormGroup.setAttribute('class', 'form-group');

                                var label = document.createElement('label');
                                label.setAttribute('class', 'control-label col-sm-2');
                                label.setAttribute('for', fields[i]);
                                label.textContent = labels[i];

                                var divItem = document.createElement('div');
                                divItem.setAttribute('class', 'col-sm-2');

                                var item = document.createElement('input');
                                item.setAttribute('id', fields[i]);
                                item.setAttribute('class', 'form-control');

                                divFormGroup.appendChild(label);
                                divItem.appendChild(item);
                                divFormGroup.appendChild(divItem);

                                form.appendChild(divFormGroup);

                            }

                            // Create div for button
                            var divBtn = document.createElement('div');
                            divBtn.setAttribute('class', 'col-sm-offset-2 col-sm-10');
                            var btn = document.createElement('button');
                            btn.setAttribute('class', 'btn btn-default');
                            btn.textContent = "Lưu";
                            btn.setAttribute('type', 'button');
                            divBtn.appendChild(btn);

                            form.appendChild(divBtn);
                            newCustomerDiv.appendChild(form);
                            customerArea.appendChild(newCustomerDiv);
                            var userInput = document.getElementById('username');
                            userInput.focus();
                        }
                    }
                } else {
                    label.textContent = 'Lỗi nhập liệu, mã khách hàng phải là số';
                    var tbl = customerArea.querySelector('#list');
                    if (tbl) {
                        customerArea.removeChild(tbl);
                    }
                }

            })
        }
    });

    // Set value of customerID to "" when user click
    customerIdField.addEventListener('focus', function(e) {
        this.value = "";
    });
}

function setIndex() {
    blockspring.runParsed("query-public-google-spreadsheet", {
        "query": "SELECT A, E",
        "url": "https://docs.google.com/spreadsheets/d/1Yca1LQIHhKPkUEVL3sE4o1qBtRzqszqQMpjbb2MsbZI"
    }, {
        "api_key": "br_26892_d56eb893b96a41f5fbf188c05b2d9d0c4e6df811"
    }, function(res) {
        var id = document.getElementById('customerID');
        if (id.value) {
            var data = res.params.data;
            for (var i = 0; i < data.length; i++) {
                if (data[i].mskh == id.value) {
                    id.setAttribute('indexData', i + 2);
                    id.setAttribute('score', data[i].Điểm);
                    break;
                }
            }
        } else {
            console.log('Not found id.value');
        }
    });
}

function tinhdiem(newScore) {
    var id = document.getElementById('customerID');
    if (id) {
        var row = parseInt(id.getAttribute('indexData'));
        blockspring.runParsed("update-cell-google-sheets", {
            "file_id": "1Yca1LQIHhKPkUEVL3sE4o1qBtRzqszqQMpjbb2MsbZI",
            "worksheet_id": 0,
            "row": row,
            "column": 5,
            "value": newScore
        }, {
            "api_key": "br_26892_62031a5c112e1ee1cf80f55202b2b3da547ee774"
        }, function(res) {
            if (res.params.status) {
                // Remove customer arear
                var inputDiv = document.getElementById('inputDiv');
                var customerArea = document.getElementById('customerArea');
                if (customerArea) {
                    inputDiv.removeChild(customerArea);
                }
            } else {

            }

        });
    } else {

    }
}