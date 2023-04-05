const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'5aaed9b7-7fe3-47c3-bb52-db59859ce198'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
