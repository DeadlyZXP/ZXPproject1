/**
 * Created by CC on 2016/5/16.
 */
//���ݵĵڶ���д����if else
function getFirstChildEX(node){
    if(node.firstElementChild){
        return node.firstElementChild;
    }else{
        return node.firstChild;
    }
}
//��ȡ���һ��Ԫ�ؽڵ�
function getLastChild(node){
    return node.lastElementChild||node.lastChild;
}
//��ȡ��һ���ֵ�Ԫ�ؽڵ�
function getNextSibling(node){
    return node.nextElementSibling||node.nextSibling;
}
//��ȡ��һ���ֵ�Ԫ�ؽڵ�
function getPreviousSibling(node){
    return node.previousElementSibling||node.previousSibling;
}

//��ȡ������Ԫ�ؽڵ�
function getChildren(node){
    var arrChild=[];
    //��Ԫ�ؽ׶η��뵽 ���� arrChild�С���󷵻أ�return �� ������� arrChild
    var children=node.childNodes;//������ Ԫ�ؽڵ� ���ı��ڵ�� ���顣
    for(var i=0;i<children.length;i++){
        if(children[i].nodeType==1)//Ԫ�ؽڵ�
        {
            arrChild.push(children[i]);
        }
    }
    return arrChild;
}