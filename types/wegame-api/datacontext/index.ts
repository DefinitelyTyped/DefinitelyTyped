wx.onMessage(data => {

    console.log("cmd in worker -> " + data.item);

    if(data.item === "friend") {
        wx.getFriendCloudStorage({
            keyList:["selfOpenId"],
            success: function(res){
                console.log("----------> in worker - getFriendCloudStorage: " + console.dir(res.data));
            }
        })
    }
    else if(data.item === "user") {
        wx.getUserInfo({
            openIdList:["selfOpenId"],
            success: res => {
                console.log("----------> in worker - getUserInfo: " + res.data[0].nickName);
            }
        });
    }
    else if(data.item === "group") {
        wx.getGroupCloudStorage({
            shareTicket:"",
            keyList:["selfOpenId"],
            success:function(res){
                console.log("----------> in worker - getGroupCloudStorage: " + res.data);
            }
        })
        
    }

});

