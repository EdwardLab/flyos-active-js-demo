

"ui";
const ui_barcolor = "#ffffff"
ui.statusBarColor(ui_barcolor)


ui.layout(

    <vertical>
        <appbar bg="{{ui_barcolor}}">
            <toolbar id="toolbar" title="FlyOS激活程序" titleTextColor="#000000" />

        </appbar>


        <vertical  >
            <text text=" 感谢您购买使用MicrotechProduct。FlyOS极致于在Android上更好的发挥，体验玩机的乐趣。" textColor="black" textSize="16sp"/>
            <button id="mk_file" text="您是已购买用户，现在激活FlyOS" />
            <button id="act_op" text="打开termux查看状态(打开前请先关闭)" />
            <button id="del_file" text="撤销/删除此设备的FlyOS授权(可以重新授权)" />
            <text text="Copyleft GPL-V3 2019-2021 FlyOS All rights reserved."  textSize="13sp"/>
            <text text="FlyOS激活程序 Powered by:Microtech Software Group 作者:XingYuJie FlyOS交流组:t.me/flyospro " textSize="13sp"/>
            <text text="本软件仅限中国大陆使用(China mainland)，其他国家和地区请使用当地语言适配版" textSize="9sp"/>
            


        </vertical>


    </vertical>



)
importClass(Packages.androidx.core.graphics.drawable.DrawableCompat);
importClass(Packages.android.content.res.ColorStateList);
importClass(Packages.android.graphics.Color);
var wrapedOverflowIcon = DrawableCompat.wrap(ui.toolbar.getOverflowIcon())
DrawableCompat.setTintList(wrapedOverflowIcon,ColorStateList.valueOf(Color.parseColor("#000000")))


ui.mk_file.click(function () {
log(shell("mkdir -p /sdcard/.FlyOS/Keys/ "))
log(shell("touch /sdcard/.FlyOS/Keys/fpro.fk "))
toastLog("激活成功！重启Termux软件即可激活使用！")
})
ui.act_op.click(function(){
if(!app.launchApp("Termux")){

    toastLog("没有安装Termux，请先安装Termux和FlyOS For Termux")
}

})
ui.del_file.click(function () {
log(shell("rm -rf /sdcard/.FlyOS/Keys/fpro.fk"))
toastLog("授权以撤销，重启Termux将切换成免费版。您可以点击现在激活FlyOS来重新激活FlyOS!")
})
ui.act_op.click(function(){
if(!app.launchApp("Termux")){

    toastLog("没有安装Termux，请先安装Termux和FlyOS For Termux")
}

})
ui.emitter.on("create_options_menu", menu=>{
    menu.add("设置");
    menu.add("关于");
});
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "设置":
            toast("还没有设置，直接激活就好啦");
            break;
        case "关于":
            alert("关于", "FlyOS 激活工具收费版\nPowered by FlyOS");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);


http.__okhttp__.setTimeout(2000)
setInterval(function () {
try{
const ch_net = http.get("www.baidu.com").statusCode
log(ch_net)

}catch(e){
    toastLog("无法激活！无网络连接，请联网并重试！")
    exit()
}
}, 2000)
