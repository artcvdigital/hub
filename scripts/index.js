// boxes
	var d,
			panelGeneralLink, eTarget, xTitles, xH1, fraction, group, aLink, rdactive;

// file
	d = document;
	panelGeneralLink = d.getElementsByClassName('pgl');
	xTitles = d.getElementsByClassName('x-titles');
	xH1 = d.getElementsByClassName('x-h1');
	fraction = d.getElementsByClassName('fraction');
	group = d.getElementsByClassName('group')
	aLink = d.getElementsByClassName('a-link')
	rdactive = false;

// temporal shortcuts
	var a, b;
	a = d.getElementById('bt-link-f');
	b = d.getElementById('sub-bt-link-6-3');
	setTimeout(()=>{
		a.click();
		setTimeout(()=>{
			b.click();
		}, 1);
	}, 1);

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
	};

	function rdLayer(){
		eTarget = event.currentTarget.id;
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

// events
	listenTo(panelGeneralLink, urlbarMenu);
	listenTo(xTitles, returnLayer)
	listenTo(group, rdLayer);