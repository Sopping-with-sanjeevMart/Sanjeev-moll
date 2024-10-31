function addL() {                                                                                         //increment function for large screen devices
    var value = parseInt(document.getElementById("numL").value);
    value = isNaN(value) ? 0 : value;
    if(value<100) {
        value++;
          document.getElementById("numL").value = value;
    }
}

function subL() {                                                                                        //decrement function for large screen devices
    var value = parseInt(document.getElementById("numL").value);
    value = isNaN(value) ? 0: value;
    if(value>1) {
        value--;
          document.getElementById("numL").value = value;
    }
}

function addM() {                                                                                           //increment function for medium screen devices
    var value = parseInt(document.getElementById("numM").value);
    value = isNaN(value) ? 0 : value;
    if(value<100) {
        value++;
          document.getElementById("numM").value = value;
    }
}

function subM() {                                                                                         //decrement function for medium screen devices
    var value = parseInt(document.getElementById("numM").value);
    value = isNaN(value) ? 0: value;
    if(value>1) {
        value--;
          document.getElementById("numM").value = value;
    }
}

function addS() {                                                                                         //increment function for small screen devices
    var value = parseInt(document.getElementById("numS").value);
    value = isNaN(value) ? 0 : value;
    if(value<100) {
        value++;
          document.getElementById("numS").value = value;
    }
}
 
function subS() {                                                                                          //decrement function for large screen devices
    var value = parseInt(document.getElementById("numS").value);
    value = isNaN(value) ? 0: value;
    if(value>1) {
        value--;
          document.getElementById("numS").value = value;
    }
}




