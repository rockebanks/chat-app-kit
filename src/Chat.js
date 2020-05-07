import {NativeModules,Platform} from "react-native";
const isIos = Platform.OS==="ios";
var Chat = {

    /**
     * 提示
     * @param {*} msg 消息
     * @param {秒} duration 时间
     */
    showToast:function(msg,duration=2000){
        NativeModules.NativeKit.showToast(msg,duration);
    },

    /**
     * 加载状态
     * @param {true/false} canBack 可以返回关闭
     */
    showLoading:function(canBack=true){
        NativeModules.NativeKit.showLoading(canBack);
    },

    /**
     * 关闭加载
     * cancelLoading
     */
    cancelLoading:function(){
        NativeModules.NativeKit.cancelLoading();
    },

    /**
     * 确认框
     * @param {*} title 标题
     * @param {*} content 内容
     * @param {*} left 左边按钮标题
     * @param {*} right 右边按钮标题
     */
    showAlert:function(title,content,left,right){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.NativeKit.alert(title,content,left,right).then(result=>{
                        resolve(result);
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.NativeKit.alert(title,content,left,right,(r)=>{
                        resolve(r);
                    });
                }
                
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 导航栏高度
     */
    getNavgationHeight:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.NativeKit.getNavgationHeight().then(height=>{
                        resolve(parseInt(height));
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.NativeKit.getNavgationHeight((h)=>{
                        resolve(parseInt(h));
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        });
    },

    /**
     * os
     */
    getOs:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.NativeKit.getSystemInfo().then(data=>{
                        resolve(JSON.parse(data));
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.NativeKit.getSystemInfo((data)=>{
                        resolve(JSON.parse(data));
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 状态栏高度
     */
    getStatusBarHeight:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.NativeKit.getStatusBarHeight().then(height=>{
                        resolve(parseInt(height));
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.NativeKit.getStatusBarHeight((h)=>{
                        resolve(parseInt(h));
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 设置状态栏背景
     * @param {#000000} color 
     */
    setStatusBgColor:function(color){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.NativeKit.setStatusBgColor(color).then(data=>{
                        resolve(data);
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.NativeKit.setStatusBgColor(color);
                    resolve("");
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        });
    },

    /**
     * 检查应用是否安装
     */
    checkAppInstall:function(pkg){
        return new Promise(function(resolve,reject) {
            try{
                if(isIos){
                    NativeModules.NativeKit.checkAppInstall(pkg).then(isInstall=>{
                        resolve(isInstall);
                    }).catch(({code,message})=>{
                        reject({code,msg:message});
                    });
                }else{
                    NativeModules.NativeKit.checkAppInstall(pkg,(r)=>{
                        resolve(r);
                    },(code,msg)=>{
                        reject({code,msg});
                    });
                }
            }catch(e){
                reject({code:"500",msg:"exception"});
            }
        }); 
    },

    /**
     * 授权登录
     */
    requestLogin:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.requestLogin().then(data=>{
                    resolve(JSON.parse(data));
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestLogin((data)=>{
                    resolve(JSON.parse(data));
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 授权地理位置
     */
    requestLocation:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.requestLocation().then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestLocation((data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 获取图片
     */
    requestPhoto:function(selectNum,showCamera,enableCrop,cropWH) {
        return new Promise(function(resolve,reject) {

            if(isIos){
                NativeModules.NativeKit.requestPhoto(selectNum,showCamera,enableCrop,cropWH).then(data=>{
                    resolve(JSON.parse(data));
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestPhoto(selectNum,showCamera,enableCrop,cropWH,(data)=>{
                    resolve(JSON.parse(data));
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
           
        }); 
    },

     /**
     * 开始聊天
     */
    requestChat:function(type,targetOpenId) {
        return new Promise(function(resolve,reject) {

            if(isIos){
                NativeModules.NativeKit.requestChat(type,targetOpenId).then(data=>{
                    resolve(data);  
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestChat(type,targetOpenId,(data)=>{
                    resolve(data);  
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 分享
     * data:空
     * error:{code,message}
     */
    share:function(title,subtitle,img,link) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.share(title,subtitle,img,link).then(data=>{
                    resolve(data);   
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.share(title,subtitle,img,link,(data)=>{
                    resolve(data);   
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
           
        }); 
    },

    /**
     * 分享图片
     * data:空
     * error:{code,message}
     */
    shareImg:function(img) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.shareImg(img).then((data)=>{
                    resolve(data);     
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.shareImg(img,(data)=>{
                    resolve(data);  
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 获取intent参数
     * data 返回的url
     * error:{code,message}
     */
    requestIntentParams:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.requestIntentParams().then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestIntentParams((data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
            
        }); 
    },

    /**
     * 获取余额权限
     * data 返回空
     * error:{code,message}
     */
    requestBalance:function(cid) {
        return new Promise(function(resolve,reject) {

            if(isIos){
                NativeModules.NativeKit.requestBalance(cid+"").then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestBalance(cid+"",(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 请求支付
     * data 返回空
     * error:{code,message}
     */
    requestPayment:function(timestamp,nonce,orderid,paySign) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.requestPayment(timestamp,nonce,orderid,paySign).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestPayment(timestamp,nonce,orderid,paySign,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 请求网页
     * data 返回空
     * error:{code,message}
     */
    requestWeb:function(url,settings) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.requestWeb(url,settings).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestWeb(url,settings,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },

    /**
     * 上传
     * data urls
     * error:{code,message}
     */
    upload:function(files) {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.upload(files).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.upload(files,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 日志
     * @param {*} tag 
     * @param {*} message 
     */
    log:function(tag,message){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.log(tag,message).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.log(tag,message,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 显示
     */
    openTopBar:function(){
        NativeModules.NativeKit.openTopBar();
    },
    /**
     * 隐藏
     */
    closeTopBar:function(){
        NativeModules.NativeKit.closeTopBar();
    },
    /**
     * 加入聊天室
     * @param {*} tag 
     * @param {*} message 
     */
    joinChatRoom:function(roomid){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.joinChatRoom(roomid).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.joinChatRoom(roomid,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 退出聊天室
     * @param {*} tag 
     * @param {*} message 
     */
    exitChatRoom:function(roomid){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.exitChatRoom(roomid).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.exitChatRoom(roomid,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 发送聊天消息
     * @param {*} tag 
     * @param {*} message 
     */
    sendChatRoomMsg:function(roomid,text,ext){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.sendChatRoomMsg(roomid,text,ext).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.sendChatRoomMsg(roomid,text,ext,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 授权身份
     */
    requestIdentity:function() {
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.requestIdentity().then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.requestIdentity((data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
    /**
     * 退出小程序
     */
    exit:function(){
        NativeModules.NativeKit.exit();
    },
    /**
     * 跳转
     */
    targetPage:function(url){
        return new Promise(function(resolve,reject) {
            if(isIos){
                NativeModules.NativeKit.targetPage(url).then(data=>{
                    resolve(data);
                }).catch(({code,message})=>{
                    reject({code,msg:message});
                });
            }else{
                NativeModules.NativeKit.targetPage(url,(data)=>{
                    resolve(data);
                },(code,msg)=>{
                    reject({code,msg});
                });
            }
        }); 
    },
}

module.exports = Chat;