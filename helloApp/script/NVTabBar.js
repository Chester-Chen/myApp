
  function NVTabBar_open () {
    var NVTabBar = api.require('NVTabBar');
    NVTabBar.open({
        styles: {
            bg: '#333',
            //bg:"widget://image/NVTabBar/tabbar_bg.png",
            h: 65,
            dividingLine: {
                width: 0,
                color: '#000'
            },
            badge: {
                bgColor: '#ff0',
                numColor: '#fff',
                size: 6.0,
                centerX: 40,
                centerY: 6
            }
        },
        items: [{
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,200,200,0.6)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/NVTabBar/acti.png',
                highlight: 'widget://image/NVTabBar/actied.png',
                selected: 'widget://image/NVTabBar/actied.png'
            },
            title: {
                text: '动态',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,200,200,0.7)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/NVTabBar/guan.png',
                highlight: 'widget://image/NVTabBar/guaned.png',
                selected: 'widget://image/NVTabBar/guaned.png'
            },
            title: {
                text: '发现',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 10,
                image: 'widget://image/NVTabBar/yyuan.png' //中间背景图
            },
            iconRect: {
                w: 32,
                h: 32,
            },
            icon: {
                normal: 'widget://image/NVTabBar/mai.png',
                highlight: 'widget://image/NVTabBar/mai.png',
                selected: 'widget://image/NVTabBar/mai.png'
            },
            title: {
                //text : '333',
                size: 0.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,20,0,0.6)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/NVTabBar/fav.png',
                highlight: 'widget://image/NVTabBar/faved.png',
                selected: 'widget://image/NVTabBar/faved.png'
            },
            title: {
                text: '消息',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0,
                image: 'rgba(220,0,220,0.7)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/NVTabBar/bir.png',
                highlight: 'widget://image/NVTabBar/bired.png',
                selected: 'widget://image/NVTabBar/bired.png'
            },
            title: {
                text: '我的',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }],
        selectedIndex: 0
    }, function(ret, err) {

    });
}  

    
