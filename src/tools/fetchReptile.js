const fetch = require('node-fetch')

fetch('https://api.bilibili.com/x/vip/web/user/info?jsonp=jsonp',{
    headers:{
        cookie:"buvid3=403C17A7-055D-2B4E-B5CB-68E06CF863D179767infoc; i-wanna-go-back=-1; bsource=search_baidu; _uuid=7E79F31A-5B82-10610B-A9E8-89CD3C89B1010B80006infoc; buvid4=7F7C3CF2-395B-E4DE-97F7-CDB083AD503E80679-022060816-RYZwLL8nRmXkIBwtr01ilQ%3D%3D; nostalgia_conf=-1; CURRENT_BLACKGAP=0; sid=hu6bpmdz; blackside_state=0; rpdid=|(J|~uu)kY|k0J'uYlRY~)Y)k; fingerprint=d76c893004396ee4afa524c6f3a1be1b; buvid_fp_plain=undefined; DedeUserID=407088049; DedeUserID__ckMd5=8b027a6ea3f4ecd9; SESSDATA=e8e0e50a%2C1670315814%2Cfaafe*61; bili_jct=80754782087d60da4092e4d6a2f81d3a; b_ut=5; buvid_fp=d76c893004396ee4afa524c6f3a1be1b; CURRENT_QUALITY=80; bp_video_offset_407088049=669775243346182100; PVID=1; CURRENT_FNVAL=80; LIVE_BUVID=AUTO7616548311772523; innersign=0; b_lsid=4D33D5D9_1814C0386D4; b_timer=%7B%22ffp%22%3A%7B%22333.1007.fp.risk_403C17A7%22%3A%221814C038A52%22%2C%22333.337.fp.risk_403C17A7%22%3A%221814B8D1792%22%2C%22333.788.fp.risk_403C17A7%22%3A%221814B9195BA%22%2C%22333.42.fp.risk_403C17A7%22%3A%22181479BC5B4%22%2C%22333.999.fp.risk_403C17A7%22%3A%221814C0CF599%22%7D%7D; fingerprint3=263779b87b1b2a340976c7a173f20f71"
    }
}).then(res => {
    return res.json()
}).then(data=>{
    console.log(data)
})