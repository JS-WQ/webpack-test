import _ from 'lodash'
import './index.less'
import $ from 'jquery'

function component() {
    var $div = $('<div></div>')
    $div.html('hello world')
    return $div;
}

var img1 = document.createElement("img");
img1.src = require("./harden.jpg");
document.body.appendChild(img1);

$(document.body).append(component())
