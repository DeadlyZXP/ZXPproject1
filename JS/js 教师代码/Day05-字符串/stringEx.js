/**
 * Created by CC on 2016/8/8.
 */
String.prototype.replaceEx=function (exSubStr,newStr,index){
    var arrSubStr=this.split(exSubStr);//[];
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
