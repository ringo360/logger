const c = console;

export const logger = {
	log: (t: string) => {
		c.log(t);
	},
	info: (t: string) => {
		c.log(`\x1b[36m[INFO]\x1b[0m ${t}`);
	},
	warn: (t: string) => {
		c.warn(`\x1b[33m[WARN]\x1b[0m ${t}`);
	},
	err: (t: string) => {
		c.error(`\x1b[31m[ERROR]\x1b[0m ${t}`);
	},
	crit: (t: string) => {
		c.error(`\x1b[41m[CRIT]\x1b[0m ${t}`);
	},
};

export const lg = logger;
