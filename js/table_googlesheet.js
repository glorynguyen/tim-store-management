const ALERT_DEFAULT_VALUE = "Đang tải dữ liệu...";
const ID_TABLE = "list";
const SEPERATOR_SPLIT = ",";
const SUM_ID = 'tongValue';
function printElements(data) {
    var alertField = document.getElementsByClassName("alert alert-success")[0],
        arr = (data) ? data.split(String.fromCharCode(10)) : null, divRowTable,
        length = (arr) ? arr[0].split(SEPERATOR_SPLIT).length : 0,
        divMd12, tbl, thead, tr, td, i, j, th, tbdy;

    /*Update alert field value*/
    if (alertField) {
        alertField.setAttribute('class', 'alert alert-info');
        alertField.getElementsByTagName('strong')[0].innerHTML = ALERT_DEFAULT_VALUE;
    }

    /*Create div bootstrap for table*/
    divRowTable = document.createElement('div');
    divRowTable.setAttribute('class', 'row');
    divMd12 = document.createElement('div');
    divMd12.setAttribute('class', 'col-ms-12');

    /*Create table*/
    tbl = document.createElement('table');
    tbl.setAttribute('id', ID_TABLE);
    tbl.setAttribute('class', 'table table-responsive');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    tr.setAttribute('class', 'success');

    /*Create table header then append to the created table*/
    for (j = 0; j < length; j++) {
        th = document.createElement('th');
        th.appendChild(document.createTextNode(buldStringHeader(arr[0].split(SEPERATOR_SPLIT)[j])));
        tr.appendChild(th);
    }
    thead.appendChild(tr);

    /*Create the table body*/
    var dateFilter = document.getElementById('dateFilter').value;
    tbdy = document.createElement('tbody');
    for (i = 1; i < arr.length; i++) {
        var date = revertDate(arr[i].split(',')[0].split(" ")[0]);
        
        if (dateFilter) {
            if (date === dateFilter) {
                
            }    
        } else {
            tr = document.createElement('tr');
            for (j = 0; j < length; j++) {
                td = document.createElement('td');
                td.onclick = function(e) {
                    //Check is filtered
                    var bd = this.parentNode.parentNode, ul = document.createElement('ul'),
                        li = document.createElement('li');
                    if (bd.getAttribute('filtered') != "true") {
                        // check is datetime column
                        if (this.parentNode.children[0] == this) {
                            // Check has menu yet
                            if (this.children.length == 0) {
                                // Create menu
                                li.textContent = 'Xem dữ liệu ngày: ' + this.innerHTML.split(" ")[0];
                                li.setAttribute('style', 'color:#E48BE4; cursor: pointer;');
                                li.onmouseover = function() {
                                    this.setAttribute('style', 'color: #6B066B; cursor: pointer;');
                                }
                                li.onmouseleave = function() {
                                    this.setAttribute('style', 'color: #E48BE4; cursor: pointer;');
                                }
                                li.onclick = onClickTableRow;
                                ul.appendChild(li);
                                this.appendChild(ul);
                            } else {
                                this.removeChild(this.children[0]);
                            }
                        }
                    }
                };
                if (j == length - 1) {
                    td.appendChild(document.createTextNode(addCommas(arr[i].split(",")[j])));
                } else {
                    td.appendChild(document.createTextNode(arr[i].split(",")[j]));
                }
                tr.appendChild(td)
            }
            tbdy.appendChild(tr);
        }
    }
    tbl.appendChild(thead);
    tbl.appendChild(tbdy);

    divMd12.appendChild(tbl);
    divRowTable.appendChild(divMd12);


    //Add button add 
    var rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');

    var newDivAdd = document.createElement('div');
    newDivAdd.setAttribute('id', "add");

    var newRowBtn = document.createElement('div');
    newRowBtn.setAttribute('class', "row");
    newRowBtn.setAttribute('id', "rowAddBtn");

    var addButton = document.createElement('button');
    addButton.setAttribute('id', "btnAdd");
    addButton.innerHTML = "Thêm";
    addButton.setAttribute('onclick', "add()");
    addButton.setAttribute('class', 'btn btn-info');

    newRowBtn.appendChild(addButton);

    newDivAdd.appendChild(newRowBtn);

    rowDiv.appendChild(newDivAdd);
    var divAuto = document.getElementById('generateAuto');
    divAuto.appendChild(divRowTable);
    // Create lable for tongTien
    var newDivTong = document.createElement('div');
    newDivTong.setAttribute('class', 'row');
    var h1Tong = document.createElement('h1');
    var lbTong = document.createElement('span');
    lbTong.setAttribute('class', 'label label-success');
    lbTong.innerHTML = 'Tổng: ';
    var lbTongValue = document.createElement('span');
    lbTongValue.setAttribute('class', 'label label-danger');
    lbTongValue.setAttribute('id', SUM_ID);
    lbTongValue.setAttribute('style', 'position: absolute;right: 7px;');
    lbTongValue.innerHTML = this.tongTien();
    h1Tong.appendChild(lbTong);
    h1Tong.appendChild(lbTongValue);
    newDivTong.appendChild(h1Tong);
    divAuto.appendChild(newDivTong);
    divAuto.appendChild(newDivAdd);

    var alertField = document.getElementsByClassName("alert alert-info")[0];
    alertField.setAttribute('class', 'alert alert-success');
    alertField.getElementsByTagName('strong')[0].innerHTML = "Tải dữ liệu thành công";

}

