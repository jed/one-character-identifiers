build:
	@mkdir -p dist
	@deno run -A build.js

test:
	@deno test test.js
