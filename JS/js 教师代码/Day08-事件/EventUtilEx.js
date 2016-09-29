/**
 * Created by CC on 2016/8/11.
 */
var EventUtil={
    getEvent:function(event){
        return event||window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },
    addEventListener:function(element,type,func){
        if(element.addEventListener){
            element.addEventListener(type,func,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,func);
        }else{
            element["on"+type]=func;
        }
    },
    removeEventListener:function(element,type,func){
        if(element.removeEventListener){
            element.removeEventListener(type,func,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type);
        }else{
            element["on"+type]=null;
        }
    }
}