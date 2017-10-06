/**
 * Created by Administrator on 2017/10/6.
 */
(function(window){
    function Tab(id){
        this.parent = document.getElementById(id);
        this.aInp = this.parent.getElementsByTagName('input');
        this.aDiv = this.parent.getElementsByTagName('div');
        this.init();
        this.timer = null;
        this.num = 0;
        this.isPlay = false;
    }
    Tab.prototype.init = function () {
        var that = this;
        for (var i = 0; i < this.aInp.length; i++) {
            this.aInp[i].index = i;
            this.aInp[i].onclick = function () {
                that.fnTab(this.index);
            }
        }
    }
    Tab.prototype.fnTab = function (idx) {
        for (var j = 0; j < this.aInp.length; j++) {
            this.aInp[j].className = '';
            this.aDiv[j].style.display = 'none';
        }
        this.aInp[idx].className = 'active';
        this.aDiv[idx].style.display = 'block';
    }
    Tab.prototype.autoPlay = function () {
        this.isPlay = true;
        var that = this;
        this.timer = setInterval(function () {
            that.num++;
            if(that.num>that.aInp.length-1){
                that.num = 0;
            }
            that.fnTab(that.num);
        },1000)
    }
    Tab.prototype.stop = function () {
        this.isPlay = false;
        clearInterval(this.timer);
    }
    window.Tab = Tab;

})(window);