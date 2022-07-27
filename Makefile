install:
	npm ci

brain-games:
	node bin/nodejs-package.js

publish:
	npm publish --dry-run