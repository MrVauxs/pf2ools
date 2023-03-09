export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","img/logo/Background.svg","img/logo/NoBackground.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.63a521f2.js","imports":["_app/immutable/entry/start.63a521f2.js","_app/immutable/chunks/index.1d269614.js","_app/immutable/chunks/singletons.1e89b0e7.js","_app/immutable/chunks/index.76d31d0e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c3851ab2.js","imports":["_app/immutable/entry/app.c3851ab2.js","_app/immutable/chunks/index.1d269614.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
