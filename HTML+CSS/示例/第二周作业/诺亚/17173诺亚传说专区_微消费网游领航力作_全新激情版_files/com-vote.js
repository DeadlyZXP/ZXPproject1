var TP = function(opt) {
    this.opts = $.extend({},{
		pt:'',
		id:null,
		kind:1,
		imglen:235,
		cbk:null
	},opt);
};

TP.prototype.action = function( options ){	
	var opts = $.extend({},{
		type:'query',
		param:null,
		ondata:null,
		url:{
			query:'http://vote.17173.com/port/getvote_interface.php',
			add:'http://vote.17173.com/action/vote_process_interface.php'
		}
	}, options);
	
	if( opts.param ){
		$.ajax({
			type:"GET",
			url:opts.url[opts.type],
			data:opts.param,
			dataType:'jsonp',
			scriptCharset:'UTF-8',
			success:function( data ){
				if( data && opts.ondata ){
					opts.ondata(data);
				}
			}
		});
	}
}

TP.prototype.init = function(){
	var o = this;
	if(!o.opts.id)return;
	o.action( {
		param:'id='+o.opts.id,
		ondata:function(dd){
			//var vlist = dd.votelist;
			//for(var i = 0; i < vlist.length; i++){
				//o.show(vlist[i]);
			//}
			o.show(dd.votelist[0]);
		}
	});
}

TP.prototype.show = function( opts ){
	if(!opts)return;
	var ht = [],
		ilist = opts.itemlist,
		vtotal = opts.totalnum,
		o = this;
	
	ht.push('<div class="tp-container">');
    ht.push('	<div class="tp-header"><h3><span>'+opts.title+'</span></h3></div>');
    ht.push('	<div class="tp-body">');
	ht.push('		<table width="100%">');
	
	for(var j = 0; j < ilist.length; j++){
		var per = vtotal==0?0:Math.floor(ilist[j].itemnum/vtotal*100),
		imgw = vtotal==0?0:Math.floor(ilist[j].itemnum/vtotal*o.opts.imglen);
		if(o.opts.kind==1){
			ht.push('<tr><td class="tp-label"><label class="radio"><input type="radio" value="'+ilist[j].itemid+'" id="radio" name="vote_item_'+opts.voteid+'"> '+ilist[j].itemtitle+'</label></td></tr><tr><td class="tp-img"><span class="tp-blank">&nbsp;</span><img src="http://ue2.17173.itc.cn/images/news/zt/61/2012/tp.jpg" width="'+imgw+'" height="8" /> <span>'+ilist[j].itemnum+'<i>('+per+'%)</i></span></td></tr>');	
		}else{			
			ht.push('<tr><td class="tp-label"><label class="radio"><input type="radio" value="'+ilist[j].itemid+'" id="radio" name="vote_item_'+opts.voteid+'"> '+ilist[j].itemtitle+'</label></td><td class="tp-img"><img src="http://ue2.17173.itc.cn/images/news/zt/61/2012/tp.jpg" width="'+imgw+'" height="8" /> <span>'+ilist[j].itemnum+'<i>('+per+'%)</i></span></td></tr>');
		}
	}
	
	ht.push('		</table>');
	ht.push('	</div>');
    ht.push('	<div class="tp-footer">\u5df2\u7ecf\u6709 <strong><i>'+vtotal+'</i>\u4eba</strong> \u6295\u7968<input type="button" class="tp-btn" value=""><input type="button" class="tp-btn2" value=""></div>');
	ht.push('</div>');
	
	$(o.opts.pt).html(ht.join(''));
	
	$('.tp-btn',o.opts.pt).live('click',function(){
		if($('input:radio:checked',o.opts.pt).length==0){
			alert('\u5bf9\u4e0d\u8d77\uff0c\u8bf7\u6295\u7968\uff01');
		}else{
			//alert('voteid='+o.opts.id+'&voteitem='+$('input:radio:checked',o.opts.pt).val())
			o.action({
				type:'add',
				param:'voteid='+o.opts.id+'&voteitem='+$('input:radio:checked',o.opts.pt).val(),
				ondata:function(d){
					alert(d.msg);
					if(d.code=='1'){
						o.action( {
							param:'id='+o.opts.id,
							ondata:function(dd){
								o.show(dd.votelist[0]);
							}
						});
					}
				}
			});
		}		
	});
	if(o.opts.cbk)o.opts.cbk(opts);
}