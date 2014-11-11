HTTP/2 and JS modules experiment
================================

This is a simple JS calculator composed of modules written using ES6 syntax. As of now, no browser supports it, so they are compiled using [6to5](https://github.com/sebmck/6to5).

As the objective is to test JS loading performance with HTTP, HTTPS and HTTP/2, there are four branches with Grunt configured to do optimizations according to the target protocol and modularization system, since ES6 modules can be compiled to Common JS or AMD.

Timings
-------

The repository already includes a `timings` file. These were obtained with the following configuration:

- Firefox 36.0a1 (2014-11-10)
- nginx 1.1.19 (for HTTP & HTTPS tests)
- nghttpd 0.6.5 (for HTTP/2 tests)

Scripts `slowdown.sh` and `restore.sh` were used to simulate low-bandwidth locally, in a controlled fashion.

When *server push* was tested, all modules except `main.js` were pushed (`main.js` and the module library were not pushed).

Known limitations
-----------------

Each module is quite small, what is quite unrealistic and enhances differences between HTTP and HTTP/2 versions running over HTTP(S).
