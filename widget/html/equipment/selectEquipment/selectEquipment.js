apiready = function(){
     new Vue({
        el: '#wrap',
        data: {
            title: '选择设备',
            showBack: true,
            imgUrl: '../../../image/arrow_write@2x.png',

        },
        methods: {
            callback() {
                api.closeWin()
            }
        }
    })
    var header = $api.byId('header');
    //适配iOS 7+，Android 4.4+状态栏
    $api.fixStatusBar(header);
}
    