/**
 * Created by CC on 2016/8/8.
 */
//index 从1开始；
//index 从0开始；当传递0的时候，替换第一个；
function replaceOfIndex(str,exSubStr,newStr,index){
    var arrSubStr=str.split(exSubStr);//[];
    var sYouNew="";
    for(var i=0;i<arrSubStr.length;i++){
        if(i==arrSubStr.length-1){
            sYouNew+=arrSubStr[i];
        }else if(i==index-1){
            sYouNew+=arrSubStr[i]+newStr;
        }
        else {
            sYouNew += arrSubStr[i] + exSubStr;
        }
    }
    return sYouNew;
}
