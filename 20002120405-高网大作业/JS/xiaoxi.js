var s=document.querySelector("#search");
var w=s.offsetWidth;
var ml=0;
var timer1,timer2;
s.onfocus=function(){
	 s.value=""
	 clearInterval(timer2);
	 timer1=setInterval(bc,1);
	
}
s.onblur=function(){
	if(s.value=="")
	{
	 s.value="🔍搜索聊天记录"
	 clearInterval(timer1);
	 timer2=setInterval(bd,1);
	}
}

function bc()
{  if(w>250)
	{
		clearInterval(timer1);
	}
	else{
		w=w+2;
		ml=ml-2;
		s.style.width=w+"px";
	  }	
}

function bd()
{  if(w<=100)
	{
		clearInterval(timer2);
	}
	else{
		w=w-1;
		ml=ml+1;
		s.style.width=w+"px";
	  }	
}