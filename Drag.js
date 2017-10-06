/**
 * Created by Administrator on 2017/10/6.
 */
(function (window) {
    function Drag(id) {
        this.ele = document.getElementById(id);
        //����Ҫ��ӵĺ����õ����Խ��г�ʼ������
        this.disX = 0;
        this.disY = 0;
        this.fnDown();
    }
    Drag.prototype.fnDown = function () {
        var that = this;
        //console.log(that);
        //������קԪ������¼�
        this.ele.onmousedown = function (ev) {
            ev = ev || event;
            //����� this ָ�� this.ele
            that.disX = ev.clientX - this.offsetLeft;
            that.disY = ev.clientY - this.offsetTop;
            //��document��� ����ƶ��¼�
            console.log('123');
            document.onmousemove = function (ev) {
                that.fnMove(ev);
            };
            document.onmouseup = that.fnUp;
        };
        return false;
    };
    console.log('1');
    Drag.prototype.fnMove = function (ev) {
        ev = ev || event;
        console.log('1');
        this.ele.style.left = ev.clientX - this.disX + 'px';
        this.ele.style.top = ev.clientY - this.disY + 'px';
    };
    Drag.prototype.fnUp = function () {
        document.onmousemove = null;
        console.log('12');
    };
    window.Drag = Drag;
})(window);