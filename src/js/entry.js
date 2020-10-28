pageEngine.init('.wrapper', ['#000', '#000', '#000'])
            .addSection('oneSection')
                .addComponent({
                    type: 'base',
                    className: 'duyi',
                    width: 394,
                    height: 384,
                    center: false,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        left:200,
                        backgroundImage: 'url(./src/img/爱心.jpeg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        // fontSize: '18px',
                        // fontWeight: '900',
                        // lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 150,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000,
                })            
                .addComponent( {
                    type: 'sup',
                    width: 450,
                    text: 'Hello!大家好,我是渡一的小助理小渡~',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        right:200,
                        top:200,                 
                        textAlign: 'justify',
                        fontSize: '2px',
                        fontWeight: '900',
                        lineHeight: '25px',
                        color:'#fff',
                    },
                    animateIn: {
                        opacity: 1,
                        fontSize: '25px',
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: 0
                    },
                    delay: 200,
                })
                .addComponent( {
                    type: 'sup',
                    width: 450,
                    text: '欢迎大家来到渡一教育啊！',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        right:0,
                        top:250,                 
                        textAlign: 'justify',
                        fontSize: '25px',
                        fontWeight: '900',
                        lineHeight: '25px',
                        color:'#fff',
                    },
                    animateIn: {
                        opacity: 1,
                        right:200,
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: 0
                    },
                    delay: 200,
                })
                .addComponent( {
                    type: 'sup',
                    width: 450,
                    text: '想了解我们更多吗？那就往下走吧！',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        right:0,
                        top:300,                 
                        textAlign: 'justify',
                        fontSize: '25px',
                        fontWeight: '900',
                        lineHeight: '25px',
                        color:'#fff',
                    },
                    animateIn: {
                        opacity: 1,
                        right:200,
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: 0
                    },
                    delay: 200,
                })
                .addComponent( {
                    type: 'sup',
                    width: 450,
                    text: '冲冲冲！！！',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        right:200,
                        bottom:0,                 
                        textAlign: 'justify',
                        fontSize: '25px',
                        fontWeight: '900',
                        lineHeight: '25px',
                        color:'#fff',
                    },
                    animateIn: {
                        opacity: 1,
                        top:350
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: 0
                    },
                    delay: 200,
                })
                        
            .addSection('twoSection')
                .addComponent({
                    type: 'base',
                    className: 'duyi',
                    center:true,
                    text: '何为渡一',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,        
                        textAlign: 'center',
                        fontSize: '35px',
                        fontWeight: '900',
                        lineHeight: '25px',
                        marginLeft:'-70px',
                        color:'#fff',
                    },
                    animateIn: {
                        opacity: 1,
                        top: 20,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
                .addComponent({
                    type: 'base',
                    className: 'duyi',
                    text: '\ \ \
                    “渡一”联合创始人自2009年开始组织成立科技公司\
                    ，启动IT技术人才培养计划，经年夯实基础，稳步经营，整合资源，于2016年01月20日创立黑龙江渡一信息技术开发有限公司(简称“渡一”)。“渡一”联合创始人、管理人员和技术人员大都来自国内一线互联网企业，公司主营业务为互联网IT教育，同时积极开展自媒体运营、新媒体推广以及IT技术咨询与服务等业务\
                    “渡一”互联网IT教育课程包括Web前端、JavaWeb、Data Scientist、Data\
                    Analyst以及Data\
                    Engineer等，公司已与腾讯课堂、网易云课堂、淘宝好学、cctalk、爱奇艺、51cto达成深度战略合作，目前业务范围已辐射中国大陆、中国台湾省、美国、加拿大以及澳洲等国家和地区.',
                    css: {
                        width:'800px',
                        height:'500px',
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,        
                        fontSize: '25px',
                        lineHeight: '40px',
                        color:'#fff',
                    },
                    animateIn: {
                        opacity: 1,
                        top: '100',
                        left:'368px',
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000,
                })
                .addSection('threeSection')
                    .addSlider('3Section-one')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            center:true,
                            text: '渡一三帅 —— 成哥',
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                bottom: 0,        
                                fontSize: '35px',
                                fontWeight: '900',
                                lineHeight: '25px',
                                color:'#fff',
                                marginLeft:'-150px',
                            },
                            animateIn: {
                                opacity: 1,
                                top: 20,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 314, 
                            height: 377,
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                left:0,
                                backgroundImage: 'url(./src/img/chengge.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 140,
                                left:500,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        .addComponent( {
                            type: 'sup',
                            width: 450,
                            text: '姬成，“渡一”创始人，董事长兼CEO；原“阿里巴巴”UC移动事业群购物搜索项目负责人；微软GMCT金牌讲师、“醒狮国学院”特级顾问、北京丰立鼎盛投资有限公司投资顾问；兼任多所高校校企联合生涯规划师，在各高校开展生涯规划讲座超过百场，已培养国际一线互联网精英数千名。',
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                right:0,
                                top:150,                 
                                textAlign: 'justify',
                                fontSize: '20px',
                                fontWeight: '600',
                                lineHeight: '40px',
                                color:'#fff',
                            },
                            animateIn: {
                                opacity: 1,
                                right:350,
                            },
                            animateOut: {
                                opacity: 0,
                                bottom: 0
                            },
                            delay: 200,
                        })                   
                    .addSlider('3Section-two')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            center:true,
                            text: '渡一三帅 —— 思彤哥',
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                bottom: 0,        
                                fontSize: '35px',
                                fontWeight: '900',
                                lineHeight: '25px',
                                color:'#fff',
                                marginLeft:'-150px',
                            },
                            animateIn: {
                                opacity: 1,
                                top: 20,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 314, 
                            height: 377,
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                left:0,
                                backgroundImage: 'url(./src/img/sitongge.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 140,
                                left:500,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        .addComponent( {
                            type: 'sup',
                            width: 450,
                            text: '陈思彤，“渡一”联合创始人，EVP，特级讲师；原“百度”自然语言处理事业群高级工程师；精通 Web 全栈、Java和 C++等技术 ，对设计模式、框架源码理解深刻。',
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                right:0,
                                top:150,                 
                                textAlign: 'justify',
                                fontSize: '20px',
                                fontWeight: '600',
                                lineHeight: '40px',
                                color:'#fff',
                            },
                            animateIn: {
                                opacity: 1,
                                right:350,
                            },
                            animateOut: {
                                opacity: 0,
                                bottom: 0
                            },
                            delay: 200,
                        })
                    .addSlider('3Section-three')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            center:true,
                            text: '渡一三帅 —— 袁大佬',
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                bottom: 0,        
                                fontSize: '35px',
                                fontWeight: '900',
                                lineHeight: '25px',
                                color:'#fff',
                                marginLeft:'-150px',
                            },
                            animateIn: {
                                opacity: 1,
                                top: 20,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 314, 
                            height: 377,
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                left:0,
                                backgroundImage: 'url(./src/img/yuandalao.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 140,
                                left:500,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        .addComponent( {
                            type: 'sup',
                            width: 450,
                            text: '袁进，“渡一”前端业务教研组组长，高级讲师；曾在大型互联网企业先后担任架构师和技术总监；深入熟悉C#、PHP、Java、前端等多门计算机语言，擅长分析和搭建系统架构，更擅长沟通协作；5年+教学经验，授课风格幽默风趣、细致入微，凭着突出的技术实力和教学能力为一线大厂输送了大量优质人才。',
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                right:0,
                                top:150,                 
                                textAlign: 'justify',
                                fontSize: '20px',
                                fontWeight: '600',
                                lineHeight: '40px',
                                color:'#fff',
                            },
                            animateIn: {
                                opacity: 1,
                                right:350,
                            },
                            animateOut: {
                                opacity: 0,
                                bottom: 0
                            },
                            delay: 200,
                        })
        .load();