function revertDate(date) {
    var result, arr = date.split("-"), year, month, date;
    if (arr.length === 3) {
        result = arr[2] + "-" + arr[1] + "-" + arr[0];
    }
    return result;
}

/*Onclick table row*/
function onClickTableRow() {
    var body = this.parentNode.parentNode.parentNode.parentNode, 
        keyArr = this.innerHTML.split(' '), i, sum = document.getElementById(SUM_ID);
    for (i = 0; i < body.childNodes.length; i++) {
        if (body.childNodes[i].childNodes[0].innerHTML.split(' ')[0] != keyArr[keyArr.length - 1]) {
            body.removeChild(body.childNodes[i]);
            i--;
        }
    };
    body.setAttribute('filtered', true);
    this.parentNode.parentNode.removeChild(this.parentNode);
    // Update tong tien
    if (sum) {
        sum.innerHTML = tongTien();
    }
}

// Build string for header table
function buldStringHeader(str) {
    var arr = str.split("-");
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        result += capitalizeFirstLetter(arr[i]) + " ";
    }
    return result;

}

function tongTien() {
    var indexColumn = 2;
    var result = 0;
    for (var i = 0; i < list.childNodes[1].childNodes.length; i++) {
        result += parseInt(removeCommas(list.childNodes[1].childNodes[i].childNodes[indexColumn].innerHTML));
    }
    return addCommas(result.toString());
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showTable(documentId) {
    briefcase.getCSV({
        id: documentId
    }, printElements);

}

//add new item on list
function add() {
    // Disable table 
    var table = document.getElementById('list');
    var style = table.getAttribute("style");
    table.setAttribute('style', style + 'display: none;');
    // Change alert status
    var alertField = document.getElementsByClassName("alert alert-success")[0];
    alertField.setAttribute('class', 'alert alert-info');
    alertField.getElementsByTagName('strong')[0].innerHTML = "Đang khởi tạo danh sách...";
    var thead = document.getElementsByTagName('th');
    var addDiv = document.getElementById('add');
    //Create progress bar
    if (!document.getElementById('addProgress')) {
        var progBarWrapper = document.createElement('div');
        progBarWrapper.setAttribute('class', 'progress');

        var progBar = document.createElement('div');
        progBar.setAttribute('id', 'addProgress');
        progBar.setAttribute('role', 'progressbar');
        progBar.setAttribute('class', 'progress-bar progress-bar-warning');
        progBar.setAttribute('aria-valuenow', '0');
        progBar.setAttribute('aria-valuemin', '0');
        progBar.setAttribute('aria-valuemax', '100');
        progBar.setAttribute('style', 'width:0%');

        progBarWrapper.appendChild(progBar);
        addDiv.appendChild(progBarWrapper);
    }
    // Render input items
    for (var i = 0; i < thead.length; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'form-group');

        var newLabel = document.createElement('label');
        newLabel.setAttribute('for', thead[i].innerHTML);
        newLabel.innerHTML = thead[i].innerHTML;

        rowDiv.appendChild(newLabel);


        var newTextField = document.createElement('input');
        newTextField.setAttribute('id', thead[i].innerHTML);
        // Check is "Thời Gian " field setdefault data for it
        if (newTextField.id == "Thời Gian ") {
            newTextField.value = getCurrentDateTime();
        }
        newTextField.setAttribute('onblur', 'textFieldBlur()');
        newTextField.setAttribute('class', 'form-control');

        rowDiv.appendChild(newTextField);

        addDiv.appendChild(rowDiv);

    }
    // Change button add to save
    var btnAdd = document.getElementById('btnAdd');
    btnAdd.innerHTML = "Lưu";
    btnAdd.setAttribute('id', "btnSave");
    btnAdd.setAttribute('onclick', "save()");
    //btnAdd.addEventListener("click", save(array));

    // Append Cancel button
    var rowAddBtn = document.getElementById('rowAddBtn');
    var cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', "btnCancel");
    cancelButton.innerHTML = "Hủy";
    cancelButton.setAttribute('onclick', "cancel()");
    cancelButton.setAttribute('class', 'btn btn-danger');
    rowAddBtn.appendChild(cancelButton);

    // Set focus to seconder input item after created
    var secondTextbox = document.getElementById(thead[1].innerHTML);
    secondTextbox.focus();

    // Update alert status
    alertField.setAttribute('class', 'alert alert-success');
    alertField.getElementsByTagName('strong')[0].innerHTML = "Danh sách đã được khởi tạo";

}

