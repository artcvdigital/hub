// boxes
	var d, site,
			panelGeneralLink, eTarget, xTitles, xH1, fraction, group, aLink, ndactive, rdactive, ring, progressBarValue,
			subRingsWrapper, dt, months, time, cx, cy, printCoords;

// file
	d = document;
	site = d.getElementById('site');
	panelGeneralLink = d.getElementsByClassName('pgl');
	xTitles = d.getElementsByClassName('x-titles');
	xH1 = d.getElementsByClassName('x-h1');
	fraction = d.getElementsByClassName('fraction');
	group = d.getElementsByClassName('group')
	aLink = d.getElementsByClassName('a-link')
	ndactive = false;
	rdactive = false;
	ring = d.getElementsByClassName('ring');
	subFooterWrapper = d.getElementById('sub-footer-wrapper');
	progressBarValue = d.getElementById('progress-bar-value');
	subRingsWrapper = d.getElementById('sub-rings-wrapper');
	dt = new Date();
	months = ['ENE', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	time = d.getElementsByClassName('time');
	printCoords = d.getElementsByClassName('print-coords');

// methods
	function timer(fn, delay){
		setTimeout(()=>{
			fn();
		}, delay);
	};

	function listenTo(array, fn){
		for(var i=0; i<array.length; i++){
			array[i].addEventListener('click', ()=>{
				fn();
			});
		};
	};

	function urlbarMenu(){
		eTarget = event.currentTarget.id;
		enProgressBar();
		var content, items, elem, print;
		content = d.getElementById(eTarget).getAttribute('content');
		xTitles[1].style = 'display: flex; opacity: 1;';
		xH1[1].innerHTML = content;
		for(var i=0; i<group.length; i++){
			group[i].style = 'display: none;';
		};
		elem = d.getElementById(eTarget);
		items = elem.getAttribute('list');
		print = d.getElementsByClassName(items);
		for(var i=0; i<print.length; i++){
			print[i].style = 'display: block;';
		};
		subRingsWrapper.style = 'display: block; transform: scale(.5,.5); transition: .6s ease-in-out;';
		fraction[0].style = 'display: grid; transform: scale(.6,.6); transition: .6s ease-in-out;';
		fraction[1].style = 'display: grid;';
		setTimeout(()=>{
			d.getElementById('f-nd').focus();
		}, 1000);
		ndactive = true;
	};

	function rdLayer(){
		eTarget = event.currentTarget.id;
		enProgressBar();
		for(var i=0; i<aLink.length; i++){
			aLink[i].style = 'display: none;';
		};
		var elem, list, items, content;
		elem = d.getElementById(eTarget);
		content = elem.getAttribute('content');
		items = elem.getAttribute('list');
		print = d.getElementsByClassName(items);
		for(var i=0; i<print.length; i++){
			print[i].style = 'display: block;';
		};
		xTitles[2].style = 'display: flex;';
		xH1[2].innerHTML = content;
		subRingsWrapper.style = 'display: block; transform: scale(.2,.2); transition: .6s ease-in-out;';
		fraction[0].style = 'display: grid; transform: scale(.3,.3); transition: .6s ease-in-out;';
		fraction[1].style = 'display: grid; transform: scale(.6,.6); transition: .6s ease-in-out;';
		fraction[2].style = 'display: grid;';
		rdactive = true;
	};

	function returnLayer(){
		eTarget = event.currentTarget.id;
		enProgressBar();
		if(eTarget == 'a-title'){
			if(rdactive){
				fraction[2].style = 'display: grid; transform: scale(1.2,1.2); opacity: 0; transition: .3s;';
				xTitles[2].style = 'display: flex; transform: translate(-3em,0); opacity: 0; transition: .3s;';
				xTitles[1].style = 'display: flex; transform: translate(-3em,0); opacity: 0; transition: .3s;';
				setTimeout(()=>{
					fraction[1].style = 'display: grid; transform: scale(1.2,1.2); opacity: 0; transition: .3s;';
					xTitles[2].style = 'display: none;';
					xTitles[1].style = 'display: none;';
					setTimeout(()=>{
						fraction[2].style = 'display: none;';
						fraction[1].style = 'display: none;';
						setTimeout(()=>{
							subRingsWrapper.style = 'display: block; transform: scale(1,1); transition: .4s;';
						}, 100);
						fraction[0].style = 'transform: scale(1,1); transition: .4s;';
					}, 50);
				}, 50);
			}else{
				fraction[1].style = 'display: grid; transform: scale(1.2,1.2); opacity: 0; transition: .3s;';
				xTitles[1].style = 'display: flex; transform: translate(-3em,0); opacity: 0; transition: .3s;';
				setTimeout(()=>{
					xTitles[1].style = 'display: none;';
					fraction[1].style = 'display: none;';
					fraction[0].style = 'transform: scale(1,1); transition: .4s;';
					setTimeout(()=>{
						subRingsWrapper.style = 'display: block; transform: scale(1,1); transition: .4s;';
					}, 100);
				}, 50);
			};
		}else if(eTarget == 'b-title'){
			fraction[2].style = 'display: grid; transform: scale(1.2,1.2); opacity: 0; transition: .4s;';
			xTitles[2].style = 'display: flex; transform: translate(-3em,0); opacity: 0; transition: .3s;';
			setTimeout(()=>{
				xTitles[2].style = 'display: none;';
				fraction[2].style = 'display: none;';
				setTimeout(()=>{
					fraction[0].style = 'display: grid; transform: scale(.6,.6); transition: .4s;';
					setTimeout(()=>{
						subRingsWrapper.style = 'display: block; transform: scale(.5,.5); transition: .4s;';
					}, 100);
				}, 50);
				fraction[1].style = 'display: grid; transform: scale(1,1); transition: .4s;';
			}, 50);
		};
		rdactive = false;
	};

	function showOffMainMenuLinks(){
		for(var i=0; i<panelGeneralLink.length; i++){
			panelGeneralLink[i].style = 'display: block;';
		};
		xTitles[0].style = 'display: flex;';
	};

	function getCore(){
		var delay, i, ringsWrapper;
		delay = 1;
		i = 0;
		ringsWrapper = d.getElementById('rings-wrapper')
		function callback(){
			setTimeout(()=>{
				ring[i].style = `opacity: 1; transition: .${delay}s`;
				if(i < 15){
					delay = delay + 10;
				}else{
					delay = delay + 2;
				};
				if(i > 16){
					ringsWrapper.classList.add('bright-element');
				};
				i++;
				if(i<ring.length){
					callback();
				}else{
				};
			}, delay)
		};
		callback();
	};

	function enProgressBar(){
		function callback(){
			progressBarValue.style = 'display: block;';
		};
		function callback1(){
			progressBarValue.style = 'display: none;';
		};
		callback();
		timer(callback1, 950);
	};

		var tt;
	function setTime(){
		tt = new Date();
		if(tt.getHours() < 10){
			time[0].innerHTML = `0${tt.getHours()}`;
		}else{
			time[0].innerHTML = tt.getHours();
		};
		if(tt.getMinutes() < 10){
			time[1].innerHTML = `0${tt.getMinutes()}`;
		}else{
			time[1].innerHTML = tt.getMinutes();
		};
		if(tt.getSeconds() < 10){
			time[2].innerHTML = `0${tt.getSeconds()}`;
		}else{
			time[2].innerHTML = tt.getSeconds();
		};
		setTimeout(()=>{
			setTime();
		}, 1000);
	};

	function cz(){
		cx = event.clientX;
		cy = event.clientY;
		if(cx < 10){
			printCoords[0].innerHTML = `00${cx}`;
		}else if(cx < 100){
			printCoords[0].innerHTML = `0${cx}`;
		}else{
			printCoords[0].innerHTML = cx;
		};
		if(cy < 10){
			printCoords[1].innerHTML = `00${cy}`;
		}else if(cy < 100){
			printCoords[1].innerHTML = `0${cy}`;
		}else{
			printCoords[1].innerHTML = cy;
		};
	};

	function startsIn(){
		d.getElementById('print-date').innerHTML = `${dt.getDate()}.${months[(dt.getMonth()-1)]}.${dt.getFullYear()}`;
		setTime();
		d.getElementsByClassName('screen-res')[0].innerHTML = window.innerWidth;
		d.getElementsByClassName('screen-res')[1].innerHTML = window.innerHeight;
		listenTo(panelGeneralLink, urlbarMenu);
		listenTo(xTitles, returnLayer)
		listenTo(group, rdLayer);
		timer(showOffMainMenuLinks, 1500);
		window.oncontextmenu = ()=>{
			return false;
		};
		window.addEventListener('mousemove', ()=>{
			cz();
		});
		window.addEventListener('resize', ()=>{
			d.getElementsByClassName('screen-res')[0].innerHTML = window.innerWidth;
			d.getElementsByClassName('screen-res')[1].innerHTML = window.innerHeight;
		});
	};

// events
	getCore();
	startsIn();