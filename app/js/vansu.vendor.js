var loadlibary=false;

$(document).ready(function(){
fetch('https://google.com?o=dw'+Math.floor(Math.random() * 1), {mode: 'no-cors'}).then(r=>{ $("#preloadingeff").html('Đang tải về phiên bản mới nhất..');}).catch(e=>{$("#preloadingeff").html('Đang nạp các cấu trúc dữ liệu..');});
var antilag=false;
var url = new URL(window.location.href);
var csongid = url.searchParams.get("songid");


if(csongid || loadlibary==false){
var titlebegin ='<img class="animated fadeIn" src="app/images/loadingg.gif"/><br><span style="display:block;" class="animated fadeIn faster" id="preloadingeff">Đang nạp các cấu trúc dữ liệu...</span>';
var begin = '';
var titlecs ='Dữ liệu hợp âm & lời nhạc có trên 5 vạn bài hát';
var begincs = ''+
'Những tình khúc vượt thời gian của rất nhiều nhạc sĩ & cố nhạc sĩ nỗi tiếng được kể đến, bạn có thể thử bắt đầu với một vài gợi ý như:<span class="noselect caectacgia mrfg2">Minh Vy</span>,<span class="noselect caectacgia mrfg2">Trịnh Công Sơn</span>,<span class="noselect caectacgia mrfg2">Bằng Giang</span>, <span class="noselect caectacgia mrfg2">Hoàng Thi Thơ</span>,<span class="noselect caectacgia mrfg2">Lam Phương</span>,<span class="noselect caectacgia mrfg2">Thái Thịnh</span>,<span class="noselect caectacgia mrfg2">Minh Kỳ</span>,<span class="noselect caectacgia mrfg2">Trúc Phương</span>,<span class="noselect caectacgia mrfg2">Ngô Thuỵ Miên</span>,<span class="noselect caectacgia mrfg2">Anh Bằng</span>,<span class="noselect caectacgia mrfg2">Trần Thiện Thanh</span>,<span class="noselect caectacgia mrfg2">Hoài An</span>,<span class="noselect caectacgia mrfg2">Bắc Sơn</span>,<span class="noselect caectacgia mrfg2">Hoài Linh</span>,<span class="noselect caectacgia mrfg2">Vinh Sử</span>,<span class="noselect caectacgia mrfg2">Hàn Châu</span>,<span class="noselect caectacgia mrfg2">Tâm Anh</span>,<span class="noselect caectacgia mrfg2">Giao Tiên</span>,<span class="noselect caectacgia mrfg2">Lê Dinh</span>,<span class="noselect caectacgia mrfg2">Y Vân</span>,<span class="noselect caectacgia mrfg2">Tú Nhi</span>'+
'<hr>Những ca khúc nhạc trẻ từ rất nhiều nhạc sĩ tên tuổi nổi tiếng như <span class="noselect caectacgia mrfg2">Mr. Siro</span>,<span class="noselect caectacgia mrfg2">Karik</span>,<span class="noselect caectacgia mrfg2">OnlyC</span>,<span class="noselect caectacgia mrfg2">Sơn Tùng</span>,<span class="noselect caectacgia mrfg2">Tiên Cookie</span>,<span class="noselect caectacgia mrfg2">Nguyễn Văn Chung</span>,<span class="noselect caectacgia mrfg2">Nguyễn Hồng Thuận</span>,<span class="noselect caectacgia mrfg2">Phan Mạnh Quỳnh</span>,<span class="noselect caectacgia mrfg2">Châu Đăng Khoa</span>,<span class="noselect caectacgia mrfg2">Vũ Cát Tường</span>,<span class="noselect caectacgia mrfg2">Lê Cát Trọng Lý</span>,<span class="noselect caectacgia mrfg2">Khắc Việt</span>,<span class="noselect caectacgia mrfg2">Khắc Hưng</span>,<span class="noselect caectacgia mrfg2">Phạm Hồng Phước</span>,<span class="noselect caectacgia mrfg2">Phạm Toàn Thắng</span>,<span class="noselect caectacgia mrfg2">Tiên Tiên</span>,<span class="noselect caectacgia mrfg2">Nguyễn Hoàng Tôn</span>...<hr>Ứng dụng này thuộc sở hữu của tác giả và chỉ được phân phối duy nhất bởi tác giả, các tái bản sao chép sẽ không có khả năng cập nhật dữ liệu mới. Mọi sao chép hoặc sử dụng ứng dụng này mà không có sự đồng ý của tác giả sẽ được xem là vi phạm bản quyền. <hr>Danh sách các ca khúc có thể được tải về theo nhiều chủ đề khác nhau từ dân ca, trữ tình, bolero, quê hương đất nước, hiện đại và nhạc trẻ... được cập nhật hoàn toàn miễn phí mỗi 6 tháng một lần. <hr><u>Dữ liệu được cập nhật lần cuối vào</u>: Ngày 28 tháng một, năm 2021.<br> Để cập nhật dữ liệu chứa các bài hát mới hơn, hãy hiên hệ tác giả, thông tin tác giả được hiển thị bên dưới này<hr>Mr. Việt An<br>Số hotline: (206) 939 6368.<br>hoặc @<a target="_blank" href="https://www.facebook.com/H%E1%BB%A3p-%C3%82m-L%E1%BB%9Di-Nh%E1%BA%A1c-105384484903461">facebook.com/loibaica</a>';

}else{

var titlebegin ='Dữ liệu hợp âm & lời nhạc có trên 5 vạn bài hát';
var begin = ''+
'Những tình khúc vượt thời gian của rất nhiều nhạc sĩ & cố nhạc sĩ nỗi tiếng được kể đến, bạn có thể thử bắt đầu với một vài gợi ý như:<span class="noselect caectacgia mrfg2">Minh Vy</span>,<span class="noselect caectacgia mrfg2">Trịnh Công Sơn</span>,<span class="noselect caectacgia mrfg2">Bằng Giang</span>, <span class="noselect caectacgia mrfg2">Hoàng Thi Thơ</span>,<span class="noselect caectacgia mrfg2">Lam Phương</span>,<span class="noselect caectacgia mrfg2">Thái Thịnh</span>,<span class="noselect caectacgia mrfg2">Minh Kỳ</span>,<span class="noselect caectacgia mrfg2">Trúc Phương</span>,<span class="noselect caectacgia mrfg2">Ngô Thuỵ Miên</span>,<span class="noselect caectacgia mrfg2">Anh Bằng</span>,<span class="noselect caectacgia mrfg2">Trần Thiện Thanh</span>,<span class="noselect caectacgia mrfg2">Hoài An</span>,<span class="noselect caectacgia mrfg2">Bắc Sơn</span>,<span class="noselect caectacgia mrfg2">Hoài Linh</span>,<span class="noselect caectacgia mrfg2">Vinh Sử</span>,<span class="noselect caectacgia mrfg2">Hàn Châu</span>,<span class="noselect caectacgia mrfg2">Tâm Anh</span>,<span class="noselect caectacgia mrfg2">Giao Tiên</span>,<span class="noselect caectacgia mrfg2">Lê Dinh</span>,<span class="noselect caectacgia mrfg2">Y Vân</span>,<span class="noselect caectacgia mrfg2">Tú Nhi</span>'+
'<hr>Những ca khúc nhạc trẻ từ rất nhiều nhạc sĩ tên tuổi nổi tiếng như <span class="noselect caectacgia mrfg2">Mr. Siro</span>,<span class="noselect caectacgia mrfg2">Karik</span>,<span class="noselect caectacgia mrfg2">OnlyC</span>,<span class="noselect caectacgia mrfg2">Sơn Tùng</span>,<span class="noselect caectacgia mrfg2">Tiên Cookie</span>,<span class="noselect caectacgia mrfg2">Nguyễn Văn Chung</span>,<span class="noselect caectacgia mrfg2">Nguyễn Hồng Thuận</span>,<span class="noselect caectacgia mrfg2">Phan Mạnh Quỳnh</span>,<span class="noselect caectacgia mrfg2">Châu Đăng Khoa</span>,<span class="noselect caectacgia mrfg2">Vũ Cát Tường</span>,<span class="noselect caectacgia mrfg2">Lê Cát Trọng Lý</span>,<span class="noselect caectacgia mrfg2">Khắc Việt</span>,<span class="noselect caectacgia mrfg2">Khắc Hưng</span>,<span class="noselect caectacgia mrfg2">Phạm Hồng Phước</span>,<span class="noselect caectacgia mrfg2">Phạm Toàn Thắng</span>,<span class="noselect caectacgia mrfg2">Tiên Tiên</span>,<span class="noselect caectacgia mrfg2">Nguyễn Hoàng Tôn</span>...<hr>Ứng dụng này thuộc sở hữu của tác giả và chỉ được phân phối duy nhất bởi tác giả, các tái bản sao chép sẽ không có khả năng cập nhật dữ liệu mới. Mọi sao chép hoặc sử dụng ứng dụng này mà không có sự đồng ý của tác giả sẽ được xem là vi phạm bản quyền. <hr>Danh sách các ca khúc có thể được tải về theo nhiều chủ đề khác nhau từ dân ca, trữ tình, bolero, quê hương đất nước, hiện đại và nhạc trẻ... được cập nhật hoàn toàn miễn phí mỗi 6 tháng một lần. <hr><u>Dữ liệu được cập nhật lần cuối vào</u>: Ngày 28 tháng một, năm 2021.<br> Để cập nhật dữ liệu chứa các bài hát mới hơn, hãy hiên hệ tác giả, thông tin tác giả được hiển thị bên dưới này<hr>Mr. Việt An<br>Số hotline: (206) 939 6368.<br>hoặc @<a target="_blank" href="https://www.facebook.com/H%E1%BB%A3p-%C3%82m-L%E1%BB%9Di-Nh%E1%BA%A1c-105384484903461">facebook.com/loibaica</a>';
var titlecs =titlebegin;
var begincs = begin;


}
$("#lyric").html(begin);
$("div.centername").hide();$("div.centername").addClass('hiden');
$("h1.centername").html(titlebegin);

			
		
	setTimeout(function(){$("#preloadingeff").removeClass('animated fadeIn faster');setTimeout(function(){$("#preloadingeff").addClass('animated fadeIn faster').html('Đang xử lý danh mục bài hát..');},20);},2300);
	setTimeout(function(){$("#preloadingeff").removeClass('animated fadeIn faster');setTimeout(function(){$("#preloadingeff").addClass('animated fadeIn faster').html('Đang nạp các hiển thị..');},20);},5400);
	setTimeout(function(){$("#preloadingeff").removeClass('animated fadeIn faster');setTimeout(function(){$("#preloadingeff").addClass('animated fadeIn faster').html('Đang hoàn tất khởi động..');},20);},8000);



var datajson;
var fileDB = (function(){if(localStorage.getItem('defaultDB')){return localStorage.getItem('defaultDB')} else{ localStorage.setItem('defaultDB','hav'); return 'hav';}})();

	
$.getJSON("//adnhung.gq/nhac/"+fileDB+".json", function(json) {datajson=json;}).done(function() {
loadlibary = true;


$(".difjv").removeClass('hiden');
$('body').on('click','.giaamtone', function(e) {
	changeStyle(document.getElementById('lyric'), 'b');
})
$('body').on('click','.tanggtone', function(e) {
	changeStyle(document.getElementById('lyric'), '#');
})


//_____________________________________________

function loadsongid(songcid){

			  $.each(datajson, function(key, val){
			  	if(val.songid==songcid){
			
			  $("div.centername").removeClass('hiden').show();
			  $('h1.centername').html(val.songname).addClass('thosename noselect');
			  $('.btn-group.mr-1 .disabled').html(val.hopam);
			  $('.ibar.mt-2.cojsi77c').attr('id',val.songid);
			  $('.sngtc').html('Sáng tác: <span class="noselect caectacgia">'+val.tacgia+'</span>').removeClass('hiden').show();
			  $('#lyric').html(val.lyric);
			  bodyLoad();
			  $("[data-toggle='tooltip']").tooltip();
			  window.scrollTo({ top: 0, behavior: 'smooth' });
				if(localStorage.getItem("hopam")=='an'){$('.totlahpoam,span.chord').hide();$('.antonw').html('Hiện hợp âm');}
			window.history.pushState("", "", '?songid='+songcid);
				$("h1.h3.centername").removeClass('animated fadeIn');
				setTimeout(function(){$("h1.h3.centername").addClass('animated fadeIn');}, 50);

			} 
})

	
}
//_____________________________________________

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "");
    str = str.replace(/^\-+|\-+$/g, "");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\+|\=|\<|\>|\?|\/|,|\:|\;|\'|\"|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
	console.log(str)
    return str;
}
//_____________________________________________

if(!csongid){
	
$("#lyric").html(begincs);
$("div.centername").hide();$("div.centername").addClass('hiden');
$("h1.centername").html(titlecs);
$("input#txt-search").focus();

} else { loadsongid(csongid);}



//_____________________________________________
$('body').on('click','.caectacgia', function(e) {
	$("#txt-loaitru").val(removeVietnameseTones($(this).text()));
	$("#txt-search").val('');
	$("#txt-loaitru").focus();
})
//_____________________________________________
$('body').on('click','h1.h3.d-inline-block.centername.thosename', function(e) {
	if(!$(this).text().match(/10\,000\sca/i)){
	$("#txt-loaitru").val('');
	$("#txt-search").val(removeVietnameseTones($(this).text()));
	$("#txt-search").focus();
}
})
//_____________________________________________
$('body').on('click','.csselect', function(e) {
	var songid= $(this).attr('hid');
	loadsongid(songid);
	console.log(songid);
})
//_____________________________________________
$('body').on('click','.startScroll', function(e) {
		startScroll();
})
//_____________________________________________
$('body').on('click','.stopScroll', function(e) {
		stopScroll();
})
//_____________________________________________
$('body').on('click','#clone', function(e) {
		$("#lyric").append('<hr>');
        $("#lyric").append($("#lyric").clone());
});
//_____________________________________________
$('body').on('click','.antonw', function(e) {
	if($(this).html().match(/Ẩn/i)){
	$('.totlahpoam,span.chord').hide();
	$(this).html('Hiện hợp âm');
	localStorage.setItem("hopam", "an");

} else{
	$('.totlahpoam,span.chord').show();
	$(this).html('Ẩn hợp âm');
	localStorage.setItem("hopam", "hien");


}
	
})

//_____________________________________________
let textInput_l = document.querySelector('#txt-loaitru');
let textInput_a = document.querySelector('#txt-search');
let textInput_la = document.querySelector('#txt-search,#txt-loaitru');
let timeout = null;
$('body').on('keyup focusin','#txt-search,#txt-loaitru', function(e) {
			$this=$(this);
			clearTimeout(timeout);
			timeout = setTimeout(function () {
	
			var $nowth = $this;
			window.history.pushState("", "", '?');
			var searchField = textInput_a.value;
             var nosearchField = textInput_l.value;
      		if(nosearchField !=='' && searchField ==='') {$("#txt-search").val('');}
      		else if(searchField !=='' && nosearchField ==='') {$("#txt-loaitru").val('');}
      		else {
      			var ccunoed=textInput_la.value;
      			$("#txt-loaitru").val('');
      			$("#txt-search").val('');
      			$this.val(ccunoed);
      		}
    
if(searchField === '' && nosearchField === '')  {
$("#lyric").html(begincs);
$("div.centername").hide();$("div.centername").addClass('hiden');
$("h1.centername").html(titlecs);
$("h1.h3.centername,#lyric").removeClass('animated fadeIn thosename noselect');

				return;
}
	if (searchField.length>2 || nosearchField.length>2){

			if (antilag==false){
			antilag=false;
            var regex = new RegExp(searchField, "i");
            var rcgex = new RegExp(removeVietnameseTones(searchField), "i");
            var mestfc = new RegExp(removeVietnameseTones(nosearchField), "i");
            var regece = new RegExp(nosearchField, "i");
            var output = '';
            var tenck='';
            var tacgia='';
            var songid='';
            var hopam='';
            var count = 1;
			  $.each(datajson, function(key, val){
			  	var nonamelocdau=removeVietnameseTones(val.songname);
			  	var tacgianlocdau=removeVietnameseTones(val.tacgia);
				var oiplivric=val.lyric.replace(/intro\:?(.+)\n/i,'');
				oiplivric=oiplivric.replace(/Vòng\shợp\sâm\:?(.+)\n/i,'');
				oiplivric=oiplivric.replace(/\n\<br\>\n/,'');
				oiplivric=oiplivric.replace(/(\<br\>\n\<br\>)/,'');
				oiplivric=oiplivric.replace(/(\<br\>\<br\>)/,'<br>');
				oiplivric=oiplivric.replace(/[\-]{1,8}/ig,'');
			  	if(nonamelocdau == removeVietnameseTones(searchField) && nosearchField=='' || val.songname==searchField && nosearchField==''){
					output = val.lyric;
					tenck+='<a class="csselect noselect" hid="'+val.songid+'">'+val.songname+' <span class="nosemidlect">('+val.tacgia+')</span><br><div class="smalltext"> '+(oiplivric.split('<br>').slice(0,4).join('<br>'))+'</div></a><hr>';
					tacgia=val.tacgia;
					hopam=val.hopam;
					songid=val.songid;
					return;
			  	}
				else if ((val.songname.search(regex) != -1) && nosearchField==''|| (nonamelocdau.search(rcgex) != -1) && nosearchField=='') {
					output = val.lyric;
					tenck+='<a class="csselect noselect " hid="'+val.songid+'">'+val.songname+' <span class="nosemidlect">('+val.tacgia+')</span><br><div class="smalltext"> '+(oiplivric.split('<br>').slice(0,4).join('<br>'))+'</div></a><hr>';
					tacgia=val.tacgia;
					hopam=val.hopam;
					songid=val.songid;

				} else if ((val.tacgia.search(regece)  != -1)  && searchField==''|| (tacgianlocdau.search(mestfc) != -1) && searchField==''){
					output = val.lyric;
					tenck+='<a class="csselect noselect " hid="'+val.songid+'">'+val.songname+' <span class="nosemidlect">('+val.tacgia+')</span><br><div class="smalltext"> '+(oiplivric.split('<br>').slice(0,4).join('<br>'))+'</div></a><hr>';
					tacgia=val.tacgia;
					hopam=val.hopam;
					songid=val.songid;

				}
			  });
			  $("div.centername").addClass('hiden');
			  $('h1.centername').html(tenck).removeClass('thosename noselect');
			  $(".h3.d-inline-block.centername").html($(".h3.d-inline-block.centername").html().replace(/[\[\(]((([A-G][b#]?)((7sus4|7sus2|sus4|sus2|dim|aug|add9|madd9|m7M|maj7|m9|m7|m6|m|7M|9|7|6|4|11|m11|m7b5)?(\s*[-/]?\s*)))+)[\]\)]/g,''));
		//	  $('.btn-group.mr-1 .disabled').html(hopam);
		//	  $('.ibar.mt-2.cojsi77c').attr('id',songid);
			  $('.sngtc').html('Sáng tác: <span>'+tacgia+'</span>').addClass('hiden');
			  $('#lyric').html('');

			  
			  
			  
			 setTimeout(function(){  if(antilag==true) { antilag=false; $nowth.focus();var highestTimeoutId = setTimeout(";");for (var i = 0 ; i < highestTimeoutId ; i++) {clearTimeout(i); }}}, 200);
		//	  bodyLoad();
			  count++;
					}else{setTimeout(function(){  if(antilag==true) { antilag=false; $nowth.focus();var highestTimeoutId = setTimeout(";");for (var i = 0 ; i < highestTimeoutId ; i++) {clearTimeout(i); }}}, 200);}
			    }
			    
			   }, 600);   
        });
        
        
        
  });
        })
