// 先取得所有元素
var ecbt = document.querySelector('#cbt');
var egcode = document.querySelector('.gcode');
var einp = document.querySelector('#inp');
var emsg = document.querySelector('.msg');
// 生成验证码函数，生成五位随机数字或小写字母
var getcode = function () {
    var code = Math.random().toString(36).substr(3, 5);
    return code;

}

ecbt.onclick = function () {
    if (egcode.innerHTML == (einp.value).trim()) {
        emsg.innerHTML = '验证成功';
    } else {
        emsg.innerHTML = '验证失败';
    }

}

egcode.onclick = function () {
    egcode.innerHTML = getcode();
}

egcode.click();