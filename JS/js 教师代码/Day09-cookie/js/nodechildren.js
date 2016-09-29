/**
 * Created by CC on 2016/5/16.
 */
//兼容的第二种写法，if else
function getFirstChildEX(node){
    if(node.firstElementChild){
        return node.firstElementChild;
    }else{
        return node.firstChild;
    }
}
//获取最后一个元素节点
function getLastChild(node){
    return node.lastElementChild||node.lastChild;
}
//获取下一个兄弟元素节点
function getNextSibling(node){
    return node.nextElementSibling||node.nextSibling;
}
//获取上一个兄弟元素节点
function getPreviousSibling(node){
    return node.previousElementSibling||node.previousSibling;
}

//获取所有子元素节点
function getChildren(node){
    var arrChild=[];
    //把元素阶段放入到 数组 arrChild中。最后返回（return ） 这个数组 arrChild
    var children=node.childNodes;//包含了 元素节点 和文本节点的 数组。
    for(var i=0;i<children.length;i++){
        if(children[i].nodeType==1)//元素节点
        {
            arrChild.push(children[i]);
        }
    }
    return arrChild;
}