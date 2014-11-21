HTTP/2 and JS modules experiment
================================

This is a simple JS calculator composed of modules written using ES6 syntax. As of now, no browser supports it, so they are compiled using [6to5](https://github.com/sebmck/6to5).

As the objective is to test JS loading performance with HTTP, HTTPS and HTTP/2, there are eight branches with Grunt configured to do optimizations according to the target protocol and modularization system, since one can use ES6 modules or not, and those can be compiled to Common JS or AMD, and AMD can be used with a dynamic loader or just a simpler `define` function and `<script>` tags, hence:

- No modularization (branches `tags`)
- AMD with dynamic loader (branches `amd`)
- AMD with simple loader (branches `amd-tags`)
- CommonJS (branches `cjs`)

Known limitations
-----------------

Each module is quite small, what may be unrealistic and enhances differences between HTTP and HTTP/2 versions running over HTTP(S).
