/* MISC */
// some of these may not work I haven't tested them in a while.

String.prototype.replaceFor = function(array, repWith) {
    for (var i = 0, o = this; i < array.length; i++) { o = o.replace(array[i], repWith[i]); } return o;
};

Array.prototype.randomChoice = function() {
	return this[Math.floor(Math.random() * (Number(this.length)))];
};

String.prototype.endsWithC = function(stuff) {
	for (let i = this.length, n = stuff.length; i > 0, n > 0; i--, n--) { if (this[i-1] == stuff[n-1]) { return true; }} return false;
};

String.prototype.startsWithC = function(stuff) {
	for (let i = 0, n = 0; i < this.length, n < stuff.length; i++, n++) { if (this[i] == stuff[n]) { return true; }} return false;
};

Array.prototype.endsWithC = function(stuff) {
	for (let i = this.length, n = stuff.length; i > 0, n > 0; i--, n--) { if (this[i-1] == stuff[n-1]) { return true; }} return false;
};

Array.prototype.startsWithC = function(stuff) {
	for (let i = 0, n = 0; i < this.length, n < stuff.length; i++, n++) { if (this[i] == stuff[n]) { return true; }} return false;
};

Array.prototype.prune = function(int, type) {
	if (!type) { type = "<"; } if (!int) { int = this.length; } for (let i = 0; i < int; i++) { (type == "<") ? this.pop() : (type == ">") ? this.shift() : 0; } return this;
};

String.prototype.get = function(int, type) {
    if (!int) { int = 0; } if (!type || type.toLowerCase() == "letter" || type.toLowerCase() == "l") { spl = ""; } else if (type.toLowerCase() == "word" || type.toLowerCase() == "w") { spl = " "; } return this.split(spl)[int];
};

Array.prototype.remove = function(int) {
	const [res, o] = [ [], this]; for (let i = 0; i < o.length; i++) { if (i < int || i > int) { res.push(this.shift()); } if (i == int) { this.shift(); }} return res;
};

String.prototype.remove = function(int) {
	const [res, o] = [ [], this]; for (let i = 0; i < o.length; i++) { if (i < int || i > int) { res.push(this.shift()); } if (i == int) { this.shift(); }} return res.join("");
};

Array.prototype.flip = function(int1, int2) {
	[this[int1], this[int2]] = [this[int2], this[int1]]; return this;
};

Array.prototype.flop = function(int1, int2) {
	const [res, o, a, b] = [ [], this, this[int1], this[int2]]; for (let i = 0; i < o.length; i++) { if (i < int1 || i > int1) { res.push(a); this.shift(); } if (i == int1) { res.push(b); this.shift(); }} return res;
};

String.prototype.includesFor = function(array) {
	for (let i = 0; i < array.length; i++) { if (this.includes(array[i])) { return true; }} return false;
};

Array.prototype.includesFor = function(array) {
	for (let i = 0; i < array.length; i++) { if (this.includes(array[i])) { return true; }} return false;
};

String.prototype.startsWithFor = function(array) {
	for (let i = 0; i < array.length; i++) { if (this.startsWith(array[i])) { return true; }} return false;
};

String.prototype.endsWithFor = function(array) {
	for (let i = 0; i < array.length; i++) { if (this.endsWith(array[i])) { return true; }} return false;
};

function divmod(x, y) {
	var [result, integer, value] = [ [], Math.floor(x / y), Math.floor(x % y) ]; result.push(integer); result.push(value); return result;
}

String.prototype.isImage = function(includeGIFS=false) {
	return (this.toLowerCase().endsWithFor( [".png", ".jpg", ".jpeg", ".webp", (includeGIFS) ? ".gif" : null] )) ? true : false;
};

String.prototype.isGIF = function() {
	return (this.toLowerCase().endsWith(".gif")) ? true : false;
};

String.prototype.isVideo = function() {
	return (this.toLowerCase().endsWithFor( [".mp4", ".mov", ".webm"] )) ? true : false;
};

String.prototype.isAudio = function() {
	return (this.toLowerCase().endsWithFor( [".mp3", ".wav", ".ogg"] )) ? true : false;
};

String.prototype.isType = function(type) {
	return (this.toLowerCase().endsWith(`.${type}`)) ? true : false;
};

String.prototype.forEach = function(func) {
    for (let i = 0; i < this.length; i++) { func(this[i]); }
};

Number.prototype.px_to_vh = function() {
	return Math.round(this/6.11111111111);
};

Number.prototype.vh_to_px = function() {
	return Math.round(this*6.11111111111);
};

Object.prototype.fetchKey = function(index) {
	return Object.keys(this)[index];
};

Object.prototype.fetchValues = function(index) {
	return this[Object.keys(this)[index]];
};

Object.prototype.indexOf = function(name) {
	return Object.keys(this).indexOf(name);
};

Object.prototype.stringify = function(replacer=null, indent=null) {
	return JSON.stringify(this, replacer, indent);
};

Object.prototype.parse = function(reviver=null) {
	return JSON.parse(this, reviver);
};

Object.prototype.forEach = function(func) {
    for (let i = 0; i < Object.keys(this).length; i++) {
        func({ key: Object.keys(this)[i], value: this[Object.keys(this)[i]] });
    }
};

Object.defineProperty(Object.prototype, "keys", {
    get() {return Object.keys(this); }, set() {}
});

Object.defineProperty(Object.prototype, "values", {
    get() {return Object.values(this); }, set() {}
});

Object.defineProperty(Object.prototype, "length", {
    get() {return Object.keys(this).length; }, set() {}
});



/* RANDOM */

