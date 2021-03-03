const fs = require("fs");
if (!process.argv[2]) throw new TypeError("missing version");
const list = ["1.13", "1.14", "1.15", "1.16", "1.17"];
for (const d of list) {
	const f = JSON.parse(fs.readFileSync(`${__dirname}/../${d}/pack.mcmeta`));
	const o = f.pack.version.git;
	f.pack.version.git = process.argv[2];
	fs.writeFileSync(`${__dirname}/../${d}/pack.mcmeta`, JSON.stringify(f, null, "\t"));
	console.log(`Updated ${d} (${o} -> ${process.argv[2]})`);
}
