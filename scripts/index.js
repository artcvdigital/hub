// boxes
	var d, site,
			panelGeneralLink, eTarget, xTitles, xH1, fraction, group, aLink, ndactive, rdactive, ring, progressBarValue;

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

// temporal shortcuts
	// var a, b;
	// a = d.getElementById('bt-link-d');
	// b = d.getElementById('sub-bt-link-4-1');
	// setTimeout(()=>{
	// 	a.click();
	// 	setTimeout(()=>{
	// 		b.click();
	// 	}, 1);
	// }, 1);

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
		fraction[0].style = 'display: grid; transform: scale(.6,.6); transition: .6s ease-in-out;';
		fraction[1].style = 'display: grid;';
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
		fraction[0].style = 'display: grid; transform: scale(.3,.3); transition: 1s ease-out;';
		fraction[1].style = 'display: grid; transform: scale(.6,.6); transition: 1s ease-out;';
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
						fraction[0].style = 'transform: scale(1,1); transition: .4s;';
					}, 300);
				}, 300);
			}else{
				fraction[1].style = 'display: grid; transform: scale(1.2,1.2); opacity: 0; transition: .3s;';
				xTitles[1].style = 'display: flex; transform: translate(-3em,0); opacity: 0; transition: .3s;';
				setTimeout(()=>{
					xTitles[1].style = 'display: none;';
					fraction[1].style = 'display: none;';
					fraction[0].style = 'transform: scale(1,1); transition: .4s;';
				}, 300);
			};
		}else if(eTarget == 'b-title'){
			fraction[2].style = 'display: grid; transform: scale(1.2,1.2); opacity: 0; transition: .4s;';
			xTitles[2].style = 'display: flex; transform: translate(-3em,0); opacity: 0; transition: .3s;';
			setTimeout(()=>{
				xTitles[2].style = 'display: none;';
				fraction[2].style = 'display: none;';
				fraction[1].style = 'display: grid; transform: scale(1,1); transition: .4s;';
				fraction[0].style = 'display: grid; transform: scale(.6,.6); transition: .4s;';
			}, 300);
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

	function startsIn(){
		listenTo(panelGeneralLink, urlbarMenu);
		listenTo(xTitles, returnLayer)
		listenTo(group, rdLayer);
		timer(showOffMainMenuLinks, 1500);
	};

// events
	getCore();
	startsIn();