var random = {
	randint: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	},
	
	choice: function(array) {
		return array[Math.floor(Math.random() * (Number(array.length)))];
	},
	
	randopp: function(chance, min, max) {
		let opp = this.randint(min, max); return (chance <= opp) ? true : false;
	}
};



/* HTML */

var html = {
	clear: function() {
		document.open();
		document.close();
	},
	
	px_to_vh: function(px) {
		return px.px_to_vh();
	},
	
	vh_to_px: function(vh) {
		return vh.vh_to_px();
	}
};

Object.defineProperty(html, "isFullscreen", {
    get() { return ((screen.availHeight || screen.height-30) <= window.innerHeight) ? true : false; }, set() {}
});



/* ASYNCIO */

var asyncio = {
	sleep: function(time) {
		return new Promise(resolve => setTimeout(resolve, time*1000));
	},
	
	sleepMs: function(time) {
		return new Promise(resolve => setTimeout(resolve, time));
	}
};



/* DATETIME */

var datetime = {
	datetime: {
		now: function(datestring) {
			var d = new Date();
			
			var FullDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			var FullMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			var year = d.getFullYear().toString().split(""); year.splice(0, 2); year = year.join("");
			var [xday, xmonth, xyear] = [ (d.getDate()).toString(), (d.getMonth()+1).toString(), year.toString()];
			
			if (xday < 10) { xday = "0"+xday.toString(); }
			if (xmonth < 10) { xmonth = "0"+xmonth.toString(); }
			
			for (let i = 0; i < datestring.length; i++) {
				datestring = datestring.replace("%H", d.getHours());
				datestring = datestring.replaceFor(
					["%M", "%S", "%A", "%d", "%b", "%B", "%Y", "%y", "%x"],
					[d.getMinutes(), d.getSeconds(), FullDay[d.getDay()], d.getDate(), d.getMonth()+1, FullMonth[d.getMonth()], d.getFullYear(), year, `${xmonth}/${xday}/${xyear}`]
				);
			}
			
			return datestring;
		}
	}
};



/* EXTMATH */

var extMath = {
	divmod: function(x, y) {
		var [result, integer, value] = [ [], Math.floor(x / y), Math.floor(x % y) ];
		result.push(integer); result.push(value);
	
		return result;
	}
};



/* LINK & FILE */

var file = link = {
	isImage: function(link, includeGIFS=false) {
		return link.isImage(includeGIFS);
	},
	
	isGIF: function(link) {
		return link.isGIF();
	},
	
	isVideo: function(link) {
		return link.isVideo();
	},
	
	isAudio: function(link) {
		return link.isAudio();
	},
	
	isType: function(link, type) {
		return link.isType(type);
	}
};

Object.defineProperty(link, "isJS", {
    get() { try {document.title;} catch(err) {return true;} return false;}, set() {}
});

Object.defineProperty(link, "isHTML", {
    get() { try {document.title;} catch(err) {return false;} return true;}, set() {}
});



/* JSON */
// only works for Node JS

if (file.isJS) {
var fs = require("fs");

var json = {
	load: function(data) {
		return JSON.parse(data);
	},
    // aliases
    loads: function(data) { this.load(data); },
	
	dump: function(data, file, args={replacer:null, indent:null}) {
		fs.writeFile(file, JSON.stringify(data, args.replacer, args.indent), (err) => {
            if (err) console.log(err);
        });
        
        return data;
	},
    // aliases
    dumps: function(data, file, args={replacer:null, indent:null}) { return this.dump(data, file, args); },
    write: function(data, file, args={replacer:null, indent:null}) { return this.dump(data, file, args); },
	
	clear: function(file) {
		fs.writeFile(file, "{}", (err) => {
			if (err) console.log(err);
		});
	},
	// aliases
	reset: function(file) { this.clear(file); },
	
	set: function(keys, values, file, args={replacer:null, indent:null}) {
		let data = JSON.stringify(fs.readFileSync(file, 'utf8'));
		let parse = JSON.parse(data);
		
		let valueFix = (typeof values == "string") ? `"${values}"` : (typeof values == "array") ? `[${values.join(", ")}]` : (typeof values == "object") ? JSON.stringify(values) : values;
		
		let parseFunc = new Function([],
			`
			let parse = ${parse};
			parse${keys} = ${valueFix};
			return parse;
			`
		);
		
		let stuff = new parseFunc();
		fs.writeFile(file, stuff.stringify(args.replacer, args.indent), (err) => {
			if (err) console.log(err);
		});
		
		return stuff;
	},
    // aliases
    edit: function(keys, values, file, args={replacer:null, indent:null}) {return this.set(keys, values, file, args);},
    change: function(keys, values, file, args={replacer:null, indent:null}) {return this.set(keys, values, file, args);},
    append: function(keys, values, file, args={replacer:null, indent:null}) {return this.set(keys, values, file, args);},
    create: function(keys, values, file, args={replacer:null, indent:null}) {return this.set(keys, values, file, args);},
    new: function(keys, values, file, args={replacer:null, indent:null}) {return this.set(keys, values, file, args);}
}};



/* Exporting for Node JS */
// if the thing you're using to run this doesn't like this part you can remove it
if (file.isJS) {
	try {
		
		module.exports = {
		
			random,
			html,
			asyncio,
			datetime,
			extMath,
			json,
			link, file
		
		};
		
	} catch(err) {}
}



/*  Node JS  */
	
	/*  importing  */ /*
			var {random, asyncio} = require("./nutfl");
		
		*/
		
		
/*  Web JS  */

	/*  importing  */ /*
			<head>
				<script type="text/javascript" src="./nutfl/index.js"></script>
			</head>
			
		*/