function save() {
    if (validate(document.getElementById('add').id)) {

        var addDiv = document.getElementById("add");
        var listId = addDiv.getElementsByTagName("label");

        var tr = document.createElement('tr');

        var preValue = '[[';
        for (var i = 0; i < listId.length; i++) {
            var text = document.getElementById(listId[i].innerHTML).value;
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(text));
            tr.appendChild(td);
            preValue += '\"' + text + '\"';
            if (i < listId.length - 1) {
                preValue += ',';
            }
        }
        document.getElementsByTagName('tbody')[0].appendChild(tr);
        preValue += ']]';
        var value = JSON.parse(preValue);
        var length = document.getElementsByTagName('th').length;
        cancel();
        var alertField = document.getElementsByClassName("alert alert-success")[0];
        alertField.setAttribute('class', 'alert alert-info');
        alertField.getElementsByTagName('strong')[0].innerHTML = "Đang lưu...";
        blockspring.runParsed("append-to-google-spreadsheet", {
            "file_id": "1IBpKFjcPYoZlfYjFaEn6UYnI5cKT5OhhX2-qobJYghw",
            "values": value
        }, {
            "api_key": "br_12097_6b1c0e0b32dd830852fb6e0ef699a4a045f51ec9"
        }, function(res) {
            if (res.params.status) {
                var alertField = document.getElementsByClassName("alert alert-info")[0];
                alertField.setAttribute('class', 'alert alert-success');
                alertField.getElementsByTagName('strong')[0].innerHTML = "Lưu thành công";
                // Enable table 
                var table = document.getElementById('list');
                table.setAttribute('style', 'width: 100%;');
            } else {
                var alertField = document.getElementsByClassName("alert alert-info")[0];
                alertField.setAttribute('class', 'alert alert-error');
                alertField.getElementsByTagName('strong')[0].innerHTML = "Lỗi trong lúc lưu";
            }
        })
    } else {
        var addDiv = document.getElementById("add");
        var listId = addDiv.getElementsByTagName("label");
        for (var i = 0; i < listId.length; i++) {
            var text = document.getElementById(listId[i].innerHTML);
            if (text.value == "") {
                alert("Chưa nhập dữ liệu cho mục " + listId[i].innerHTML);
                text.focus();
                break;
            }
        }
    }

}

// When cancel button
function cancel() {
    var addDiv = document.getElementById("add");
    var length = document.getElementsByTagName('th').length;
    for (var i = 0; i < length; i++) {
        if (addDiv.firstChild.id != "rowAddBtn") {
            addDiv.removeChild(addDiv.firstChild);
        } else if (addDiv.lastChild.id != "rowAddBtn") {
            addDiv.removeChild(addDiv.lastChild);
        }
    }
    // Change button Lưu to Thêm
    var addButton = document.getElementById('btnSave');
    addButton.removeEventListener("click", save);
    addButton.setAttribute('id', "btnAdd");
    addButton.setAttribute('onclick', "add()");
    addButton.innerHTML = "Thêm";

    // Remove Hủy button
    var rowAddBtn = document.getElementById('rowAddBtn');
    rowAddBtn.removeChild(rowAddBtn.children[1]);

    // Remove Progress bar
    var progBar = addDiv.getElementsByClassName('progress')[0];
    addDiv.removeChild(progBar);

    // Enable table 
    var table = document.getElementById('list');
    table.setAttribute('style', 'width: 100%;');
}

//Implement onBlur for textinput fields
function textFieldBlur() {
    var addDiv = document.getElementById("add");
    var inputTag = document.getElementsByTagName('input');
    var percent = 100 / inputTag.length;
    var sub = 0;
    for (var i = 0; i < inputTag.length; i++) {
        if (inputTag[i].value != "") {
            sub += percent;
        }
    }

    var progBar = document.getElementById('addProgress');
    progBar.setAttribute('style', 'width:' + sub + '%');
    if (sub == 100) {
        progBar.setAttribute('class', 'progress-bar progress-bar-success');
    } else {
        progBar.setAttribute('class', 'progress-bar progress-bar-warning');
    }


}

function filterData() {
    var divTbl = document.getElementById("generateAuto"),
    table = (divTbl) ? divTbl.querySelector("#list") : null;
    if (table) {
        table.parentNode.removeChild(table);
        showTable('1IBpKFjcPYoZlfYjFaEn6UYnI5cKT5OhhX2-qobJYghw');
    }

}

// Validation input with null text
function validate(inputWrapperId) {
    var divWrapper = document.getElementById(inputWrapperId);
    var children = divWrapper.getElementsByTagName('input');
    var result = true;
    var counter = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i].value === "") {
            counter++;
        }
    }
    if (counter > 0) {
        result = false;
    }
    return result;

}